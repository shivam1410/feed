---
title: "An Educated Guess: Deriving Statistically Aligned Gradient Estimates for Zeroth-Order Optimisation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08712"
authors: ["Justus Huebotter, Serge Thill, Marcel van Gerven, Nasir Ahmad"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08712v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

As novel hardware architectures are explored for the purposes of machine learning, including neuromorphic chips, asynchronous systems, and ASICs, effective learning algorithms are highly desirable. While backpropagation is the standard for differentiation on standard hardware, its requirement for global synchrony and exact differentiability limits the exploration of exotic algorithms on non-traditional substrates and devices. Zeroth-order (ZO) optimisation methods, such as SPSA and weight perturbation, offer a compelling alternative by estimating gradients through inference-only passes; however, these methods have historically suffered due to the `curse of dimensionality', where random perturbations become increasingly misaligned with the true gradient in high-dimensional spaces. In this work, we move beyond blind random noise by deriving zeroth-order search directions from activation geometry available during the forward pass. This leads to a family of Spectral Zeroth-Order methods, SZO-$\kappa$, whose directions solve local response-based gradient-guessing objectives under explicit stochastic assumptions. These methods explore feature-supported directions that are more likely to produce informative loss responses. Using multilayer and convolutional networks, we analyse gradient alignment, bias-variance structure, and training stability of these methods relative to standard perturbation baselines and backpropagation.
