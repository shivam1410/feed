---
title: "DISCERN: Identifiable Disease Evidence for Generalizable Medical Multimodal Learning"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.23952"
authors: ["Xiaoguang Zhu, Pengyi Jiang, Juncen Guo, Jingyi Wu, Lianlong Sun, Yang Liu"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.23952v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Clinical multimodal models can learn enrollment shortcuts shared across modalities and fail on new cohorts. We model these data through a latent structural causal model: disease state and background factors generate physiology through shared mechanisms, while cohorts differ in selection and measurement. Holding acquisition fixed, we identify conditional disease evidence without observing disease-state labels or recovering the full causal model. In common Gaussian coordinates, cross-cohort state alignment and natural-parameter changes identify a minimal selection statistic; conditioning on it removes enrollment-dependent evidence and yields an identifiable reference posterior within the specified shift family. State-dependent interactions can carry evidence invisible to individual-modality posteriors, motivating joint, information-preserving representations. DISCERN combines an information-lattice encoder, a latent-state model, and an outcome head through joint training. Under reversed synthetic enrollment on known latent coordinates, conditioning raises state AUROC from 0.043 to 0.883 and from 0.265 to 0.825, while random conditioning does not. Exploratory cross-database mortality experiments between eICU and MIMIC-IV improve AUROC over matched empirical risk minimization by 0.036 and 0.035. Learned-coordinate diagnostics distinguish preservation of state information from identification of the coordinates required by the estimator.
