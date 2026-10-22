---
title: "How Does Orthogonalization Adapt to the Neural Network Hessian Structure? A Gradient Self Outer-Product Analysis at Initialization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.28975"
authors: ["Shenyang Deng, Garvit Goyal, Tianyu Pang, Shuhua Yu, Yaoqing Yang"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.28975v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

Muon orthogonalizes a weight matrix's momentum before each step, and on neural networks this simple preconditioner beats AdamW in a wide range of tasks. Existing analyses explain Muon within general optimization frameworks or on a few specific models, and many of them view orthogonalization as a preconditioner. Since the Hessian is the optimal preconditioner under a quadratic approximation of the loss, these works leave a basic question open: what makes orthogonalization suited to the Hessian of a neural network? Prior work shows that the layer-wise Hessian of a neural network is row-block diagonally dominant, and Muon's implicit preconditioner, the Kronecker product $(\mathbf{V}\mathbf{V}^\top)^{1/2}\otimes\mathbf{I}$ with $\mathbf{V}$ the momentum, has the same row-block structure exactly when $\mathbf{V}\mathbf{V}^\top$ is diagonally dominant. Diagonal dominance of $\mathbf{V}\mathbf{V}^\top$ has been observed in language models, but why a neural network produces it has not been explained. This work provides a quantitative asymptotic theory for neural networks at initialization, and points out the intuition that the overparameterization of the weight matrices drives the diagonal dominance. We analyze $\mathbb{E}[\mathbf{G}\mathbf{G}^\top]$, which equals $\mathbb{E}[\mathbf{V}\mathbf{V}^\top]$ at initialization, in four canonical models: symmetric matrix factorization, deep linear networks, two-layer ReLU networks, and single-layer linear attention. In each case the diagonal entries outgrow the off-diagonal ones at explicit rates as the hidden dimensions grow; for the query, key and value weights of attention the off-diagonal vanishes altogether. Simulations of the four models and experiments on language models at initialization confirm the predicted scaling.
