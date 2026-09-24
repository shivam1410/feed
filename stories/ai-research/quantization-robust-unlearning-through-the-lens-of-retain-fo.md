---
title: "Quantization-Robust Unlearning through the Lens of Retain-Forget Loss Landscapes Interaction"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.27355"
authors: ["Jialu Wang, Jianing Deng, Shuqing Luo, Yuanzhe Li, Dongwei Wang, Jingtong Hu, Huanrui Yang, Song Wang, Tianlong Chen"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.27355v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.27355v1 Announce Type: new Abstract: Unlearning ensures LLM compliance by removing the influence of private or copyrighted training data. However, since LLM models typically undergo post-training compression, like quantization, in practical deployment, it has been observed that the unlearning effect can be substantially weakened, with the forgetting behavior degrading more severely than that of model utility. This paper proposes a quantization-robust unlearning framework that makes forgetting robust to quantization while maintaining overall model utility. We analyze this gap through the lens of loss landscape. Specifically, our analysis reveals a curvature-based criteria that pinpoints sensitive weights in the unlearned model that leads to both non-robust forgetting and reduced utility. We therefore propose sensitivity-guided noisy regularization, which is applied on the sensitive parameters to steer the model convergence towards a smoother minima of uniformly low forget and retain losses. Balancing unlearning and utility, we further propose forget-critical optimization, which updates only forget-critical layers, preserving most of the network to retain useful knowledge. Extensive experiments on the MUSE and TOFU benchmarks across multiple LLM unlearning algorithms show that our approach achieves substantially more quantization-resilient forgetting while maintaining utility.
