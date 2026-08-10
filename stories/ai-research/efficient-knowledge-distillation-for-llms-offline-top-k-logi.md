---
title: "Efficient Knowledge Distillation for LLMs: Offline Top-K Logits and a Fused Chunked KL Loss"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.03796"
authors: ["Bakbergen Ryskulov", "Iker García-Ferrero", "David Montero", "David Jansen", "Ali Hashemi", "Jezabel R. Garcia", "Antonio Tiene", "Román Orús"]
date: "2026-08-03T20:00:00.000Z"
score: 60
guid: "2608.03796"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.03796.png"
generated: "2026-08-10T19:05:52+05:30"
---

Small language models are often the only option for deployment under tight latency, cost, and on-premises constraints, but they are rarely trained from scratch: a compressed model is usually recovered through knowledge distillation (KD). This recovery step largely decides the final quality, yet it is expensive. We present a practitioner's study of how to make distillation training efficient, organised around two systems contributions. First, we show that offline KD (caching the teacher's top-K logits once and training the student against the cache) matches online distillation at near-identical training loss while removing the teacher from memory, running about 29\% faster per iteration, and reaching up to 41\% higher throughput on a single H200 GPU. Second, we introduce a fused, chunked KL loss that never materialises the full vocabulary-sized logit tensor, making peak memory linear in the sequence length. This removes the memory spike that otherwise caps context length and lets us train at four times the context (32{,}768 tokens) on a single GPU. A separate output-head-only toy benchmark isolates the loss kernel and confirms its memory and iteration-rate scaling from 4K to 256K tokens. Together these make large-scale healing and hundreds of ablations affordable. We also report supporting ablations on loss design and sequence packing. We release our chunked-loss implementation: https://github.com/CompactifAI/Full-Chunked-KL-Loss.
