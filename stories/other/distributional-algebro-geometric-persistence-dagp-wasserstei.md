---
title: "Distributional Algebro-Geometric Persistence (dAGP): Wasserstein-Stable Polynomial-Relation Signatures"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.26986"
authors: ["Edisy Kin Wai Chan, Andersen Ang"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 20
guid: "oai:arXiv.org:2611.26986v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

A circle and a quartic superellipse have the same homology, but their defining equations have degrees two and four, respectively. We study this algebraic distinction for point-cloud distributions. For a probability measure $\mu$ on $\Omega=[-1,1]^d$ and an orthonormal polynomial feature map $\phi_m$ of degree $m$, the moment matrix $G_m(\mu)=\mathbb{E}_{X\sim\mu}[\phi_m(X)\phi_m(X)^\top]$ satisfies $c^\top G_m(\mu)c=\mathbb{E}_\mu[f_c(X)^2]$, so coefficient directions associated with its small eigenvalues represent low-degree polynomials that nearly vanish on $\mu$. Counting these near-relation directions across degree $m$ and the tolerance $\varepsilon$ gives a two-parameter integer signature. We call this representation distributional algebro-geometric persistence (dAGP), the population counterpart of the point-cloud algebro-geometric persistence (AGP) construction. For empirical measures, dAGP is the sample-normalised counterpart of point-cloud AGP. We also show that $\mu\mapsto G_m(\mu)$ is Lipschitz in the $1$-Wasserstein distance, so its ordered eigenvalues vary Lipschitz-continuously under transport of mass, while its threshold counts remain unchanged under perturbations satisfying a spectral-margin condition. We give an explicit support-localised Lipschitz constant and identify the regime in which the resulting guarantee is informative. Experimentally, the population noise-floor prediction agrees with the finite-sample mean to $0.1\%$, within sampling error. At a selected tolerance, relation onset orders the conic, quartic, and non-algebraic closed curves, while their count profiles distinguish them from the two-dimensional control. Calibration identifies an empirical tolerance range. A $100$-repetition sensitivity study quantifies onset recovery and shows that the count grid and two continuous spectral baselines nearly saturate the four-family discrimination task.
