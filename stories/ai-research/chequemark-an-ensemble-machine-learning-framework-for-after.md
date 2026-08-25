---
title: "ChequeMark: An Ensemble Machine Learning Framework for After-Hours Business Deposit Fraud Detection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21629"
authors: ["Ann Youduo Xu, Emily Yu, Justin Leski, William Lam"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.21629v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21629v1 Announce Type: new Abstract: Cheque fraud is a material risk in after-hours business deposit operations because funds may be released within one business day, while cheque clearing takes several days. This timing gap creates a fraud exposure window for financial institutions. Prior mitigation relies on static, deposit-level checks and therefore miss historical client behavior and evolving patterns. To address this gap, we propose a multi-view ensemble ML framework that combines: Extreme Gradient Boosting (XGBoost) for known fraud patterns, Isolation Forest for label-free anomaly detection, and Graph Sample and Aggregate (GraphSAGE) for relational patterns associated with transaction activities. We then combine the three outputs into a single client-level risk score. Under stable conditions, performance is comparable to XGBoost; under a targeted distribution shift, our framework performs best (F1: 83.77%, FPR: 0.69%) versus XGBoost (F1: 82.77%, FPR: 0.72%). These results indicate improved robustness to distribution shift while preserving interpretability through plain-language explanations grounded in behavioural, anomaly, and relational evidence.
