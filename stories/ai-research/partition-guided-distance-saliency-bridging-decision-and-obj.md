---
title: "Partition-Guided Distance Saliency: Bridging Decision and Objective Spaces in Many-Objective Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.30836"
authors: ["Cl\\'audio L\\'ucio do Val Lopes, Fl\\'avio Vin\\'icius Cruzeiro Martins, Elizabeth Fialho Wanner"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.30836v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.30836v1 Announce Type: new Abstract: Explainability in Many-Objective Optimization (MaO) is currently hindered by the escalating complexity of the Pareto front, which renders the relationship between high-dimensional decision variables and objective outcomes increasingly opaque. As the number of objectives exceeds the limits of traditional visualization, decision-makers encounter a ``cognitive drought'' in identifying relevant trade-offs or specifying target regions without a priori knowledge. To bridge this interpretability gap, we introduce the {Partition-Guided Distance Saliency (PGDS)} framework, a novel XAI approach designed for continuous optimization landscapes. Our framework automates the explanation process through a three-stage pipeline that prioritizes geometric intuition over abstract rules. First, we employ a surrogate model that learns how geometric distances in the decision space map to proximity in the objective space. Second, to address the difficulty of manual target selection in high dimensions, the framework automatically partitions the objective landscape into distinct regions and identifies local ``Dominating Points'' to serve as automated targets for improvement. Third, we quantify how sensitive a solution's position is to each decision variable by measuring the distance shifts induced by perturbations to each variable. This allows PGDS to categorize features as either ``Drivers'' which facilitate convergence toward preferred regions, or ``Blockers'' which represent geometric constraints hindering further progress. Validation on 10-objective benchmarks and a physics-informed engineering problem (Welded Beam) demonstrates that PGDS provides differentiated, actionable insights that traditional visualization and rule-based XAI methods fail to provide.
