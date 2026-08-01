---
title: "MemHarness: Memory Is Reconstructed, Not Replayed"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.28272"
authors: ["Rong Wu", "Daocheng Fu", "Licheng Wen", "Xuemeng Yang", "Shu Zou", "Jianbiao Mei", "Yuxin Wang", "Hairong Zhang", "Yu Yang", "Tao Hu", "Cong Zhang", "Botian Shi", "Pinlong Cai"]
date: "2026-07-29T20:00:00.000Z"
score: 75
guid: "2607.28272"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.28272.png"
generated: "2026-08-01T19:05:30+05:30"
---

Retrieving past experiences has become a common strategy to enhance large language model agents. However, most existing memory-augmented agents treat retrieved experiences as static records to be replayed verbatim, injecting them into the context regardless of whether they align with the agent's current situation. This ``replay'' paradigm ignores the gap between the abstract, general nature of stored experience and the concrete, ever-changing states encountered at decision time, frequently causing negative transfer. In contrast, humans rarely recall past experiences verbatim; instead, they reorganize and adapt retrieved memories to fit the present context. Inspired by this, we propose MemHarness, a framework that equips LLM agents to actively harness and reconstruct past experiences based on the present context. At each decision step, a unified policy model critiques and reconstructs the retrieved experience conditioned on the current state, producing context-grounded guidance before acting. This reconstructive ability emerges naturally through end-to-end training with GRPO. Experiments on ALFWorld and WebShop show that MemHarness substantially outperforms pure RL and static memory-augmented baselines, demonstrating strong robustness in out-of-distribution (OOD) scenarios. Furthermore, our analyses reveal that this reconstruction objective not only prevents negative transfer but also serves as latent guidance during training, fundamentally improving the agent's intrinsic reasoning capabilities.
