---
title: "Physics-Informed Conformal Prediction: Embedding PDE Consistency into Distribution-Free Uncertainty Quantification for Neural Operators"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.11935"
authors: ["Michael Chin"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.11935v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.11935v1 Announce Type: new Abstract: Neural operators such as the Fourier Neural Operator (FNO) achieve remarkable accuracy in approximating solutions to partial differential equations (PDEs). However, providing rigorous uncertainty estimates remains an open challenge. We propose Physics-Informed Conformal Prediction (PI-CP), a framework that embeds PDE residuals into the nonconformity score of split conformal prediction, producing prediction intervals that are (i) distribution-free with provable coverage guarantees, and (ii) spatially adaptive when the PDE residual correlates with prediction error -- tighter where physics is well-satisfied, wider where it is violated. Additionally, we prove that FNO's translation equivariance creates a fundamental approximation barrier for PDEs with Dirichlet boundary conditions, and show that coordinate channels resolve this with up to 63x error reduction. We validate PI-CP across six physics scenarios -- heat conduction (2D/3D), structural mechanics (2D/3D), Darcy flow, and Navier-Stokes -- demonstrating consistent 89-91% coverage for all four Conformal methods, while MC Dropout and Deep Ensembles are unstable (82-100%). FNO outperforms CNN and DeepONet by 10-12x.
