---
title: "Rollout-Marginal Distillation for Long-Horizon Autoregressive Video Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.37925"
authors: ["Chenjian Gao", "Zhihao Hu", "Jianqi Ma", "Jun Zhang", "Weidong Zhang", "Tianfan Xue"]
date: "2026-09-28T20:00:00.000Z"
score: 68
guid: "2609.37925"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.37925.png"
generated: "2026-10-05T19:10:08+05:30"
---

Autoregressive (AR) video diffusion enables low-latency, streamable video generation, but prediction errors often accumulate over long rollouts. Training the generator on its own rollouts exposes it to these imperfect histories. However, existing video-level distribution matching distillation (DMD) scores the whole rollout jointly. Because a chunk is evaluated together with its past and future, its correction can favor matching artifacts in the surrounding context merely to preserve temporal consistency. To provide a clearer visual-quality signal, we introduce Rollout-Marginal Distillation (RMD). RMD retains the generated history for AR prediction but scores each chunk independently against a chunk teacher, ensuring its quality correction is not compromised by an imperfect temporal context. To compensate for the lack of temporal context in independent chunk scoring, RMD subsequently applies video-level DMD to restore temporal coherence. Extensive experiments demonstrate that RMD maintains high visual quality far beyond its training horizon and outperforms video-level DMD baselines. Code and video results are available at https://cjeen.github.io/RMD
