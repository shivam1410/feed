---
title: "Towards Anomaly Detection on Relational Data"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18621"
authors: ["Shiyuan Li, Yunfeng Zhao, Yue Tan, Qingfeng Chen, Yixin Liu, Shirui Pan"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 67
guid: "oai:arXiv.org:2606.18621v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18621v1 Announce Type: new Abstract: Relational databases are widely used for managing structured data in real-world systems. Detecting anomalies from such relational data is crucial for identifying fraud, risks, and abnormal behaviors, yet remains under-explored. The key challenges lie in the intrinsic complexity of relational data: multi-table attributes are high-dimensional and heterogeneous, making sparse abnormal clues easy to overwhelm by normal or irrelevant information; and anomalies may further manifest as abnormal connection patterns across different foreign-key relations, which existing tabular and graph anomaly detection methods are ill-suited to capture. To address them, we propose RelAD, a reconstruction-based framework that captures anomalies from both attribute and relational edge reconstruction. RelAD contains two core modules: conditional sparse-gated attribute reconstruction, which suppresses redundant multi-table attributes and emphasizes abnormal semantic blocks, and dual-view multi-relational edge reconstruction, which detects relation-specific abnormal connections from both intrinsic and behavioral entity profiles. The resulting attribute and relational signals are integrated through a lightweight fusion module to produce the final anomaly score. We further construct 6 benchmark datasets with systematic anomalies, on which extensive experiments show that RelAD consistently outperforms other baselines while achieving competitive efficiency.
