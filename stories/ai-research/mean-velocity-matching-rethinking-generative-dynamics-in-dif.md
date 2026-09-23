---
title: "Mean Velocity Matching: Rethinking Generative Dynamics in Diffusion Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25444"
authors: ["Yunhong Zhang, Changjie Cao, Zhihua Zhang, Bingli Liu, Zongjie Cao, Zongyong Cui, Ying Yang"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.25444v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25444v1 Announce Type: new Abstract: This work studies prediction parameterization for stochastic generative dynamics in diffusion models. Existing velocity-based generative models provide the simplicity of learning a single transport field, but their standard formulation is deterministic, whereas stochastic extensions generally require additional score information or an intermediate velocity-to-score reconstruction. To retain single-field prediction while directly supporting stochastic reverse dynamics, this paper introduces Mean Velocity Matching (MVM). MVM constructs a Gaussian perturbation process for which the conditional expectation of a restoration-oriented velocity, $(x_0-x_t)/t$, directly forms the reverse-SDE drift. Consequently, a single learned field is sufficient to parameterize the stochastic reverse process without separately estimating or reconstructing the score. Because direct regression of this velocity becomes unbounded near $t=0$, MVM further introduces a $\sqrt{t}$-scaled parameterization that preserves the reverse dynamics while yielding a bounded training target. The same learned field also induces a deterministic probability-flow ODE, enabling stochastic and deterministic sampling to be studied within a unified formulation. Experiments with Transformer-based generative models achieve an FID of $\MVMImageNetThirtyTwoFID$ at \MVMImageNetThirtyTwoNFE\ NFE on ImageNet $32\times32$ and $\MVMImageNetTwoFiftySixFID$ at \MVMImageNetTwoFiftySixNFE\ NFE on ImageNet $256\times256$. Controlled SDE--ODE comparisons further show that the ODE performs better under very low NFE, whereas the stochastic reverse process achieves lower FID when sufficient function evaluations are available. These results demonstrate that MVM provides a direct single-field parameterization of stochastic reverse dynamics while maintaining competitive generation quality.
