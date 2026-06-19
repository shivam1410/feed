---
title: "Comparing Linear Probes with Mahalanobis Cosine Similarity"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19603"
authors: ["Zhuofan Josh Ying, Peter Hase, Nikolaus Kriegeskorte"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2606.19603v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19603v1 Announce Type: new Abstract: Linear probes are widely used in interpretability research and often compared by cosine similarity. The Mahalanobis cosine similarity (MCS) between two directions, which reweights the inner product by test data covariance, is a natural task-aware refinement. Ying et al. (2026) report that a probe's MCS to a reference probe trained on the out-of-distribution (OOD) data near-perfectly linearly predicts the probe's OOD AUROC (R^2 = 0.98). Here, we extend this empirical finding across models, layers, and concept domains, and prove this general phenomenon in closed form: For balanced classes whose projections are Gaussian, OOD AUROC and MCS to the reference probe are linear because both are sigmoid-shaped functions of the probe's signal-to-noise ratio (SNR) on the test data. The theory also predicts when this linearity fails, which we verify empirically. MCS offers a theoretically grounded and empirically effective alternative to Euclidean cosine similarity for comparing linear probes.
