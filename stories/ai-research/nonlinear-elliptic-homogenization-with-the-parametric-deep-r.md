---
title: "Nonlinear elliptic homogenization with the parametric Deep Ritz method"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05778"
authors: ["Conor Rowan"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.05778v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05778v1 Announce Type: new Abstract: Elliptic homogenization is used to determine coarse-grained properties of materials with features on small scales. When these small scale features have rapid, periodic fluctuations, the solution field corresponding to a homogenized constitutive relation closely resembles the true solution based on the heterogeneous material. This homogenized behavior of the material is computed from a cell problem, where a cell is defined to be one period of the fluctuating material. In the context of linear elliptic partial differential equations, the homogenized constitutive relation is defined simply by a constant coefficient tensor, but for nonlinear problems, the homogenized response depends on the macroscopic state and/or its gradient, thus requiring solutions to parametric cell problems. When computing a numerical solution with the homogenized constitutive relation, it is useful to have a differentiable representation of the solution to the cell problem, as derivatives of the homogenized constitutive relation are required in Newton iterations for the macroscopic state field. In this work, we use the Deep Ritz method to solve the parametric cell problems that arise from nonlinear homogenization. First, we exploit the variational structure of the cell problem, then we discretize the dependence of the cell response on both space and the macroscopic state with a neural network. Enforcing boundary conditions on the cell response strongly, we next use the parametric Deep Ritz method to simultaneously solve the cell problem over a range of macroscopic states. We show that this method is accurate, efficient, and offers a continuous and differentiable representation of the cell response over the macroscopic state and gradient. We then show that our parametric representation of the cell response significantly expedites macroscale solutions when compared to a traditional $\text{FE}^2$ scheme.
