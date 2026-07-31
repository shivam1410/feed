---
title: "Memory Decoder at Scale: A Pretrained, Parametric Long-Term Memory"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.27919"
authors: ["Rubin Wei", "Jiaqi Cao", "Jiarui Wang", "Junming Zhang", "Qipeng Guo", "Bowen Zhou", "Zhouhan Lin"]
date: "2026-07-29T20:00:00.000Z"
score: 80
guid: "2607.27919"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.27919.png"
generated: "2026-07-31T19:06:14+05:30"
---

External memory modules dedicated to long-term storage are more parameter-efficient than scaling base model size. Researchers scaled memory-augmented models to 6.9B parameters on 300B tokens, pairing a 6.9B memory module with Pythia-410M to achieve 37.34 average benchmark score, outperforming Pythia-12B (37.24) with 39% fewer total parameters. This demonstrates that allocating compute to independent memory storage yields better performance-per-parameter than expanding the core transformer alone.
