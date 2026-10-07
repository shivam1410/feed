---
title: "Exact Unlearning via Quantized Sufficient Statistics"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07197"
authors: ["Ami Tavory, Shripad Gade, Tal Sarig, Noam Touitou, Ido Guy"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2610.07197v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Exact unlearning requires a deployed predictor to match one rebuilt without the information named by a deletion request. Existing general-purpose exact methods localize retraining through disjoint shards, but every request still invalidates a model, and smaller shards reduce the data available to each constituent predictor. We introduce Quantized Sufficient Statistics (QSS), which separates a small frozen schema from mutable, sum-decomposable content. The schema learns global structure; the content stores local prediction corrections as additive statistics indexed by quantized regions. Deleting content is therefore exact subtraction rather than optimization. We distinguish two guarantees: QSS-L exactly removes a label while retaining the unlabelled input, whereas QSS-E exactly removes both input and label by learning the schema without deletable examples. A deletion takes the arithmetic fast path with probability $1-\rho$ and triggers a full rebuild with probability $\rho$; all reported expected latencies include both events. Across 15 vision, text, and tabular datasets at $\rho=0.5\%$, QSS-L is within 2 percentage points of SISA on 11 tasks and provides 4--483$\times$ lower expected deletion latency on the low-class-count tasks where a compact schema is effective. QSS-E quantifies the additional accuracy cost of removing every trace of an input.
