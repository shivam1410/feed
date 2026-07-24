---
title: "Exact ReLU realization of affine one-dimensional refinement iterates via residual memory and offset frames"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20586"
authors: ["Boldsaikhan Bolorkhuu, Tsogtgerel Gantumur"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2607.20586v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20586v1 Announce Type: new Abstract: We study vector-valued affine refinement operators of the form [ (W\gamma)(t)=\sum_{j\in\mathbb{Z}} A_j\gamma(Mt-j)+B(t), ] with finitely supported matrix mask and compactly supported continuous piecewise linear input and forcing data. Building on the homogeneous realization theorem for (B\equiv 0), we prove that, for (M\ge 3), every finite affine iterate (W^n\gamma) admits an exact fixed-width ReLU realization whose depth is (O(n)). The main new ingredient is a residual memory controller. It replaces the noninvertible residual dynamics by an injective skew-product and permits exact backward replay of the residual states required by a Horner-type evaluation of the affine forcing sum. Offset frames align the forcing atoms away from residual seams, allowing complementary loop readouts to recover their values exactly. The remaining branch-selection ambiguity occurs only where the accumulated affine state has already vanished. For (M\ge 3), the result applies to arbitrary compactly supported continuous piecewise linear forcing terms. For (M=2), the same construction applies to ordinary-frame seam-separated forcing. We also prove a stage-dependent extension for forcing terms in a fixed finite-dimensional continuous piecewise linear span and record the resulting linear-depth upgrade for open-curve, finite-state, and Hilbert- and Morton-type recursive constructions.
