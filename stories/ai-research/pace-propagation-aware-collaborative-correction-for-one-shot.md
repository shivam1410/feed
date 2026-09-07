---
title: "PACE: Propagation-Aware Collaborative Correction for One-Shot Personalized Federated Graph Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04832"
authors: ["Ruizhe Huang, Chengran Li, Xiaochuan Shi"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.04832v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04832v1 Announce Type: new Abstract: Client heterogeneity creates both an opportunity and a risk in personalized federated graph learning. Knowledge held by other subgraphs may complement a receiver's Local model, but an incompatible transfer can override reliable predictions. One-shot communication sharpens this tension because an unsuitable server return cannot be corrected later. We introduce PACE, which treats collaborative knowledge as a compact correction to a complete Local predictor rather than as its replacement. Each client uploads a rank-r update carrier and a diagonal sketch of propagated message moments. The server uses them to construct a propagation-aware, receiver-anchored correction, while the receiver retains its full Local model. Convex negative-log-likelihood calibration (CNLL) then selects one coefficient between Local and External logits using validation nodes; model parameters remain fixed and no feedback is sent. At Rank-6, personalized returns occupy 9.6-17.6% of dense tensor bytes across the six evaluated datasets. The correction receives nonzero weight and improves both Accuracy and weighted-F1 over Local on five datasets; on ogbn-arxiv, CNLL assigns zero predictive weight to the correction and preserves Local predictions exactly. Applying the same CNLL rule to matched baselines on three citation datasets does not account for these gains. The central result is therefore that a small transported correction can augment a complete Local model when receiver evidence supports it while leaving the Local prediction unchanged otherwise.
