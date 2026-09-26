---
title: "AV-GRPO: Modality-Anchored Decoupling Diffusion Reinforcement Learning for Joint Audio-Video Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.29816"
authors: ["Zhiyu Xu", "Weilong Yan", "Yufei Shi", "Shiyang Li", "Yihao Liu", "Kin-Man Lam", "Yuewen Cao"]
date: "2026-09-23T20:00:00.000Z"
score: 48
guid: "2609.29816"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.29816.png"
generated: "2026-09-26T20:22:03+05:30"
---

Recent years have witnessed major progress in joint audio-video generation. Existing models still suffer from limited per-modality fidelity, insufficient text-modality alignment and weak cross-modal synchronization. While reinforcement-learning post-training offers a promising remedy, directly adapting it to joint audio-video generation is challenging. Heterogeneous multimodal rewards entangle learning signals and complicate credit assignment. Joint optimization of two modality towers is computationally expensive given their divergent dynamics. Moreover, synchronization evaluation difficulty depends on paired samples, preventing fair reward comparisons. We propose AV-GRPO, a modality-anchored online diffusion RL framework, and 5DAV, a decoupled, difficulty-controllable training dataset. AV-GRPO includes three key modules: (1) modality-anchored rollouts to disentangle learning signals and stabilize difficulty; (2) trajectory-locked frozen-tower optimization to reduce cost and reassign credit; (3) adaptive objectives and perturbation strengths tailored to modality-specific dynamics. This converts coupled multimodal preference learning into unimodal subproblems for precise reward attribution and better synchronization. Our 5DAV dataset decouples samples across five dimensions for systematic training. Experiments on JavisBench and VABench demonstrate AV-GRPO outperforms LTX-2.3 in generation quality, semantic alignment and cross-modal synchronization under LoRA and full fine-tuning. Ablations confirm our designs. Code and data: https://github.com/zhiyuxu03/AV-GRPO
