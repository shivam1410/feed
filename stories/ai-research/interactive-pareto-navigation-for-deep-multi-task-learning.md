---
title: "Interactive Pareto navigation for deep multi-task learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19521"
authors: ["Augustina C. Amakor, Konstantin Sonntag, Sebastian Peitz"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.19521v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19521v1 Announce Type: new Abstract: In multi-task learning, handling an increasing number of objectives can quickly become challenging, both in terms of the computational resources and the decision maker's capacity to choose appropriate trade-offs. A widely used approach is thus to aggregate the individual losses in a single loss function by a weighted sum. This often fails to capture either the decision maker's preferences as a result of the shape of the Pareto front, or requires multiple adjustments and computations which becomes prohibitively expensive in deep learning applications. To address these issues, we introduce a novel framework, Preference Pareto Exploration (PPE), which enforces the decision maker's preferences while accounting for the geometry of the Pareto set in an interactive exploration process. PPE is based on a predictor-corrector method that performs predictor steps tangential to the manifold of Pareto-optimal solutions, following the decision maker's preference. The subsequent corrector step results in a new trade-off reflecting this preference. To avoid explicit Hessian computations when characterizing the tangent space of the manifold, we employ a Krylov subspace method that relies solely on matrix-vector products. These products can be efficiently obtained via automatic differentiation, ensuring both efficiency and robustness throughout the optimization process. The method's functionality and performance are demonstrated using both toy problems and examples from deep learning.
