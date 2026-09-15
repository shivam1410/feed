---
title: "Leakage-Safe and Scheduler-Aware Machine Learning for Grid Job Runtime Prediction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13701"
authors: ["Ashfaq Ali Shafin, Khandaker Mamun Ahmed"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13701v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13701v1 Announce Type: new Abstract: Accurate job runtime prediction can improve scheduling-aware resource management in grid and distributed computing environments, but prediction models must be evaluated under realistic deployment constraints. This paper revisits CPU burst time prediction on the GWA-T-4 AuverGrid workload trace and reformulates it as leakage-safe pre-execution job runtime prediction. We define the target as job-level runtime, use only submission-time attributes, exclude post-execution variables, and evaluate models under temporal and cold-start settings rather than relying only on random cross-validation. We compare standard regressors, chronological historical baselines, categorical encoding strategies, and CatBoost with native categorical handling. We further add temporal hyperparameter tuning, runtime predictability analysis, feature ablation, error analysis by job length, and a minimal scheduling simulation. After temporal-validation tuning, CatBoost achieves the strongest deployment-oriented result with R^2=0.239, MAE=27,019, RMSE=46,587, and LogMAE=2.646 on the held-out temporal test set. A single-server simulation over all 69,523 held-out temporal test jobs shows that prediction-informed SJF reduces average waiting time by 50.92% relative to FCFS. The results show that random-split evaluation overestimates performance, categorical-native boosting improves temporal generalization, and long-job underestimation remains a scheduler-relevant challenge.
