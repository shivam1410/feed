---
title: "On the Few-Shot Adaptation of Vision-Language Models: A Few Gradient Signs Are All You Need"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08800"
authors: ["Nairouz Mrabah, Ismail Ben Ayed, Mahdi S. Hosseini, Eric Granger"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08800v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

The limited supervision available for the few-shot adaptation of vision-language models makes gradient estimation particularly noisy. We find that the gradient magnitudes are severely miscalibrated, while the signs of a small top-magnitude subset remain informative. This motivates SignSparseSGD and DynSignSparseSGD, two state-free optimizers that use gradient magnitudes only to select where to update and fixed-magnitude signs to decide how to update. The static variant fixes the support after the first minibatch. The dynamic variant refreshes it at every step. Across 11 datasets, three CLIP backbones, and five shot levels, the proposed methods are competitive with or outperform parameter-efficient and optimization-based baselines on average, while exhibiting markedly lower sensitivity to long training schedules. They introduce no task-specific modules, maintain no first- or second-moment optimizer states, and use one shared configuration across datasets, backbones, and shot levels. Our code is included in the supplementary materials and will be released upon publication.
