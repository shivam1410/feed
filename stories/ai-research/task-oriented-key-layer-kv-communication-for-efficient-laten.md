---
title: "Task-Oriented Key-Layer KV Communication for Efficient Latent Multi-Agent Collaboration"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.08820"
authors: ["Dongsen Zhang, Peipei Li, Zekun Li, Wenjun Xu"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 78
guid: "oai:arXiv.org:2610.08820v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Large language model-based multi-agent systems improve complex problem solving through collaboration, while latent communication directly transmits model internal states to avoid the high inference costs of natural language. However, existing KV-based latent communication methods prioritize sender-side state fidelity, leading to substantial communication and computation overhead and potentially introducing redundant information. To address these limitations, we revisit latent communication from a task-oriented perspective, shifting its objective from sender-side state fidelity to receiver-side task sufficiency. Under this formulation, we propose KITE, a training-free framework for task-oriented key-layer KV communication. KITE identifies a task-effective key layer using a receiver trajectory distortion criterion, transmits only the latent working memory associated with the key layer, and further uses the same layer as the entry point for autoregressive latent reasoning. Experiments on seven benchmarks across two model families and three model scales show that, compared with full-layer KV communication, KITE reduces communication volume by 28-36$\times$, achieves up to 3$\times$ end-to-end inference speedup, and improves accuracy by up to 23.3 percentage points.
