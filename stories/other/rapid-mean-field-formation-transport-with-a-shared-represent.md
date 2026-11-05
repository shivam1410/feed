---
title: "Rapid Mean-Field Formation Transport with a Shared-Representation Neural Fokker-Planck Controller"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03981"
authors: ["Zejian Zhou, Hao Xu"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03981v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

This paper develops a mean-field formation transport method with low online computational cost for large-scale multi-agent systems. Classical mean-field planners often require repeated solutions of coupled forward and backward partial differential equations, making online replanning computationally demanding. Density and control are therefore approximated by a common parameterized nonlinear map with separate scalar density and vector control outputs. Parameters are optimized using Fokker--Planck and initial-condition residuals, formation-matching costs on numerically simulated closed-loop particle trajectories, and control effort. Numerical computations are restricted to a bounded region of the state space, with an additional penalty on probability flux across its boundary. For the periodic-domain model, we establish well-posedness of the induced density evolution and bound the density-approximation error in terms of the dynamics and initial-condition residuals. Parameter optimization precedes online operation, during which controller coefficients remain fixed. Experiments quantify the accuracy--runtime trade-off relative to a mean-field planner, show lower transport error than classical feedback baselines, and demonstrate the benefits of the common parameterization.
