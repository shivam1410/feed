---
title: "Physics-informed neural networks for spacecraft trajectory optimization with exact boundary conditions"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21933"
authors: ["Samuel Sch\\\"onherr, G\\\"unther Waxenegger-Wilfing, Sascha Ranftl"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21933v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

We use neural networks to optimize trajectories by modeling the position as a function of time and minimizing the thrust with respect to the network parameters. This corresponds to an unsupervised training procedure in which physical laws are incorporated directly into the optimization objective. In standard physics-informed neural networks, initial and terminal states are enforced through additional weighted loss terms, resulting in a multi-objective optimization problem that is highly sensitive to the choice of loss weights and can lead to poor convergence and reduced accuracy. To address this challenge, we construct a simple transformation, exploiting the mathematical structure of trajectory optimization problems, to enforce boundary conditions exactly a-priori. This transformation can be interpreted as a reparameterization of the solution space that embeds the boundary conditions directly into the function. This converts the original constrained optimization problem into an unconstrained one over admissible trajectories. I.e. the transformation eliminates the boundary condition penalty terms and reduces the problem to a single-objective optimization. Crucially, trajectory optimization comes with a low-dimensional boundary, which allows particularly simple and stable constructions of distance functions compared to general domains in partial differential equations. Numerical experiments demonstrate that the proposed approach meaningfully improves convergence behavior and solution accuracy.
