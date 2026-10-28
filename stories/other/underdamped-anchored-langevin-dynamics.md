---
title: "Underdamped Anchored Langevin Dynamics"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36470"
authors: ["Qi Feng, Hoang M. Nguyen, Lingjiong Zhu"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36470v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Classical Langevin Monte Carlo algorithms, such as the unadjusted Langevin algorithm (ULA), are based on discretization schemes of the overdamped Langevin dynamics and are widely used for sampling in machine learning because they scale to high dimensions and large datasets. However, they require differentiable log-densities, and are less efficient for sampling heavy-tailed distributions. Although various approaches have been proposed in the literature for sampling non-differentiable and heavy-tailed targets, all of them are developed in the overdamped setting only. We propose a novel momentum-based underdamped anchored Langevin dynamics (UALD), and underdamped anchored Langevin Monte Carlo (UALMC) algorithm based on a discretization scheme of UALD. Our paper is the first to provide a kinetic (momentum-based) Langevin algorithm for non-differentiable and heavy-tailed targets that is free of asymptotic bias. The method replaces the original potential with a smooth reference potential and modifies the underdamped Langevin dynamics via multiplicative scaling in the drift term. We establish non-asymptotic guarantees in the 2-Wasserstein distance to the target distribution and show that the resulting iteration complexity has better dependence on dimension and accuracy level compared to overdamped-based anchored Langevin algorithms. We provide numerical experiments to illustrate the theory and practical performance of our proposed approach.
