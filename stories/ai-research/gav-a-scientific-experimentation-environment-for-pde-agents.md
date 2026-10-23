---
title: "GAV: A scientific experimentation environment for PDE agents"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30292"
authors: ["Muheng Li, Wenlong Mou"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.30292v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Reliable feedback is essential for coding agents to develop programs for partial differential equations (PDEs). Yet evaluating these programs on new PDE problems often requires expensive reference computations, while fixed datasets restrict the range of experiments. We introduce Generator-Agent-Verifier (GAV), a scientific experimentation environment that makes new PDE problems verifiable by construction. The Generator learns a distribution of continuous reference solutions using data from numerical simulations or experimental measurements to represent a target physical regime. Using the method of manufactured solutions, it works backward from the generated reference solutions to construct matching PDE problems without a separate numerical solve. The Agent designs experiments, investigates failures, and iteratively improves its program. The Verifier evaluates candidate programs against the reference solutions and provides numerical feedback on accuracy and computational cost. This feedback can also guide the generation of new problems that probe the current program's weaknesses. We provide a theoretical analysis of evaluation reliability and guided development. Experiments on Navier-Stokes and Vlasov-Poisson-type equations across different data sources and regimes demonstrate the effectiveness of GAV. In particular, on the numerical Navier-Stokes task, GAV reduces the mean test error of three existing PDE agents by more than an order of magnitude relative to their original setups. Code is available at https://github.com/PotatoJnny/PDE-GAV.
