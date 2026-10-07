---
title: "SlimWise: Decoupling Expert Pruning Across Prefill and Decode for Efficient MoE Serving"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.34117"
authors: ["Gunho Park", "Kyoungho Jeun", "Juntaek Oh", "Byeongjun Shin", "Baeseong Park", "Minsoo Rhu"]
date: "2026-09-27T20:00:00.000Z"
score: 45
guid: "2609.34117"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.34117.png"
generated: "2026-10-07T19:11:01+05:30"
---

Mixture-of-experts (MoE) models activate few experts per token, yet batched decoding can access nearly the entire expert pool, making expert-weight traffic a major bottleneck. Expert pruning reduces this traffic, but conventional approaches also prune compute-bound prefill, sacrificing model quality for little throughput benefit. We present SlimWise, a serving framework that tailors the expert pool to each inference phase. SlimWise performs prefill with the full model and decode with a pruned model that directly reuses the prefill-generated KV cache without conversion. Across two MoE backbones and three pruning criteria, this training-free KV cache handoff substantially narrows accuracy gaps relative to the full model in many settings. We also show that benchmark accuracy can conceal substantial pruning-induced changes in generation length. To address these distortions and residual accuracy loss, SlimWise introduces a low-cost distillation stage that trains the decoder to continue from full-model KV caches while updating only a small subset of parameters. Implemented in vLLM, SlimWise supports both prefill-decode (PD) disaggregation and PD-colocated serving. On Qwen3.6-35B-A3B, SlimWise improves decode throughput by up to 1.81x at 50% expert pruning with minimal accuracy loss.
