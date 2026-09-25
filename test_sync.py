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
