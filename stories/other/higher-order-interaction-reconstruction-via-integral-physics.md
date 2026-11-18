---
title: "Higher-Order Interaction Reconstruction via Integral Physics-Informed Neural Networks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21935"
authors: ["Xin Mao, Zhen Xu, Shiyi Yang, Sukwon Yun, Yunmei Liu, Ren Wang, Tianlong Chen, Can Chen"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21935v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

Reconstructing higher-order interactions is a fundamental challenge in complex networked systems, with applications in ecological, social, and biological networks. This inverse problem is inherently difficult due to the combinatorial complexity of higher-order structures, the strong nonlinearity of the underlying dynamics, and the prevalence of noisy and sparse observations. In this article, we propose a novel integral physics-informed neural network (IntegralPINN) framework for higher-order interaction reconstruction. Instead of { penalizing derivative-based physics residuals,} we adopt an integral formulation over temporal intervals, which naturally suppresses high-frequency noise and mitigates derivative-induced instability. We further introduce a continuous parameterization of interaction tensors, enabling tractable identification of higher-order structures via gradient-based optimization. We provide theoretical analysis establishing a noise-robust error bound that is independent of derivative amplification when the integration window satisfies an excitation condition. Extensive experiments on ecological dynamics, social contagion, and neuronal synchronization systems demonstrate that IntegralPINN achieves accurate and robust reconstruction under noisy and sparse observations, outperforming state-of-the-art approaches.
