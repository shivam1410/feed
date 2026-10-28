---
title: "Exploratory creative pre-ranking: Hierarchical empirical-Bayes Thompson sampling for real-time creative optimization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36020"
authors: ["Jiale Han, Ajith Moparthi, Dan Xie, Xiaowu Dai"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36020v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Dynamic creative optimization decides which creative of an ad to render for each request. Recent work places that choice before ad ranking, but relies on deterministic point predictors with no calibrated uncertainty. AI-generated content has made creatives nearly free, while feedback per creative remains sparse and selection faces a tight latency budget. We introduce a creative pre-ranker that scores every recalled creative and shortlists each campaign's pool before the per-user ranker runs. Creatives sit in a hierarchy of audience segment, advertised item, campaign and creative, so a cold creative falls back on what its parent levels have earned, and how much it borrows from its parents is set in closed form from historical logs, with one parameter per level and nothing tuned. To stay within the latency budget, the pre-ranker predicts for an audience segment rather than an individual user, from per-attribute counters. It selects by a single Thompson draw per creative, balancing exploration and exploitation so that a new creative still has a chance to be learned. Replaying Roblox Sponsored-ads traffic over campaigns with competing creatives, the shortlist lifts predicted play-through rate by 8.14% against 2.80% for an equally sized random shortlist, forwards more than 40% fewer creatives than the full pool, and adds only 0.2% to serving time. After an A/B test on live traffic, the method now serves in production at Roblox.
