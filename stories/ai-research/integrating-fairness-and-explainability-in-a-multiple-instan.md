---
title: "Integrating Fairness and Explainability in a Multiple Instance Reinforcement Learning System"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00035"
authors: ["Bente Hinkenhuis, Seyed Sahand Mohammadi Ziabari, Ali Mohammed Mansoor Alsahag"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.00035v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Predicting student performance from educational interaction data requires models that are both accurate and sufficiently transparent to support meaningful intervention, while demographic information introduces an additional risk of unfair predictions. This study investigates a multi-objective framework that combines reinforcement learning-based multiple instance learning (RL-MIL), adversarial debiasing, and preference-conditioned hypernetworks for student-at-risk prediction. MIL represents each student as a bag of weakly labeled interactions, while an RL agent selects informative instances for downstream classification. Two hypernetwork variants are evaluated to determine whether a user-defined preference scalar can continuously control the trade-off between predictive performance and Equalized Odds. The underlying RL-MIL baseline achieves strong classification performance, but both hypernetwork extensions exhibit mode collapse: changing the preference weight produces little systematic movement along the intended fairness-performance frontier. The failure is associated with objective dominance, weak gradient propagation through the conditioning mechanism, and interactions between dynamically generated parameters. The results show that fairness objectives can be incorporated into an interpretable RL-MIL pipeline, but preference conditioning alone does not guarantee controllable multi-objective behavior. Robust fair RL-MIL therefore requires explicit mechanisms for gradient balancing, objective separation, and stability analysis.
