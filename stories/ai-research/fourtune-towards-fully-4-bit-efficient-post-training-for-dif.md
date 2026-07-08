---
title: "FourTune: Towards Fully 4-Bit Efficient Post-Training for Diffusion Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05711"
authors: ["Bowen Xue, Zihan Min, Xingyang Li, Zhekai Zhang, Haocheng Xi, Lvmin Zhang, Maneesh Agrawala, Jun-Yan Zhu, Song Han, Yujun Lin, Muyang Li"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2607.05711v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05711v1 Announce Type: new Abstract: Diffusion models have become a dominant paradigm for high-quality generative modeling, while post-training is essential for adapting them to diverse downstream applications. However, post-training of large diffusion models is still challenging due to the prohibitive memory footprints and slow training speed, which existing parameter-efficient fine-tuning methods only partially address. To overcome these limitations, we propose FourTune, an efficient post-training framework for diffusion models based on an end-to-end W4A4G4 paradigm. FourTune introduces a triple-branch hybrid pipeline that augments the standard LoRA architecture with a frozen numerical stabilizer to isolate quantization-sensitive outliers, enabling stable training under native 4-bit computation. In addition, FourTune employs hardware-efficient block-wise quantization and customized fused kernels to support efficient quantized backpropagation and reduce memory bandwidth overhead. Across customization, reinforcement learning, and distillation tasks, FourTune matches the quality of full-precision fine-tuning. On FLUX.1-dev (12B), FourTune reduces memory overhead by 2.25$\times$ and increases end-to-end training throughput by 2.27$\times$ compared to BF16 LoRA.
