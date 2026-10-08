---
title: "ReSAIL: Mitigating Collapse in Iterative Agent Self-Distillation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.39306"
authors: ["Shengjie Jin", "Hengbo Xu", "Zelong Sun", "YuJie Guo", "Zhiwu Lu"]
date: "2026-09-29T20:00:00.000Z"
score: 90
guid: "2609.39306"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.39306.png"
generated: "2026-10-08T19:08:02+05:30"
---

When agents learn from their own deployments across multiple rounds, performance collapses. ReSAIL prevents this by selecting informative steps where prior knowledge most changes predictions and preserving prior knowledge conditions as the agent evolves. On ALFWorld and TextCraft across three training cycles, ReSAIL added 22.5% average improvement to self-distillation baselines. This enables genuine recursive self-improvement where agents keep getting better, not worse.
