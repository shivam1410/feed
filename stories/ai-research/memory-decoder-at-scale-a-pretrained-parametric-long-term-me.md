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
generated: "2026-08-03T19:06:42+05:30"
---

Memory Decoder at Scale demonstrates that dedicated parametric memory modules are more efficient than scaling base models alone. A 6.9B parametric memory paired with 410M Pythia raises scores from 29.86 to 37.34, exceeding Pythia-12B (37.24) with 39% fewer total parameters. Across Qwen3 models (0.6B–14B), 1.7B domain-specific memories improved average scores by 9+ points at every scale. This approach separates long-term memory from reasoning, scaling each independently for better parameter-performance tradeoffs than monolithic scaling.
