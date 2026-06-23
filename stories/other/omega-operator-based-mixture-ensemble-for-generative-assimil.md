---
title: "$\\Omega$: Operator-based Mixture Ensemble for Generative Assimilation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.20920"
authors: ["Pouria Behnoudfar, Nan Chen"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.20920v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.20920v1 Announce Type: new Abstract: Characterizing non-Gaussian posterior distributions in partially observed high-dimensional nonlinear systems remains a fundamental challenge in data assimilation. Ensemble Kalman filters rely on Gaussian approximations that can be inaccurate for strongly non-Gaussian posteriors, whereas particle filters suffer from severe scalability limitations. Recent score-based generative approaches improve posterior characterization but typically require supervised training with ground-truth posterior samples, which are unavailable in most practical applications. We introduce $\Omega$ (Operator-based Mixture Ensemble for Generative Assimilation), a scalable framework that integrates conditional Gaussian surrogate modeling, unsupervised score learning, and generative sampling. The conditional Gaussian surrogate provides a nonlinear non-Gaussian baseline approximation while admitting closed-form conditional posterior distributions for the unresolved variables. First, $\Omega$ exploits these closed-form conditional distributions to analytically recover the high-dimensional unobserved component, reducing computational cost and mitigating the curse of dimensionality. Second, $\Omega$ learns only the residual discrepancy beyond an analytical baseline through denoising score matching using ensemble trajectories alone, eliminating the need for ground-truth posterior samples and substantially reducing the learning burden. Third, $\Omega$ reconstructs the full non-Gaussian posterior distribution of both observed and unobserved variables via a Gaussian mixture representation, capturing multimodal, skewed, and heavy-tailed statistics. Finally, $\Omega$ employs annealed Langevin sampling to iteratively refine ensemble members from the baseline toward the target posterior. $\Omega$ is validated on several turbulent models with intermittency and extreme events, consistently improving posterior accuracy.
