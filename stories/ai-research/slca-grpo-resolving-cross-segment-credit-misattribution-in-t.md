---
title: "SLCA-GRPO: Resolving Cross-Segment Credit Misattribution in Tool-Calling RL"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.29050"
authors: ["Yan Zhan", "Shaobo Liu", "Qiunan Liu", "Yuanjun Shi", "Siqi Xu", "WeiYi Hou", "Xiang Xu", "Zekang Li", "Weizhou Pan", "Jiahong Yan"]
date: "2026-09-23T20:00:00.000Z"
score: 84
guid: "2609.29050"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.29050.png"
generated: "2026-09-28T20:49:59+05:30"
---

Tool-calling agents produce mixed output: structured tool invocations plus summaries. Standard RL treats all tokens equally, so gradient noise from summaries leaks into tool decisions. SLCA-GRPO fixes this by routing different rewards to different segments. It outperforms standard GRPO by 2.53 percentage points on in-domain tasks. This matters because it improves how we train agents that juggle code and language simultaneously.
