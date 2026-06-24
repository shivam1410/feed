---
title: "AsyncOPD: How Stale Can On-Policy Distillation Be?"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24143"
authors: ["Wonjun Kang, Kevin Galim, Seunghyuk Oh, Minjun Kang, Sanghyun Park, Donghoon Kim, Minjae Lee, Minseo Kim, Rishabh Tiwari, Yuchen Zeng, Hyung Il Koo, Kangwook Lee"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.24143v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.24143v1 Announce Type: new Abstract: On-policy distillation (OPD) trains a student on its own rollouts guided by teacher feedback and is becoming increasingly important for large language model (LLM) post-training. Like reinforcement learning (RL), however, OPD faces an on-policy systems bottleneck, as rollouts can dominate training time for reasoning workloads. Asynchronous training pipelines can alleviate this bottleneck by decoupling rollout generation from learner updates, but doing so introduces stale-policy data. While prior work has studied stale data in asynchronous RL, its effects in OPD remain underexplored. We present the first systematic study of staleness in asynchronous OPD, focusing on a practical setting where teacher feedback is implemented through local KL losses and full-vocabulary teacher logits are too expensive to store or transfer, necessitating finite teacher-score caches. We first show that KL direction changes the stale-data problem: teacher-weighted forward KL is more robust to stale rollouts, whereas student-weighted reverse KL is vulnerable. Second, for this vulnerable reverse-KL case, we study whether methods designed to stabilize asynchronous RL can mitigate OPD staleness. In our experiments, they do not improve over a simpler OPD-specific surrogate: recomputing the reverse-KL signal under the current student at learner time. Third, we analyze how finite teacher-score caches create a bias-variance tradeoff for sparse and sampled reverse-KL OPD estimators. This motivates multi-sample Monte Carlo (MC), which preserves MC correctability while reducing one-sample variance. Finally, we present and open-source AsyncOPD, a fully asynchronous OPD training pipeline built from these estimator choices. Experiments show that AsyncOPD improves training throughput by $1.6\times$ to $3.8\times$ over strict synchronous training while reaching comparable accuracy.
