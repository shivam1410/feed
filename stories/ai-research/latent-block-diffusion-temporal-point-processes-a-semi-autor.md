---
title: "Latent Block-Diffusion Temporal Point Processes: A Semi-Autoregressive Framework for Asynchronous Event Sequence Generation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24982"
authors: ["Shuai Zhang, Yancheng Chen, Chuan Zhou, Yang Liu, Xixun Lin, Xiangyu Zhao, Jun Zhu, Zhi-Ming Ma"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.24982v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24982v1 Announce Type: new Abstract: Modeling and sampling from the underlying distribution of asynchronous event sequences are crucial in various real-world applications, including social networks, medical diagnosis, and financial transactions. Existing autoregressive methods suffer from error accumulation during multi-step generation, while non-autoregressive diffusion methods are typically limited to fixed-length output sequences. In this paper, we propose Latent Block-Diffusion Temporal Point Processes (LBDTPP), a novel semi-autoregressive TPP framework that introduces a latent block diffusion mechanism for high-quality and variable-length event sequence generation. The core idea is to define an autoregressive probability distribution over event blocks in latent space and perform Gaussian diffusion within each block. By sequentially generating blocks while simultaneously sampling events in each block, LBDTPP preserves the length flexibility of autoregressive TPPs and inherits the parallel high-quality generation capability of diffusion models. Theoretically, we derive Wasserstein error bounds showing that, under suitable local approximation and prefix-stability assumptions, block-wise generation can reduce error accumulation compared with event-wise autoregressive generation. Extensive experiments on six real-world benchmark datasets demonstrate that LBDTPP outperforms state-of-the-art TPP baselines in both unconditional and conditional generation tasks. Further empirical analyses verify the benefits of latent-space diffusion and block-wise generation, and reveal the trade-off between generation quality and block size. Our code is available at https://github.com/Zh-Shuai/LBDTPP.
