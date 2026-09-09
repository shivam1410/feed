---
title: "Data Scout: Targeted Web Crawling for Domain-Specific Pretraining Corpora"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05766"
authors: ["Chirag Garg, Eelaaf Zahid, Farhan Ahmed, Jay Pankaj Gala, Eric Butler, Heiko Ludwig"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.05766v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05766v1 Announce Type: new Abstract: The dominant approach to building domain-specific pretraining corpora is to filter large web archives such as CommonCrawl. This works well for popular domains but breaks down for specialized ones, where relevant content is sparse and often beyond the reach of popularity-driven crawlers. We present Data Scout, which inverts this: instead of filtering an archive, it directs a targeted crawl. An LLM expands a root topic into a taxonomy and thousands of search queries; the returned URLs (seeds) are grouped by subdomain and screened with a user-supplied classifier (the probe), admitting each subdomain on the basis of a small sample. This works because relevance has a sharp boundary at the subdomain level: in mathematics, a page is 21x more likely to be relevant than one on a sibling subdomain. With the FineMath classifier as the probe, 21.9% of crawled pages are high-quality math content, 70x the 0.31% rate from filtering a comparable web sample, so the crawl wastes far less effort. But the payoff is not just efficiency: 63.2% of these pages are missing from CommonCrawl altogether, yet just as useful for training. Continued pretraining of Llama-3.2-3B on 1.9B Data Scout tokens matches FineMath corpus on GSM8k. Because the probe is the only domain-specific component, Data Scout can in principle apply to any domain with such a classifier.
