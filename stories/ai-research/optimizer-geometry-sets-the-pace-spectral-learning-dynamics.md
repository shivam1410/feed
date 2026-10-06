---
title: "Optimizer Geometry Sets the Pace: Spectral Learning Dynamics in Matrix Factorization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04249"
authors: ["Mahalakshmi Sabanayagam, Simon Lucey"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.04249v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Recent successes of matrix- and curvature-based optimizers have renewed interest in how update geometry shapes learning. These methods normalize or precondition updates, changing how different components progress during training. In deep matrix factorization, the geometry that slows gradient descent (GD) favors low-rank solutions by delaying the emergence of small singular modes. This raises the question of what remains of that spectral bias when normalization or curvature correction weakens or removes the slowdown. We study how optimizer geometry and depth jointly govern this behavior through a common framework for singular mode dynamics. Under explicit balance and alignment assumptions, we derive birth, saturation, and decay laws for Euclidean GD, coordinate-wise updates of SignGD and an instantaneous Adam approximation, spectral updates of Muon and cumulative Shampoo, and a block curvature model of K-FAC. The resulting picture is not a simple ordering from stronger to weaker low-rank bias. To highlight, SignGD and ideal Muon eliminate the divergent birth barrier and drive unsupported modes to zero in finite time. Cumulative Shampoo initially retains GD's depth-dependent barrier, then accumulated gradients produce a catch-up phase while making previously active modes increasingly persistent. Undamped K-FAC cancels the factorization-induced slowdown while preserving the ordering of the target singular values, whereas positive damping introduces a spectral threshold below which the slow GD phase laws reappear. These results give normalization, accumulated state, damping, and depth a direct interpretation as controls determining when modes emerge, persist, and disappear during training.
