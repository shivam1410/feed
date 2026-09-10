---
title: "Settling: Equilibrium Inference for Non-Convex Validity Sets"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09682"
authors: ["Lyes Saad Saoud"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2609.09682v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09682v1 Announce Type: new Abstract: Many learning systems return a single point estimate even when admissible outputs form disconnected or non-convex sets. Under squared loss, an ambiguous conditional distribution can therefore have a Bayes-optimal conditional mean that is invalid. We formalize this failure as conditional mean collapse and introduce Settling, an equilibrium-based inference operator that separates proposal generation, consistency evaluation, and test-time equilibrium selection. The operator treats a mean-seeking proposal as an initialization and refines it toward a locally stable configuration; conditional on initialization, refinement is deterministic. We establish exact-gradient descent, local convergence, and an inexact-gradient robustness condition relevant to learned consistency critics. In a reproducible 100-context geometric diagnostic, the mean-seeking baseline succeeds in 0/100 contexts, stochastic denoising in 100/100, and Settling in 99/100 while producing substantially lower trajectory roughness. A 1,200-run sensitivity study yields 97-100% success across obstacle-jitter ranges up to 0.20 and 94-100% across one-time initialization perturbations from 0.05 to 0.50. Cross-domain panels remain mechanism illustrations; learned high-dimensional validation remains an open empirical test.
