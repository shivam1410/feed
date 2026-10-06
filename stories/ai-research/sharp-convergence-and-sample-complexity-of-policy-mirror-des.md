---
title: "Sharp Convergence and Sample Complexity of Policy Mirror Descent for Average-Reward MDPs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04117"
authors: ["Enes Arda, Atilla Eryilmaz"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.04117v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Policy mirror descent (PMD) has a mature finite-time theory in discounted Markov decision processes (MDPs), but less is known in the average-reward setting, a more natural objective for many control applications. We give a finite-time, finite-sample analysis of PMD in ergodic average-reward MDPs built around a single master recursion that governs convergence for any critic, without external regularization. Its specializations yield linear rates for exact, inexact-tabular, and linear function approximation (LFA) updates, with a superlinear regime for exact PMD. We complement these convergence results with end-to-end sample complexities of order $t_{\mathrm{mix}}^3/\varepsilon^2$ in both tabular ($|S||A|$-dependent) and LFA ($d$-dependent) settings. Our LFA sample complexity sharpens the prior best $t_{\mathrm{mix}}^5$ mixing dependence to $t_{\mathrm{mix}}^3$, and matching information-theoretic lower bounds establish that the critic's $t_{\mathrm{mix}}^3/\varepsilon^2$ sample complexity is unimprovable in both settings.
