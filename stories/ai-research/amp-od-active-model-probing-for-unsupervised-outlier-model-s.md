---
title: "AMP-OD: Active Model Probing for Unsupervised Outlier Model Selection--Extended Version"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28488"
authors: ["Hong-Phuc Phan, Tuan-Anh Vu, Tung Kieu, Son Ha Xuan, Sean Bin Yang, Bin Yang, Christian S. Jensen"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.28488v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Outlier detection is often deployed in fully unsupervised settings, where labels are unavailable and practitioners must choose a detector without direct performance feedback. Existing unsupervised outlier model selection methods predict detector quality from static meta-features and historical performance on meta-datasets, but they commit before observing how any detector behaves on the target dataset. We propose AMP-OD, an execution-conditioned probe-then-commit framework. AMP-OD runs a small number of inexpensive probe detectors, uses their score patterns as target-dataset evidence, and then selects a final detector from a larger candidate pool. To interpret unlabeled probe responses, we introduce a Leave-One-Out Family Probe Posterior (LOO-FPP), which converts probe score patterns into gated detector-family evidence while reducing self-validation in pseudo-label construction. AMP-OD further combines this evidence with historical reliability through a warm-start prior, a sequential probe/stop policy, and lower-confidence-bound arbitration. Extensive experiments and ablation studies show that detector responses provide useful evidence beyond static meta-features, with the LOO-FPP and conservative arbitration as key contributors.
