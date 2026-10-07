---
title: "NeMo-DCR: Bit-Exact Delta-Compressed Refit for Scalable Agentic RL at Trillion-Parameter Scale"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.08430"
authors: ["Songlin Jiang", "Zhiyu Li", "Terry Kong", "Yu Yao", "Youngeun Kwon", "Bernard Nguyen", "Ashwath Aithal", "Mario Di Francesco"]
date: "2026-10-05T20:00:00.000Z"
score: 75
guid: "2610.08430"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.08430.png"
generated: "2026-10-07T19:11:01+05:30"
---

Compresses trillion-parameter model syncs by sending only weight changes, yet achieves bit-exact results identical to full transfer. Only 1% of weights change per step, slicing sync time from 87.5 minutes. Matters because agentic RL requires frequent policy transfer between clusters, and synchronization becomes the critical bottleneck at trillion scale.
