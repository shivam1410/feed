---
title: "One Score, Two Decisions: Selective Prediction on the Rare-Disease Tail"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14683"
authors: ["Zhaoyang Jiang, Zhizhong Fu, Yunsoo Kim, Zicheng Li, Xuanqi Peng, Fei Teng, Jiacong Mi, Honghan Wu"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2608.14683v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14683v1 Announce Type: new Abstract: Given a patient's clinical findings, a diagnostic system ranks possible diseases and must decide when to endorse its first prediction or defer it for review. This decision is usually made by thresholding the top score. Selective prediction over ranked outputs begins with two checks. First, the ranker must produce enough correct top-ranked predictions to make the target feasible. Across 2,000 patient records stratified by disease prevalence, eight small open-weight LLMs achieve at most 4.6% Recall@1 on ultra-rare diseases. At 10% coverage, even a perfect confidence ranking of their existing predictions therefore cannot reach 50% selective accuracy. More accurate models pass the same check, showing that the limit is regime-specific. Second, the confidence signal must match the decision being made. For fixed-candidate rankers, the top-two margin cancels components shared across candidates. On phenotype-only Exomiser, it selects 10% of cases at 29.0% accuracy, compared with 13.3% overall, while the top score provides no reliable gate. Yet that cancellation can remove information needed to detect whether the candidate list contains an answer. SciFact retrieval and biomedical entity linking confirm this distinction. Finally, we prove that unlabelled scores alone cannot determine whether switching to the margin will help.
