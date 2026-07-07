---
title: "LiNO: Lifting based multiresolution neural operator"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.02715"
authors: ["Himanshu Pandey, Subham Patel, Ratikanta Behera"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.02715v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.02715v1 Announce Type: new Abstract: Recently, neural operators have shown promising outcomes for learning solution operators of differential equations directly from data. This framework learns a functional mapping from the parameter field to the solution field, enabling the prediction of an entire class of solutions rather than a specific instance. However, existing operators often struggle to capture both global dynamics and fine-scale structure simultaneously. To design an effective operator capable of representing multiscale features, a hierarchical multiscale decomposition framework is required. In this study, we develop the Lifting Neural Operator (LiNO), a multiresolution operator built on the second-generation wavelet lifting scheme. LiNO learns a multiresolution decomposition directly from data by parameterizing the lifting transform. This lifting transformation is adaptive to the underlying solution function and exactly invertible by construction, enabling information-preserving multiscale operator learning. In the lifted multiresolution space, the operator evolves coarse and directional detail coefficients separately, resulting in scale-aware modeling of the underlying physics. We evaluate LiNO on several benchmarks, including Darcy flow, the Poisson equation, the Allen-Cahn equation, the compressible Navier-Stokes equation, and the Gray-Scott reaction-diffusion system. Together, these benchmarks cover a wide range of physical behaviors, including multiscale phenomena, transport-dominated dynamics, and chaotic systems. LiNO demonstrates strong performance on these challenging benchmarks compared with state-of-the-art neural operators. These results suggest that adaptive multiresolution operators provide a promising direction for scientific machine learning.
