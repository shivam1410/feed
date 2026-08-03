---
title: "PluRel-to-RDB-PFN: Schema-Guided Synthetic Relational Pretraining"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.29129"
authors: ["Mohammad Sadeq Abolhasani, Viswanath Ganapathy"]
date: "Mon, 03 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.29129v1"
image: ""
generated: "2026-08-03T19:06:42+05:30"
---

arXiv:2607.29129v1 Announce Type: new Abstract: Relational Foundation Models (RFMs) require large-scale synthetic relational databases for pretraining, but existing approaches tightly couple data generation with the model training pipeline. We study whether PluRel, a general-purpose synthetic relational database generator, can serve as an external data source for RDB-PFN, a relational in-context learner originally pretrained with a 600K-task single-table warm-up followed by an approximately 1.8M-task adaptation stage. We build a conversion pipeline that maps PluRel-generated databases, including externally constructed binary prediction tasks, into the RDB-PFN training format and evaluate three curriculum strategies: SCHEMA-GUIDED FIRST (real-world schema then fully synthetic), FULLY SYNTHETIC (diverse synthetic schemas throughout), and SCHEMA-GUIDED LAST (fully synthetic then real-world schema). Using only approximately 5,500 relational databases (approximately 33K tasks), roughly 55x fewer tasks than the original protocol, and no single-table warm-up, our best curriculum (SCHEMA-GUIDED FIRST) achieves 0.6346 average ROC-AUC across 19 real benchmark tasks at 1024-shot context, recovering 87.6% of the published RDB-PFN performance (0.7245). At 64-shot context, the gap narrows to 93.8% (0.6116 vs. 0.6517). Our results demonstrate that external synthetic generators can provide useful pretraining signals for RFMs when combined with appropriate curriculum design and that exposure to a real-world schema early in training is substantially more effective than late-stage schema adaptation.
