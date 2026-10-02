---
title: "When Do Attention-Head Ablations Support Causal Claims? Projection-Level Confounds, Floor Effects, and Matched Controls"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00373"
authors: ["Juli Huang"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2610.00373v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Attention-head ablation, zeroing a head and measuring the resulting change in task performance, is a common method for inferring which components of a language model are causally responsible for a behavior. We show using GPT-2 small that this inference can be fragile unless the intervention semantics, evaluation metric, and controls are carefully validated. A natural post-projection implementation of "zeroing a head" is nearly uncorrelated with a corrected pre-projection ablation (Pearson r = 0.057) and selects a completely disjoint top-5 set of important heads. We also show that binary accuracy can hide effects at behavioral floors and near ceilings, whereas gold-token log-probability remains graded. Using a discovery/held-out split and 1,000 matched random-head and layer-matched-head control draws, the corrected per-head effect ranking is highly stable across splits (Spearman rho = 0.974), and the top-5 selected heads significantly exceed both control distributions (Monte Carlo p = 0.001). However, evidence for task specificity is not robust on GPT-2. Replication on DistilGPT2 preserves the intervention-semantic and matched-control findings. These results show that single-head ablation does not by itself justify a causal claim; defensible interpretation requires correct intervention placement, a non-saturated continuous metric, and matched held-out controls.
