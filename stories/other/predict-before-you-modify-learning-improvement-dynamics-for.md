---
title: "Predict Before You Modify: Learning Improvement Dynamics for Self-Evolving Agents"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.13991"
authors: ["Zixuan Xie, Chang Xu, Yuhua Jiang, Li Zhao"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.13991v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Self-evolving agents improve through repeated cycles of modification and evaluation. However, existing methods receive feedback on modifications only after costly evaluations, and aggregate scores may obscure distinctions between failures that require different repairs. We introduce predictive self-evolution through an editable Improvement Dynamics Model (IDM). Before evaluation, the IDM predicts task-level outcomes of a proposed modification and guides an optional revision. After evaluation, past modifications and their observed outcomes are used to improve the IDM, allowing predictive knowledge to accumulate across generations. The system can thus improve how it solves tasks, proposes modifications, and predicts their effects. Building on HyperAgents, we evaluate this approach across multilingual coding, paper review, robotics reward design, and Olympiad-level mathematical grading. Our approach outperforms HyperAgents across all four domains, with up to 46% higher average performance over generations. Gains also persist under matched token budgets that include both agent evolution and task evaluation, and extend to held-out tasks. Forecast accuracy improves as the IDM evolves, and the learned predictive knowledge transfers to improve evolution in a new domain.
