---
title: "MAC-v2: Long-horizon model-based value expansion from pixels"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07245"
authors: ["Kwanyoung Park, Sergey Levine"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07245v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

We study whether \emph{long-horizon model-based value expansion} can serve as an effective framework in pixel-based offline reinforcement learning (RL). Long-horizon model-based value expansion from pixels is substantially harder than state-based environments, as the agent must learn both the representation and its dynamics, and errors from either can accumulate recursively over imagined trajectories. We introduce MAC-v2, which enables long-horizon model-based expansion from pixels by training a reconstruction-free latent world model with action chunking. By learning representations from prediction and control objectives, MAC-v2 does not need to encode control-irrelevant visual details that can hinder the dynamics prediction. Action chunking further mitigates the prediction error by reducing the number of recursive model predictions required for value expansion. Across diverse visual benchmarks including visual OGBench, MMBench2, Robomimic, and LIBERO-10, MAC-v2 achieves strong performance against model-free and model-based offline RL baselines. Our analyses show that long-horizon model-based value expansion is critical for the performance of MAC-v2, and that both action chunking and latent learning objectives are essential for reliable long-horizon latent imagination.
