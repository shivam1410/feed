---
title: "ADAPTOOD: Uncertainty-Aware Fine-Tuning for Out-of-Distribution ECG Time Series Models"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04164"
authors: ["Sotirios Vavaroutas, Yu Yvonne Wu, Ali Etemad, Cecilia Mascolo"]
date: "Thu, 04 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.04164v1"
image: ""
generated: "2026-06-05T02:55:12+05:30"
---

arXiv:2606.04164v1 Announce Type: new Abstract: Data samples used for training often differ from those encountered during fine-tuning and deployment, and while ML models show promise, their performance remains limited when only small annotated datasets are available. Performance often degrades under distribution shifts caused by diverse sensors, populations, and application settings. Although pre-training helps, models frequently encounter out-of-distribution (OOD) data in real-world settings, leading to reduced robustness. Existing adaptation methods usually assume fixed distribution shifts and struggle when multiple types or severities occur. In particular, they overlook shift severity, for example treating adaptation to a large familiar dataset the same as adaptation to a small dataset with a new task, which limits generalisation. To address this, we propose ADAPTOOD, a novel framework that leverages data uncertainty to quantify distribution shift severity and guide fine-tuning for time series. This uncertainty measures how strongly samples from the target deployment distribution deviate from the pre-training distribution, providing a direct signal of OOD severity. Our framework combines this uncertainty with low-rank model updates and adaptive hyperparameter optimisation to improve adaptation. We show that ADAPTOOD achieves up to 7% higher accuracy and 12.9% higher precision than existing methods in OOD tasks, maintaining strong performance as distribution shift severity increases.
