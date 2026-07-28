---
title: "Finite-Time Analysis of the Natural Policy Gradient in Finite-Horizon Markov Decision Processes"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22982"
authors: ["Asha Barua, Sajad Khodadadian"]
date: "Tue, 28 Jul 2026 00:00:00 -0400"
score: 49
guid: "oai:arXiv.org:2607.22982v1"
image: ""
generated: "2026-07-28T19:07:22+05:30"
---

arXiv:2607.22982v1 Announce Type: new Abstract: Natural Policy Gradient (NPG) is a well-established Reinforcement Learning algorithm that underlies widely used methods such as Trust Region Policy Optimization and Proximal Policy Optimization, both of which have demonstrated strong empirical success. In this paper, we study exact NPG in finite-horizon Markov Decision Processes with known dynamics and horizon-dependent transition kernels. We provide the first finite-time convergence guarantees for this algorithm in this setting, for which we consider both constant and increasing step size regimes. With a constant step size $\eta_t=\eta$, we prove that NPG converges sublinearly with a rate of $\mathcal{O}(H^{2}/t)$ after $t$ iterations, where $H$ is the horizon length. We also extend this constant step size analysis to linear MDPs in an exact population-projection oracle under a full support projection distribution, recovering the same sublinear rate as in the tabular setting. Furthermore, with increasing step sizes, we prove that this algorithm achieves a linear convergence rate of $\mathcal{O}\left(\left(1-\frac{1}{\vartheta_\rho}\right)^t\right)$ for a problem-dependent constant $\vartheta_\rho > 1$, and the horizon-only robust schedule of the form $\eta_t=\eta_0(H/(H-1))^t$ where $\eta_0>0$ and $H \geq 2$, attains this same geometric rate.
