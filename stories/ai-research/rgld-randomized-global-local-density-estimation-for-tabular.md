---
title: "RGLD: Randomized Global-Local Density Estimation for Tabular Anomaly Detection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28970"
authors: ["Quanling Zhao, Jiaying Yang, Ye Tian, Josh Victoria, Zhijun Wang, Pietro Mercati, Onat Gungor, Tajana Rosing"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 47
guid: "oai:arXiv.org:2606.28970v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28970v1 Announce Type: new Abstract: Unsupervised tabular anomaly detection requires methods that are accurate, robust across heterogeneous datasets, and computationally efficient. Classical statistical detectors are often efficient, but they usually rely on a fixed data view and a single notion of abnormality. Deep anomaly detectors can learn more flexible scoring functions, but they are substantially slower and difficult to tune in unsupervised settings due to the lack of a reliable supervisory signal. We propose RGLD, a randomized global-local density estimator for efficient unsupervised tabular anomaly detection. RGLD combines a global random-feature density branch, which identifies samples in broadly low-density regions, with a local neighbor branch, which detects samples that are weakly supported by nearby observations. Both branches operate over feature-bagged randomized views, allowing RGLD to expose anomaly evidence that may be hidden in any single representation. We conduct experiments on 47 tabular datasets against 23 statistical and deep anomaly detection baselines under fully unsupervised setting. RGLD achieves the strongest dataset-level AUROC performance, ranking 1st in dataset wins, and ranks 2nd in AUPRC wins. RGLD is also faster than all evaluated deep detectors, achieving 50x-580x speedups, and remains competitive with statistical methods in runtime, yielding a favorable accuracy-efficiency tradeoff.
