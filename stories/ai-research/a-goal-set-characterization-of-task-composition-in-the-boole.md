---
title: "A Goal-Set Characterization of Task Composition in the Boolean Task Algebra"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04053"
authors: ["Eduardo Terr\\'es-Caballero, Herke van Hoof"]
date: "Fri, 05 Jun 2026 00:00:00 -0400"
score: 38
guid: "oai:arXiv.org:2606.04053v1"
image: ""
generated: "2026-06-05T13:37:27+05:30"
---

arXiv:2606.04053v1 Announce Type: new Abstract: The Boolean Task Algebra (BTA) provides a principled framework for zero-shot task composition in reinforcement learning by equipping goal-reaching tasks with Boolean operations. We revisit its structural assumptions and formalize a collapse in the space of optimal extended Q-value functions: in deterministic MDPs, every such function is fully determined by the universal and empty tasks. This makes the logarithmic set of base tasks proposed in the original BTA formulation redundant. Building on this observation, we introduce a goal-set-based composition method that performs logical operations on goal sets and reconstructs composed value functions by selecting slices from the universal and empty value functions. This reduces learning costs for standard BTA and reduces composition time for both BTA and Skill Machines, while preserving policy performance. Experiments across tabular, visual, function-approximation, and continuous-control domains show that learning additional base tasks does not yield better performance. Finally, we study the stochastic setting and provide a counterexample showing that this collapse need not hold, that is, optimal composition may require accounting for exponentially many policies in the number of goals. Code is available at https://github.com/EduardoTerres/bta_paper.
