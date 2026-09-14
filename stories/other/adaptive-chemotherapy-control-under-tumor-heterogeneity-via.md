---
title: "Adaptive Chemotherapy Control under Tumor Heterogeneity via Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12264"
authors: ["Bereket Sitotaw Kidane, Md Samiul Haque Motayed, Shuo Wang"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12264v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12264v1 Announce Type: new Abstract: Designing effective chemotherapy regimens is hindered by tumor heterogeneity and drug resistance, which complicate the deployment of patient-specific model-based optimal control across diverse populations. We develop and compare closed-loop deep reinforcement learning (DRL) dosing policies with continuous (TD3) and discrete (DQN) action spaces trained on a high-dimensional heterogeneous tumor model. The DRL policies are benchmarked against a Pontryagin's Maximum Principle (PMP)-derived open-loop benchmark. We assess generalization under parametric heterogeneity using a 100-patient virtual cohort with plus or minus 10 percent uniform perturbations in growth and drug-sensitivity parameters. Across this cohort, TD3 achieves higher average tumor reduction, while DQN yields tighter inter-patient dosing consistency, revealing a clear efficacy-consistency trade-off in this study. Our simulations assume full observation of all tumor subpopulations; translation to sparse and noisy clinical measurements will require partial-observability formulations and/or state estimation. Overall, the results show that simulation-trained DRL can learn state-dependent feedback dosing policies that complement open-loop optimal control benchmarks.
