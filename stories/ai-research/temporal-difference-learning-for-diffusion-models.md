---
title: "Temporal Difference Learning for Diffusion Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.15048"
authors: ["Qizhen Ying, Yangchen Pan, Victor Adrian Prisacariu, Junfeng Wen"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.15048v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.15048v1 Announce Type: new Abstract: Diffusion models are typically trained with objectives that focus on local denoising targets at individual time steps (or adjacent pairs), which do not enforce consistency between predictions along the denoising trajectory. This lack of cross-time consistency can degrade performance, especially for few-step samplers. We introduce a temporal difference (TD) objective that penalizes inconsistency of the model's multi-step progress along the denoising path. By reformulating the diffusion process as a Markov reward process and casting denoising as a policy evaluation problem in reinforcement learning, we derive a unified TD approach that applies to both discrete- and continuous-time diffusion formulations. We further propose a principled sample-based reweighting method that stabilizes training. Empirically, we show that using our TD training can significantly improve sample quality measured by FID, with stronger advantages when the number of sampling steps is small, highlighting its practical utility under low-computation-budget scenarios. We provide ablation studies to justify our design choices, including pairwise loss reweighting, regularization weight, and one-step stride. Overall, our TD approach can be a general drop-in that enforces cross-time consistency and improves generation quality across different diffusion generative models.
