---
title: "Not All Data Leakage Is Equal: A Controlled Benchmark of Evaluation Inflation in Tabular Classification"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18598"
authors: ["Ankit Sharma"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18598v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Data leakage is widely recognized as a threat to trustworthy machine-learning evaluation, yet the phrase covers mechanisms with very different statistical consequences. We present a controlled empirical benchmark that measures the inflation in held-out ROC-AUC caused by five common leakage mechanisms: global standardization, global median imputation, duplicate contamination, supervised feature selection before splitting, and target encoding before splitting. The benchmark spans six public datasets and two synthetic stress tests, three model families, and five repeated stratified train/test splits, yielding 600 paired clean-versus-leaked comparisons. To avoid pseudo-replication, inference is performed on dataset-level effects with cluster bootstrap confidence intervals and Holm-corrected one-sided Wilcoxon tests. Label-dependent or direct data-reuse mechanisms produced systematic optimism: global target encoding increased ROC-AUC by 2.42 percentage points on average (95% cluster-bootstrap CI 0.62--4.89), global supervised feature selection by 1.93 points (0.63--3.39), and duplicate contamination by 1.52 points (0.40--2.80). All three remained significant after multiplicity correction. In contrast, global scaling and global median imputation had near-zero average effects under the i.i.d. settings studied here. A controlled target-encoding stress test further shows that leakage becomes sharply worse as categories become sparse. The results support a severity-aware view of leakage: evaluation pipelines should prevent all held-out-data dependence, but label-dependent transformations and observation reuse deserve especially aggressive auditing.
