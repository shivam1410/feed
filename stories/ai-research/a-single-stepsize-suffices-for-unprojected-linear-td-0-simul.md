---
title: "A Single Stepsize Suffices for Unprojected Linear TD(0): Simultaneous Robust and Fast Rates via Polyak--Ruppert Averaging"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24981"
authors: ["Wei-Cheng Lee, Francesco Orabona"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.24981v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24981v1 Announce Type: new Abstract: We study linear TD(0) under Markovian sampling, where data are generated along a single trajectory. We provide high-probability guarantees for a plain unprojected TD(0) algorithm with Polyak-Ruppert (PR) averaging, using a single stepsize schedule $\eta_t \propto \frac{1}{\tau_{\mathrm{mix}}\log(t)\sqrt{t}}$ that depends on the mixing time but requires no prior knowledge of the curvature parameter $\omega$. Our first result shows that such a choice of the stepsize guarantees that the TD(0) iterates are automatically and uniformly bounded with high probability, without projections and without any stability argument based on $\omega$. Building on this result, we establish a simultaneous high-probability convergence guarantee for the PR average: the same stepsize yields both a robust curvature-free $\widetilde{\mathcal{O}}\!\left(\frac{\tau_{\mathrm{mix}}}{\sqrt{T}}\right)$ rate and a fast curvature-dependent $\widetilde{\mathcal{O}}\!\left(\frac{\tau_{\mathrm{mix}}^2}{\omega T}\right)$rate, with the bound taking the minimum of the two. The core technical ingredient is a Poisson-equation toolkit for geometrically mixing Markov chains, which decomposes Markov noise into a martingale term plus a controlled remainder and enables a new self-bounding inductive argument for pathwise stability.
