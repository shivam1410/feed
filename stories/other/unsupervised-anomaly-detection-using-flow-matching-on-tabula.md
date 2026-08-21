---
title: "Unsupervised Anomaly Detection Using Flow Matching on Tabular Data"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.19801"
authors: ["Philip Konz, Tejaswini Medi, Margret Keuper"]
date: "Fri, 21 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.19801v1"
image: ""
generated: "2026-08-21T19:00:17+05:30"
---

arXiv:2608.19801v1 Announce Type: new Abstract: Financial anomaly detection often relies on large unlabeled transaction logs, where anomalous samples may already be present during training. Such training-set contamination violates the clean-normal data assumption underlying many anomaly detection methods. Although flow matching has demonstrated strong performance in generative modeling, its robustness in unsupervised tabular anomaly detection remains underexplored. In this work, we study flow-matching-based anomaly detection under contaminated training data by comparing Time-Conditioned Contraction Matching (TCCM) with Forest-Flow and evaluating multiple anomaly scoring functions. Our results show that the choice of anomaly score is critical. The original single-step Decision score used by TCCM is sensitive to contamination, whereas trajectory-based Deviation and Reconstruction scores provide more stable anomaly signals. With these scores, Forest-Flow becomes competitive with, and in some cases outperforms, TCCM. These findings highlight the importance of anomaly scoring for flow-matching methods in financial anomaly detection under severe class imbalance.
