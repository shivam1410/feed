---
title: "Learning atomic interactions for the thermodynamics of liquid mixtures"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36440"
authors: ["Marco Hoffmann, Sebastian Schmitt, Hans Hasse, Fabian Jirasek"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36440v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Predictive models for activity coefficients, which describe the non-ideality of liquid mixtures, are foundational for process design and optimization. Group-contribution methods, such as UNIFAC, are computationally cheap and well established in process simulators. Modern machine learning models, such as HANNA, offer higher accuracy and broader applicability, but their integration into process simulation is expensive or even infeasible. In this work, we introduce COGNAC, a graph neural network that learns atom-level geometry and interaction parameters that depend on the molecular neighborhood and evaluates them in the UNIFAC framework. Trained on about 820,000 experimental data points, COGNAC achieves significantly higher accuracy than UNIFAC and HANNA for binary and multi-component mixtures, reduces error relative to HANNA by 13-63%, reliably predicts multi-phase equilibria and identifies azeotropes, yields interpretable parameters, and is strictly thermodynamically consistent. COGNAC evaluations run at a cost comparable to UNIFAC, thereby unlocking the potential of machine-learning models for process simulations.
