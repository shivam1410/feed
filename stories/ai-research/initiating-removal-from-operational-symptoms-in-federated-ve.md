---
title: "Initiating Removal from Operational Symptoms in Federated Vehicular Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22584"
authors: ["Zihao Ding, Jun Huang, Qiang Duan"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.22584v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

Connected vehicles train a driving model through federated learning (FL) and drive with it, so a faulty contribution often surfaces only as a delayed symptom on the road. Federated unlearning (FU) assumes that a removal request names what to forget. A symptom names no vehicle or round, and aggregation has already spread its cause across the fleet. We propose \underline{A}ggregation-\underline{T}ime \underline{O}perational-evidence \underline{N}eutralization of \underline{E}ffects (\method{}), which makes unlearning a term of the FL aggregation rule. \method{} projects everyday driving errors and reported symptoms onto a subspace spanned by recent global increments. It propagates the surviving effect of every contribution with curvature estimated from these increments and scores all contributions in one backward pass. A two-tier correction suppresses suspected effects in every round and eliminates confirmed ones after a one-round probe. We prove that backward scoring matches forward scoring and that the elimination is exact when training is flat outside the subspace. On three driving datasets, \method{} leaves 43\% to 61\% less residual harm than the strongest baseline in eight of nine settings while staying within 0.36 points of full retraining in utility.
