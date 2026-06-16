---
title: "Towards a Unified Generative Model for Scarce Time Series with Domain Experts"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.15172"
authors: ["Zihao Yao, Qi Zheng, Jiankai Zuo, Yaying Zhang"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.15172v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.15172v1 Announce Type: new Abstract: Synthesizing realistic time series with generative models has wide-ranging applications in real-world scenarios. Despite recent progress, most existing methods are trained under the assumption of abundant training data, which substantially limits their effectiveness in data-scarce settings. In this paper, we propose TimeMoDE, a novel framework that integrates Diffusion Transformers with Mixture-of-Experts to exploit both domain adaptability and diffusion-stage awareness for time series generation under data scarcity. It is pre-trained on a large-scale collection of multi-domain datasets to extract domain-agnostic temporal representations and domain-specific information benefiting generalization during fine-tuning. We propose Domain Prompts to condition expert assignment for indistinguishable noised tokens, mitigating the limitations of capturing inter-dataset relationships. Moreover, we incorporate diffusion timestep signals to equip the experts with awareness of time series degradation variations, facilitating adaptive calibrate to stage-dependent denoising requirements. Extensive experiments demonstrate that TimeMoDE outperforms existing methods under diverse low-data settings. It establishes an innovative paradigm for advanced time series few-shot generation.
