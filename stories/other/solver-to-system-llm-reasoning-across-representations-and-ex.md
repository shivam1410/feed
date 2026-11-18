---
title: "Solver to System: LLM Reasoning Across Representations and Execution in Scientific Simulation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21964"
authors: ["Eliza Berman, Rohan Subramanian, Shreya Jha, Lohit Jagarapu, Romain Lopez, Rajesh Ranganath"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21964v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

Simulators based on partial differential equations (PDEs) are widely used to model physical systems, but generating and interpreting PDE solver code with large language models (LLMs) remains challenging. Scientific simulation code is a useful testbed for LLM scientific reasoning because (1) one system can be represented by code, equations, natural language, and numerical trajectories and (2) code can execute successfully while implementing invalid physics. We introduce Solver2System, a dataset of PDE solvers with multiple representations, controlled corruptions, and lexical perturbations, to evaluate whether LLMs can recover the underlying physical system through (1) cross-representation consistency and (2) static and agentic detection of physical invalidity. Across eight open-weight models, LLMs systematically favor some representations when evidence conflicts, and lexical perturbations to code alter interpretation of other unchanged representations. Execution improves physical-validity judgments, but weaker agents can judge correctly without identifying the causal defect. Thus, LLMs may reach correct judgments despite inconsistent representation reconciliation or causal misdiagnosis.
