---
title: "SirenFNO: Efficient and Full Frequency Learning of Fourier Neural Operators"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11518"
authors: ["Pengqing Shi, Jie Yin, Stephen Tierney, Junbin Gao"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.11518v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11518v1 Announce Type: new Abstract: Fourier neural operators (FNOs) are effective and efficient surrogates for approximating solutions of PDEs and generalize across discretizations. However, owing to the reliance on frequency truncation to maintain learning efficiency of FNOs, empirical studies suggest that FNOs exhibit spectral bias toward low-frequency information, which may hinder the learning capability especially for certain PDEs with strong high-frequency oscillations. To address this limitation, we propose SirenFNO, a novel framework that leverages sinusoidal representation networks (SIRENs) to learn implicit neural representations and performs mode-wise kernel parameterization. Our SIREN parameterization learns a full-grid spectrum with a constant and discretization-independent parameter count, thereby eliminating the need for frequency truncation. We further extend SirenFNO with functional tensor decompositions to enhance parameter and learning efficiency. Empirical results show that our SirenFNO consistently outperforms FNO with approximately $4$ to $15$ times parameter reductions with preserved discretization invariance, and our functional decomposition variants obtain performance improvements with a maximum of $73$ times fewer parameters across multiple PDE benchmarks.
