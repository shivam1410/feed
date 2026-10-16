---
title: "SIEVE: Overcoming Topological Obstruction in Equivariant Self-Supervised Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.21087"
authors: ["Jongann Lee, Sun Woo Park, Yun Young Choi"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.21087v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

We identify a theoretical incompatibility between 3D point cloud masked autoencoding and SE(3)-equivariant networks. We prove that standard masking triggers a topological collapse, effectively forcing the model to hallucinate orientation without a reference frame. To resolve this, we introduce SIEVE (Scalar Invariant Extraction Via Equivariance), an SE(3)-equivariant self-supervised framework that compresses point cloud geometry into invariant scalar embeddings. At its core is the spherical projection mask, which preserves global pose while obfuscating local semantics, sidestepping the obstruction by construction. Experiments confirm that SIEVE circumvents the predicted collapse where constant and noise masks fail. On downstream point cloud tasks, the resulting embeddings improve over coordinate-based baselines and hand-crafted geometric descriptors, with the largest gains on generalization to unseen shape categories.
