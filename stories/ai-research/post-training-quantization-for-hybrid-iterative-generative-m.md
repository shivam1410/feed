---
title: "Post-training Quantization for Hybrid Iterative Generative Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.13932"
authors: ["Jing Gao, Junyi Wu, Wei Wang, Yan Yan, Yao Zhao"]
date: "Mon, 17 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.13932v1"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

arXiv:2608.13932v1 Announce Type: new Abstract: Iterative Generative Models (IGMs) span autoregressive and diffusion paradigms, and hybrid variants that couple them can achieve remarkable image-generation fidelity. However, their iterative inference incurs substantial computational overhead, making Post-training Quantization (PTQ) appealing for acceleration, while directly applying vanilla PTQ to hybrid IGMs can trigger model collapse. By analyzing these failures, we identify two critical challenges: Excessive Outliers (EOs) in the activations create an irreconcilable trade-off between preserving normal precision and covering EOs, resulting in severe degradation in generation quality; Amplified Anomalies (AAs) arising unpredictably from minor quantization errors, create a mismatch between calibration and inference, thus iteratively triggering model collapse. To address these challenges, we introduce HyGenQ, a PTQ framework for hybrid IGMs. HyGenQ comprises Hierarchical Cluster Decoupling (HCD) and Scaling Recalibration (SR). HCD identifies and decouples outlier channels via a multi-stage clustering process, effectively isolating EOs while maintaining normal value precision, thereby alleviating performance degradation. SR scales AAs beyond Gaussian Bound, thereby avoiding model collapse caused by aggressive truncation. Extensive experiments demonstrate that HyGenQ successfully quantizes representative hybrid IGMs to 8-bit precision (W8A8), significantly outperforming existing baselines and validating its robustness across different model families.
