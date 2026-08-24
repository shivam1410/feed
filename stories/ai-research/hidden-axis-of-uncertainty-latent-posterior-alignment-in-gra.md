---
title: "Hidden Axis of Uncertainty: Latent-Posterior Alignment in Graph Neural Networks with Bayesian Output Layers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.20758"
authors: ["Suk Hoon Choi, Damdae Park, Junhyuk Choi, Hyein Jung, Changsoo Kim, Ung Lee, Kyeongsu Kim"]
date: "Mon, 24 Aug 2026 00:00:00 -0400"
score: 56
guid: "oai:arXiv.org:2608.20758v1"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

arXiv:2608.20758v1 Announce Type: new Abstract: Bayesian Neural Networks (BNNs) with Bayesian output layers provide a principled and tractable framework for quantifying predictive uncertainty, yet the mechanisms shaping that uncertainty remain unclear. While conventional theory attributes uncertainty reduction to posterior contraction, the corresponding assumptions need not hold for deep models. In the Graph Neural Networks (GNNs) with Bayesian output layers studied here, we observe that predictive uncertainty decreases as latent representations shift toward lower-variance posterior directions, even though the posterior variance does not contract. We term this behavior Latent-Posterior Alignment (LPA) and conduct interventional experiments that support its functional role in shaping predictive uncertainty. Building on this insight, we propose Alignment-Guided Learning (AGL), which explicitly promotes this alignment during training. AGL effectively reduces predictive uncertainty while preserving accuracy and improves structural calibration, ensuring that the model confidence faithfully mirrors underlying data density. These findings provide a new perspective on uncertainty dynamics in GNNs with mean-field Bayesian output layers, shifting the focus from the magnitude of the posterior to the geometric interplay between latent and parameter spaces.
