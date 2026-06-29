---
title: "Class-frequency Guided Noise Schedule for Diffusion Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27696"
authors: ["Jiequan Cui, Beier Zhu, Qingshan Xu, Xiaojuan Qi, Bei Yu, Hanwang Zhang"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2606.27696v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27696v1 Announce Type: new Abstract: In this paper, we are the first to examine the correlations between class frequency and the multi-scale noise schedule within diffusion models. For score-based generative models, low-density regions often lead to inaccurately estimated scores, thereby compromising the generation quality. Although the multi-scale noise schedule can alleviate this issue during the diffusion process, low-frequency classes still face the challenge of large low-density regions, resulting in more inaccurate estimated scores than high-frequency classes. Furthermore, high-frequency classes tend to dominate the score space, causing a convergence of most data points towards generating samples from these classes. Consequently, samples generated within low-frequency classes exhibit suboptimal quality and limited diversity. To address this challenge, we propose the \textit{Class-frequency Guided (CFRG)} noise schedule, leveraging the insight that low-frequency classes should be endowed with larger-scale noises. To illustrate the effectiveness of our method, we conduct experiments on various tasks, including image generation, image classification, and text-to-image generation, using imbalanced datasets, \textit{i.e.}, CIFAR-100-LT, and ImageNet-LT. By employing the CFRG noise schedule, we achieve substantial improvements over baselines, manifesting the crucial role of frequency statistics in noise schedule design.
