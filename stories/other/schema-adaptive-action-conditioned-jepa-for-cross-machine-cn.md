---
title: "Schema-Adaptive Action-Conditioned JEPA for Cross-Machine CNC Transfer under Partial Sensor Overlap"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16071"
authors: ["Ayoub Louaye Bouaziz, Matthieu Ostertag, Anton Demasles"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16071v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16071v1 Announce Type: new Abstract: Cross-machine deployment of industrial world models requires transfer across changes in dynamics, sensing interfaces, sampling regimes, and control units. We study a schema-adaptive action-conditioned Joint-Embedding Predictive Architecture (SAAC-JEPA) for CNC dynamics, where the source machine has 17 canonical sensor channels and the target shares only 10. Evaluation uses group-disjoint source splits, source-only normalization, held-out self-supervised validation, unit audits, and a sealed target test after model locking. Across five seeds, JEPA pretraining gives no clean-source forecasting gain: scratch and pretrained-body models obtain \(\mathrm{RMSE}=0.811\pm0.022\) and \(0.813\pm0.022\). A source-only search over 20 candidates selects a schema-consistent action-conditioned JEPA after seven-seed stability checks. On the confirmatory target pass, the locked model reaches zero-shot \(\mathrm{RMSE}=0.546\), \(R^2=0.012\), and \(\mathrm{NLL}=0.52\), outperforming persistence but not RevIN-equipped PatchTST and iTransformer baselines (\(0.503\) and \(0.498\)). A pre-declared paired ablation shows that RevIN in the same architecture improves RMSE to \(0.495\pm0.004\) over three seeds, but degrades target calibration (\(\mathrm{NLL}=20.6\)) on stationary context windows. A pre-lock adaptation sweep further reduces RMSE to \(0.520\) with limited target support. These results show that source-domain forecasting accuracy alone is insufficient to assess industrial predictive representations, and that cross-machine adaptation under partial sensor overlap is a distinct evaluation axis.
