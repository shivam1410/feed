---
title: "Vertical Sliced Wasserstein Distances for Meta-Measures"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.20743"
authors: ["Elaheh Akbari, Ahmadreza Moradipari, Kyungtae Han, Hamed Pirsiavash, Yikun Bai, Rocio Diaz Martin, Soheil Kolouri"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.20743v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

Many modern learning problems require comparing probability distributions whose individual observations are themselves probability measures, naturally giving rise to meta-measures in $\mathcal{P}(\mathcal{P}(\Omega))$. However, optimal transport distances on this space can be prohibitively expensive to evaluate. We introduce the vertical sliced Wasserstein ($\mathrm{VSW}$) distance, a scalable metric on $\mathcal{P}(\mathcal{P}(\Omega))$. Rather than slicing along the transport geometry of $\mathcal{P}(\Omega)$, $\mathrm{VSW}$ projects each inner measure using continuous test functions and compares the resulting one-dimensional distributions with one-dimensional Wasserstein distance. We prove that $\mathrm{VSW}$ is a valid metric on $\mathcal{P}(\mathcal{P}(\Omega))$, metrizes weak convergence, and admits dimension-independent statistical convergence guarantees. Empirically, $\mathrm{VSW}$ provides high accuracy and efficiency compared with existing distances for meta-measures. We further derive a practical particle gradient for the empirical $\mathrm{VSW}_2^2$ objective and demonstrate its use for gradient-based transport of meta-measures. $\mathrm{VSW}$ provides a simple and scalable alternative for comparing and optimizing distributions of distributions.
