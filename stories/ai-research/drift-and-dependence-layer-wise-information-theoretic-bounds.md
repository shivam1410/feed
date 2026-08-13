---
title: "Drift and Dependence: Layer-wise Information-Theoretic Bounds for Replay-Based Continual Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.11690"
authors: ["Tieliang Gong, Zhongbo Zhang, Wen Wen, Yong-Jin Liu"]
date: "Thu, 13 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.11690v1"
image: ""
generated: "2026-08-13T19:06:32+05:30"
---

arXiv:2608.11690v1 Announce Type: new Abstract: Continual learning must absorb new tasks without erasing old ones, and replay---mixing a small buffer of past examples into current training---is among the most effective remedies for catastrophic forgetting. Yet its generalization behavior is shaped by two coupled effects that existing analyses fold into a single hypothesis-level quantity: finite memory replaces each past distribution with an empirical proxy, and repeated reuse couples the buffer, the current data, and the final hypothesis through a shared optimization trajectory. We develop a layer-wise information-theoretic framework that separates these effects at every depth. Our main result decomposes the expected generalization gap into a replay-induced representation drift and an optimization-dependence term, the latter further resolved into stability, plasticity, interaction, and residual-coupling components. Two refinements make the framework operational. A Wasserstein relaxation of the drift term, valid under support mismatch, yields a depth-dependent drift--sensitivity trade-off whose minimizer identifies which interior layer to stabilize. An SGLD instantiation of the optimization term reduces it to a trajectory-level log-determinant budget, exposing a curvature-aware gradient-alignment statistic that serves as an online diagnostic of task-wise forgetting. Controlled and benchmark experiments confirm the predicted memory scaling, the interior funnel, and the alignment signal's link to forgetting.
