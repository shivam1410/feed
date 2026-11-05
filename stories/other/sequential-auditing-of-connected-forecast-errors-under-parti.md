---
title: "Sequential auditing of connected forecast errors under partial observations"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03928"
authors: ["Yuanbo Zhou, Junjie Xiong"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03928v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Graph forecasting systems often rely on prediction intervals to quantify uncertainty across connected locations, but the true outcomes needed for evaluation may be only partially observed. We study how an auditor can selectively retrieve missing outcomes to determine whether there exists a connected group whose outcomes violate the same side of their respective forecast intervals. The audit stops when the observed labels determine the event or the query budget is exhausted. On three public graph time series, MOMS reduces mean queries by 19.6% to 38.5% relative to screened random acquisition when 30% of labels are hidden. Under localized masking on METR-LA, shortest witness finds more positive cases within ten queries, although the difference depends on node ordering. Direct component traversal reproduces all 9,696 screened random traces without enumerating connected subsets. The experiments show that reducing queries to a decision does not necessarily improve early event discovery or reduce local computation.
