---
title: "QSV: Quat-Sphere-Vision for Coupled Quaternion Attention on Spherical Lattices"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30592"
authors: ["Nicholas Foley, Devin Marinelli, Donny Moore, Diego Enriquez, Amanda Fernandez"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 38
guid: "oai:arXiv.org:2609.30592v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

In standard attention, three separately learned projections decide how strongly a token attends to each neighbor ($W_Q$, $W_K$) and how the attended features are transformed before aggregation ($W_V$). We study Quat-Sphere-Vision (QSV), a sparse spherical vision model that replaces this projection triple with a single learned unit quaternion per token: the relative quaternion $r_{ij} = q_i^{*} \otimes q_j$ supplies both the attention logit $\operatorname{Re}(r_{ij})$ and a sandwich-product feature transport $x \mapsto r_{ij} \otimes x \otimes r_{ij}^{*}$, with messages passed over sparse kNN graphs on concentric Fibonacci spheres. Ablations that change only the targeted component show the two roles to be asymmetric. Removing the transport reduces test accuracy by about four percentage points on CIFAR-10 and CIFAR-100 (single runs per CIFAR-100 variant), while replacing the learned attention weights with uniform averaging leaves it essentially unchanged. Parameter-matched controls then remove the geometry itself: standard attention on the same graph exceeds QSV (mean $87.3\%$ vs. $85.9\%$), and the same model on a flat 2D lattice reaches $91.1\%$, within $2.1$ points of a ResNet-20 trained under the same pipeline (single run). In the coupled kernel, nearly all of the learned pairwise computation resides in the transport channel.
