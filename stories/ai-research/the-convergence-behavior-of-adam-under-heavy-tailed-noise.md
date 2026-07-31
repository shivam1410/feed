---
title: "The Convergence Behavior of Adam under Heavy-Tailed Noise"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.27383"
authors: ["Yijiang Pang"]
date: "Fri, 31 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.27383v1"
image: ""
generated: "2026-07-31T19:06:14+05:30"
---

arXiv:2607.27383v1 Announce Type: new Abstract: We establish the first convergence guarantees for the plain vector-form \emph{Adam} optimizer under heavy-tailed stochastic noise. While several Adam variants are known to achieve optimal iteration complexity in bounded-variance nonconvex optimization, little is understood about their behavior when stochastic gradients admit only a bounded $p$-th central moment for some $p \in (1,2]$, a setting increasingly observed in modern deep learning. To address this gap, we generalize the recent online-to-nonconvex conversion framework to accommodate heavy-tailed martingale-difference noise. Building on this generalized framework, we develop a discounted regret analysis for Adam, without restrictive parameter coupling. Our results show that Adam converges to $(\rho,\epsilon)$-stationary points under heavy-tailed noise. However, it exhibits a suboptimal iteration complexity and $p$-dependent convergence, a suboptimality that persists even in the bounded-variance case ($p=2$). When the domain radius is known and used to control the online-learner output, a standard setup in related literature, the convergence rate improves to match the optimal complexity. These findings provide new theoretical insight into the robustness and limitations of Adam in heavy-tailed regimes.
