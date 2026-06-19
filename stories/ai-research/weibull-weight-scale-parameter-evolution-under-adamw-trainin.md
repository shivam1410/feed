---
title: "Weibull Weight-Scale Parameter Evolution under AdamW Training Dynamics"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19367"
authors: ["Tiexin Ding"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.19367v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19367v1 Announce Type: new Abstract: Building on a two-parameter Weibull framework for diagnosing transformer weight distributions, we study why the Weibull weight-scale parameter $\lambda$ grows, overshoots, and then relaxes during AdamW training. We derive a leading-order three-force decomposition of the squared weight norm from the AdamW update: an alignment force measuring the correlation between weights and the adaptive update direction, an injection force from adaptive step magnitude, and a decay force from decoupled weight decay. On self-trained Pythia-70M models with ground-truth optimizer moments, alignment dominates the rise phase, contributing 88-94% of the absolute force budget across four random seeds and remaining robust to super-weight removal. Near saturation, alignment and decay approach balance, explaining the transition from weight-scale growth to relaxation. These force dynamics directly govern the squared-norm component underlying $\lambda(t)$; the remaining RMS-to-Weibull reconstruction offset is measurable and decomposes into bridge and integration components, totaling approximately 5-6% in densely sampled regions. To extend the analysis to real models where optimizer moments are unavailable, we introduce a spline displacement method that recovers the alignment force from sparse checkpoints with approximately 92-94% accuracy, about twice the naive two-point baseline. We further observe that the peak value of $\lambda(t)$ varies with training-data coherence in our experiments, suggesting a data-dependent component of weight-scale growth that we leave to a controlled follow-up study. Code and data are available at https://github.com/tiexinding/NPM-Weibull-public.
