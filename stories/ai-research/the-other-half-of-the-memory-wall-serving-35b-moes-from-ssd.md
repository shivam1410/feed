---
title: "The Other Half of the Memory Wall: Serving 35B MoEs from SSD with Trained Routing Prediction"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.18063"
authors: ["Yu Lin", "Yiming Wang", "Runyuan Cai", "Hanze Liu", "Xiaodong Zeng"]
date: "2026-09-15T20:00:00.000Z"
score: 65
guid: "2609.18063"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.18063.png"
generated: "2026-09-19T19:06:02+05:30"
---

Mixture-of-experts (MoE) inference on consumer hardware is bounded by weight memory: a 35B-class model is 19.5GB at 4-bit, and sparsity shrinks the compute per token, not the bytes that must be held. Naive offloading to SSD does not help on its own, because layer N+1's experts must be chosen before layer N's output exists, so the reads cannot start early enough to hide behind compute. We present Edge0, a streaming MoE inference engine that closes the gap with a prerouter: a per-layer head predicts the next layer's routing one token ahead, and the prediction is consumed as the routing itself, so the staged expert set equals the routed set and nothing is dropped. An unmerged recovery LoRA, trained on the student path, pays back the quality lost to int4 quantization and routing replacement. On a single 24GB machine, Edge0
  serves a 35B MoE at 20tok/s inside 3GiB of peak active memory, within a few points of its fp16 teacher on average across five public benchmarks. An 8B tier runs on the same framework, and the framework, checkpoints, and adapters are open source.
