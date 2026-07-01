---
title: "Warp RL: Reshaping Base Policy Distributions for Dynamics Adaptation"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.31043"
authors: ["Ethan Hirschowitz, Fabio Ramos"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 63
guid: "oai:arXiv.org:2606.31043v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.31043v1 Announce Type: new Abstract: Residual reinforcement learning adapts a pretrained robot policy by learning an additive correction to its actions. While effective when adaptation amounts to shifting the base policy's action distribution, additive corrections cannot change the distribution's shape, scale, or state-dependent geometry -- limitations we formalize as wrong variance, miscalibrated confidence, and non-uniform correction. We show that these matter under dynamics shift: when the base distribution is geometrically mismatched to the shifted system, residual correction can underperform even the unadapted policy. We propose \textbf{Warp RL}, a policy adaptation method that replaces additive residuals with an invertible, state-conditioned transformation of the base policy's action distribution. Instantiated with monotonic rational-quadratic spline flows [arXiv:0706.1234v1], Warp RL preserves identity initialization, strictly generalizes additive residual correction, and exposes a structured adaptation space suitable for both policy-gradient and gradient-free optimization. Across a variety of ManiSkill3 manipulation tasks with controlled dynamics shifts, Warp RL matches residual correction when translation is sufficient and substantially outperforms it when adaptation requires distributional reshaping. We further demonstrate that warping can replace additive correction in an off-policy sim-to-real pipeline, achieving comparable success rate with 30% faster task completion on a real-robot peg-insertion task.
