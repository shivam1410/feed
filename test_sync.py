"""Tests for feed-parsing helpers in sync.py.  Run: python3 -m unittest test_sync"""
import unittest

from sync import parse_rss, split_arxiv_prefix

ARXIV_RSS = b"""<?xml version="1.0"?><rss version="2.0"><channel>
<item><title>Paper A</title><link>https://arxiv.org/abs/2609.28603</link>
<description>arXiv:2609.28603v1 Announce Type: new Abstract: We study things.</description></item>
<item><title>Paper B</title><link>https://arxiv.org/abs/2609.28604</link>
<description>arXiv:2609.28604v2 Announce Type: replace-cross Abstract: Revised work.</description></item>
</channel></rss>"""


class SplitArxivPrefixTest(unittest.TestCase):
    def test_strips_id_and_announce_type(self):
        kind, text = split_arxiv_prefix("arXiv:2609.28603v1 Announce Type: new Abstract: We study things.")
        self.assertEqual(kind, "new")
        self.assertEqual(text, "We study things.")

    def test_handles_hyphenated_types(self):
        kind, text = split_arxiv_prefix("arXiv:1.2v3 Announce Type: replace-cross Abstract: x")
        self.assertEqual((kind, text), ("replace-cross", "x"))

    def test_leaves_non_arxiv_text_alone(self):
        self.assertEqual(split_arxiv_prefix("Plain summary."), ("", "Plain summary."))
        self.assertEqual(split_arxiv_prefix(""), ("", ""))


class ParseRssTest(unittest.TestCase):
    def test_arxiv_items_carry_announce_and_clean_summary(self):
        a, b = parse_rss(ARXIV_RSS, "arXiv (cs.LG)")
        self.assertEqual(a["announce"], "new")
        self.assertEqual(a["summary"], "We study things.")
        self.assertEqual(b["announce"], "replace-cross")
        self.assertEqual(b["summary"], "Revised work.")


if __name__ == "__main__":
    unittest.main()


import datetime
import json

from server import strip_em_dashes
from sync import (aggregate_openrouter_usage, boost_trending, mark_freshness, parse_arena_entries,
                  parse_item_date, trend_terms)


class StripEmDashesTest(unittest.TestCase):
    def test_replaces_dashes_with_commas(self):
        self.assertEqual(strip_em_dashes("Fast — and cheap — model"), "Fast, and cheap, model")
        self.assertEqual(strip_em_dashes("A–B"), "A, B")

    def test_leaves_clean_text_alone(self):
        self.assertEqual(strip_em_dashes("No dashes here."), "No dashes here.")
        self.assertEqual(strip_em_dashes(""), "")


class FreshnessTest(unittest.TestCase):
    def test_parses_rss_and_iso_dates(self):
        self.assertEqual(parse_item_date("Sat, 19 Sep 2026 05:48:28 GMT").year, 2026)
        self.assertEqual(parse_item_date("2026-09-18T05:05:55.000Z").day, 18)
        self.assertIsNone(parse_item_date("not a date"))

    def test_marks_old_items_stale_for_home(self):
        now = datetime.datetime.now(datetime.timezone.utc)
        recent = (now - datetime.timedelta(days=2)).isoformat()
        old = (now - datetime.timedelta(days=40)).isoformat()
        items = mark_freshness([{"date": recent}, {"date": old}, {"date": ""}])
        self.assertEqual([it["fresh"] for it in items], [True, False, True])
        self.assertEqual(items[1]["ageDays"], 40)


class TrendingTest(unittest.TestCase):
    def test_terms_skip_generic_words(self):
        self.assertEqual(trend_terms("Jev introduces a new shape of LLM"), {"jev": "Jev"})
        self.assertEqual(trend_terms("Joint Latent Dynamics for Causal Learning"), {})
        self.assertEqual(trend_terms("Evaluating Real-World Planning with AlphaFold 3"), {"alphafold": "AlphaFold"})

    def test_cross_source_topic_is_boosted_and_labelled(self):
        items = [
            {"title": "Jev launches", "source": "A", "score": 60},
            {"title": "Here are 6 clones of Jev", "source": "B", "score": 65},
            {"title": "Just Ask Jev: calibrated decisions", "source": "C", "score": 70},
            {"title": "Unrelated boron result", "source": "A", "score": 80},
        ]
        items, topics = boost_trending(items)
        self.assertEqual([it.get("trending") for it in items], ["jev", "jev", "jev", None])
        self.assertEqual([it["score"] for it in items], [75, 80, 85, 80])
        self.assertEqual((topics[0]["term"], topics[0]["label"]), ("jev", "Jev"))
        self.assertEqual(topics[0]["items"], 3)

    def test_single_source_repetition_is_not_trending(self):
        items = [{"title": f"Boron result {i}", "source": "A", "score": 50} for i in range(4)]
        items, topics = boost_trending(items)
        self.assertEqual(topics, [])
        self.assertTrue(all(it["score"] == 50 for it in items))


ARENA_PAGE = (
    '<script>self.__next_f.push([1,"x\\"id\\":\\"leaderboard-sets/public/leaderboards/'
    'text-overall-style_control/leaderboard-snapshots/latest\\",\\"entries\\":[{\\"rank\\":1,'
    '\\"modelDisplayName\\":\\"closed-1\\",\\"rating\\":1500.4,\\"votes\\":10,\\"modelOrganization\\":\\"Org\\",'
    '\\"license\\":\\"Proprietary\\"},{\\"rank\\":2,\\"modelDisplayName\\":\\"open-1\\",\\"rating\\":1490.6,'
    '\\"votes\\":5,\\"modelOrganization\\":\\"Lab\\",\\"license\\":\\"MIT\\"}],\\"tail\\":1"])</script>'
)


class LeaderboardParsersTest(unittest.TestCase):
    def test_parses_arena_entries_and_open_flag(self):
        rows = parse_arena_entries(ARENA_PAGE)
        self.assertEqual([(r["rank"], r["name"], r["rating"], r["open"]) for r in rows],
                         [(1, "closed-1", 1500, False), (2, "open-1", 1491, True)])

    def test_openrouter_usage_sums_days_and_ranks(self):
        rows = [
            {"model_permaslug": "a/x-20260101", "total_prompt_tokens": 10, "total_completion_tokens": 5, "count": 1},
            {"model_permaslug": "a/x-20260101", "total_prompt_tokens": 10, "total_completion_tokens": 5, "count": 2},
            {"model_permaslug": "b/y", "total_prompt_tokens": 100, "total_completion_tokens": 0, "count": 1},
        ]
        ranked = aggregate_openrouter_usage(rows)
        self.assertEqual([(r["rank"], r["name"], r["tokens"], r["requests"]) for r in ranked],
                         [(1, "y", 100, 1), (2, "x", 30, 3)])
        self.assertEqual(ranked[1]["url"], "https://openrouter.ai/a/x")
