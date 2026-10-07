---
title: "An Information-Theoretic Evaluation Framework for Benchmark and Model Diagnosis in Knowledge Tracing"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.06988"
authors: ["Houru Jiang, Zixi Wang, Tengteng Cheng, Xueyi Li, Mingliang Hou, Jiaqi Zheng, Renqiang Luo, Teng Guo, Zitao Liu"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.06988v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Knowledge tracing (KT) models are predominantly evaluated using aggregate metrics such as area under the curve (AUC) and accuracy. However, these global scores obscure where the remaining errors originate and fail to indicate whether a benchmark is approaching saturation. While estimating a global theoretical performance limit is challenging in realistic KT settings, it is possible to quantify local predictability. To address this, we propose an information-theoretic evaluation framework for KT benchmark diagnosis. We use Context Tree Weighting (CTW) on item-response histories and current-item queries as an operational causal uncertainty coordinate, while distinguishing it from the unobserved Local Irreducible Uncertainty (LIU) under the full KT information set. By projecting predictions onto this shared uncertainty coordinate, we evaluate model performance gains across distinct entropy bands rather than only at the global level. Comprehensive evaluations on NIPS Task 3/4 and Algebra 2005 reveal that model improvements are highly non-uniform. Modern KT models show substantial gains in high-entropy regions, and additional item-aware references, log-loss, and equal-frequency analyses support this localization. The framework also flags regions where apparent gains require checks for noise-sensitive behavior. By surfacing these local modeling failures alongside genuine gains, this approach provides a diagnostic tool for studying both residual predictive structure and the limitations of current KT benchmarks and models.
