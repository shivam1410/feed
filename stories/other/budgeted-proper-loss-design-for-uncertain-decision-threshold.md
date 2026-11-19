---
title: "Budgeted Proper Loss Design for Uncertain Decision Thresholds"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23247"
authors: ["Ankit Sharma (International Institute of Information Technology Bangalore)"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23247v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

A binary probability estimate may be used by several decision makers with different error costs. Proper scoring rules can emphasize selected probability thresholds, but a single average threshold distribution need not give a good worst-case regret guarantee. We study the choice of a proper loss when the threshold distribution belongs to a finite specified family. Among integrable loss weights with a positive pointwise floor and a fixed total mass, we derive the weight that minimizes the sharp, distribution-free multiplier from surrogate regret to threshold-averaged decision regret. The solution clips a rescaled upper envelope of the threshold densities at the prescribed floor; its normalization is found by a one-dimensional root search. We give proofs of sharpness, optimality, and stability under density misspecification, as well as a limitation for atomic threshold laws. An exact histogram implementation and two synthetic experiments across 20 seeds verify the construction. The optimized multiplier improves over uniform and average-density weights, while fitted-model performance does not improve uniformly. The result is a loss-design guarantee under an explicit budget, rather than a general claim of predictive superiority.
