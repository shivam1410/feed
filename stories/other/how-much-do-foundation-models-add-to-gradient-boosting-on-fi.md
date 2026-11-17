---
title: "How Much Do Foundation Models Add to Gradient Boosting on Financial Event Sequences?"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18914"
authors: ["Carlos Eduardo Martins Relvas, Gustavo di Giovanni Bernardo"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18914v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Foundation models pretrained on raw transaction sequences are proposed for credit, fraud and churn modeling, with reported gains over gradient boosting, but the data and baselines behind these gains are rarely public. We measure how much the pretraining and adaptation recipes of these models add to a baseline of point-in-time window aggregates and LightGBM, and we propose TBS (Temporal Boosting-Sequence ensemble), which averages the ranks of a boosting model enriched with label-free event-transition features and of a pretrained sequence network fine-tuned jointly with the aggregates. On a synthetic credit-card dataset, the public MBD-mini banking dataset and two proprietary datasets of trade credit and B2B churn, we compare 27 methods at three label budgets with five seeds and paired bootstrap intervals, using sequence models of about 0.4 million parameters pretrained per dataset. Frozen self-supervised embeddings rarely improve the baseline, and a fine-tuned sequence network alone clears it in 9 of 21 target-budget cells. TBS clears it in 19 of 21 cells (18 after FDR adjustment), with a median gain of +1.8 AUC points, and the controls suggest that combining boosting with the pretrained network is the main source of the observed gain. Gains shrink as labels grow and with rich tabular data: with both, the gain on the proprietary datasets is +0.7 and +0.8 points, the latter with an interval including zero. We also re-examine two benchmarks. On IBM TabFormer, the test follows a change in the fraud pattern and the published baseline has no history; with the training period the vendor states, our history-aware LightGBM and our own foundation model stay below the published scores of a commercial model. On IBM AML, a simulation artifact lets a date rule reach F1 0.482, and a point-in-time LightGBM reaches the F1 of graph neural networks whose test graph includes later transactions.
