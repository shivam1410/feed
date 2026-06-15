---
title: "VIA-SD: Verification via Intra-Model Routing for Speculative Decoding"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.12243"
authors: ["Yuchen Xian", "Yang He", "Yunqiu Xu", "Yi Yang"]
date: "2026-06-09T20:00:00.000Z"
score: 82
guid: "2606.12243"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.12243.png"
generated: "2026-06-15T19:06:44+05:30"
---

VIA-SD introduces a multi-tier speculative decoding framework that accelerates language model inference by using smaller slim submodels to validate tokens with medium confidence, reducing expensive verification operations. Speculative decoding typically uses a single draft model; this work routes tokens to appropriately-sized verification models based on confidence levels. Intra-model routing uses components within the same larger model, reducing overhead compared to deploying multiple separate models. The approach achieves significant speedups over traditional speculative decoding methods, addressing a key bottleneck in LLM inference.
