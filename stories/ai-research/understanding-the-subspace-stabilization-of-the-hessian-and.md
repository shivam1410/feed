---
title: "Understanding the Subspace Stabilization of the Hessian and Gradient Covariance Matrix"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31983"
authors: ["Fangshuo Liao, Anastasios Kyrillidis"]
date: "Tue, 29 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.31983v1"
image: ""
generated: "2026-09-29T19:09:35+05:30"
---

The phenomenon of the top subspace stabilization of the Hessian matrix is an surprising and critical aspect in study of the second-order information of neural network training. Prior work argues that the top subspace of the Hessian stabilizes by measuring the overlap between the top subspaces of the step-wise Hessian, and explains this stabilization with diminishing parameter change in the late phase of training. In this paper, we define a new instability metric for the subspace evolution, and use it to detect subspace stabilization that is independent of the magnitude of parameter change. In the meantime, we observe that the gradient covariance matrix has a similar property of its top subspace to the Hessian. By using a between-class and within-class decomposition of the gradient covariance matrix, we identify an explicit form that gives a near-perfect approximation of the top-$(C-1)$ subspace of the Hessian and the gradient covariance matrix. In the gradient flow set-up, we show that the slow evolution of the idenfied approximation is due to the separation between the outlier and the bulk eigenvalues of the Hessian matrix, thus providing an explanation to the phenomenon of the top subspace stabilization of the Hessian matrix.
