---
title: "SteelAgent: LLM-Orchestrated, Physics-Informed Steel Property Prediction with Audited Generalization and Calibrated Uncertainty"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.06953"
authors: ["Aleksandr Volkov, Roman Sultimov, Mikhail Kuzin, Yury Maximov"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.06953v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Steel property models can perform well on random test splits even when they extrapolate poorly to unfamiliar alloys. SteelAgent couples metallurgical descriptors and machine-learning models with a language-model interface for property prediction, uncertainty reporting and inverse design. We examine how the choice of held-out unit changes the conclusions drawn from SteelBench tensile-strength evaluations. For gradient boosting, pooled out-of-fold $R^2$ fell from 0.859 on a random split to 0.113 when steel families were held out. Empirical coverage of nominal 90% prediction intervals ranged from 91.0% under random splitting to 37.6% on held-out sources. The effect of physics-derived features depended on the evaluation. They increased gradient-boosting $R^2$ by 0.2534 in a 17-family holdout analysis and decreased it by 0.358 in a separate four-grade laboratory analysis. We report group-level errors and a synthetic regression experiment illustrating how calibration can deteriorate on held-out groups. These results motivate reporting the evaluation population alongside a property estimate or compliance score.
