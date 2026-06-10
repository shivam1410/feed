---
title: "Toward Calibrated, Fair, and accurate Deepfake Detection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09881"
authors: ["Ryan Brown, Chris Russell"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 71
guid: "oai:arXiv.org:2606.09881v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09881v1 Announce Type: new Abstract: Deepfake detectors show large performance gaps across demographic groups. Existing fairness approaches require demographic labels, retraining, or sacrifice accuracy. We introduce Face-Fairness (FF), a plug-and-play framework for bias mitigation. Our primary contribution, Face-Feature Tuning (FFT), is the first demographic label-free fairness method demonstrated for deepfake detection: a lightweight calibrator that performs a logit remapping conditioned on frozen face embeddings. We complement FFT with two variants: FF-Max, which maximizes worst-group accuracy when demographics are available, and FF-Discover, which does the same with embedding-discovered groups. Across in-domain and cross-dataset test settings, FF consistently reduces FPR/TPR gaps and improves minimum group accuracy while maintaining (often improving) overall accuracy. The approach is detector-agnostic, adds negligible runtime overhead, and requires no access to identity attributes.
