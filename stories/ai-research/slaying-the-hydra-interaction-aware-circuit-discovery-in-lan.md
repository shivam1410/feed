---
title: "Slaying the Hydra: Interaction-Aware Circuit Discovery in Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04017"
authors: ["Sankaran Vaidyanathan, Rafal Urbaniak, Emily Bunnapradist, Michelangelo Naim, Daniel Waxman"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2610.04017v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Localizing behavior to individual components of a language model is a central goal of mechanistic interpretability. However, scoring components one at a time misses context-dependent effects: a primary component can inhibit the activation of a backup, leading to issues with ranking components. Actual causality studies the structure of such interactions via witnesses: variables that provide contextual information to resolve interaction terms. However, estimation with witnesses typically requires combinatorial enumeration and is infeasible in practice. We introduce the witness-integrated set effect (WISE), a family of causal estimands that build on the witness mechanism while taking expectations over sets of causes and witnesses to remain computationally feasible. Building on this approach, we introduce JuntaLearner, a gradient-based circuit discovery method that learns to rank components by their causal impact across varying-sized sets of components and witnesses. Alongside faithfulness metrics, we introduce measures of necessity and task specificity, and the circuit recognition score (CRS) to summarize each metric across circuit sizes while emphasizing effects achieved by small circuits. Across tasks and models of increasing size, JuntaLearner achieves higher mean CRS compared to attribution baselines on all metrics. Since its cost does not grow with the number of candidate components, JuntaLearner scales to large models while accounting for set-level interactions and avoiding first-order approximations.
