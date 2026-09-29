---
title: "DOHF: Online Diffusion Fine-tuning with Doob's $h$-transform Guidance"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31882"
authors: ["Zhengyi Guo, Jiayuan Sheng, Wenpin Tang"]
date: "Tue, 29 Sep 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2609.31882v1"
image: ""
generated: "2026-09-29T19:09:35+05:30"
---

Reward-based diffusion fine-tuning faces practical challenges when desirable outcomes are rare or conditioning corrections are costly to estimate. In this work, we propose Diffusion Online $h$-guidance Fine-tuning (DOHF), which turns Doob's $h$-transform into a practical online training algorithm. DOHF assigns optimality weights to generated samples, estimates the normalized local correction $\nabla\log h$ under the current rollout policy, and distills it directly into the generative model. Theoretically, we characterize the population-optimal DiffusionNFT update as well as the various classfier free guidance methods through a unified $h$-transform perspective. Methodologically, our framework accommodates black-box and non-differentiable rewards without additional network evaluations. We further show improved alignments under three empirical scenarios. Our work demonstrates how adapting probabilistic conditioning through inexpensive estimation and iterative distillation can improve generative learning across statistical sampling and visual generation.
