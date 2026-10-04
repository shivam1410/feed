---
title: "OneStreamer: Unifying Perception, Memory, and Proactive Response in Streaming Video Interaction"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.01762"
authors: ["Xiangyu Zeng", "Yuandong Yang", "Zhiqiu Zhang", "Yuhan Zhu", "Xinhao Li", "Qingyi Si", "Dingyu Yao", "Changlian Ma", "Haoran Chen", "Xinyu Chen", "Yansong Shi", "Junhao Zhou", "Yifei Li", "Jun Zhang", "Chuanyu Qin", "Chenxu Yang", "Xinlei Yu", "Kun Ouyang", "Yuchen Shao", "Qianshan Wei", "Changhai Zhou", "Jun Gao", "Jiaqi Wang", "Limin Wang"]
date: "2026-09-30T20:00:00.000Z"
score: 72
guid: "2610.01762"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.01762.png"
generated: "2026-10-04T19:07:43+05:30"
---

Streaming video LLMs must retain evidence before its relevance to future tasks is known and respond when sufficient evidence becomes available. The challenge is to form reusable factual memory without compromising real-time perception. We introduce OneStreamer, which jointly learns query-independent evidence recording and task response through a shared proactive generation process. Its Proactive Hierarchical Caption Memory (PHCM) produces time-grounded local-detail captions and summaries of completed events. Streaming caption targets supervise the interpretation of observed video prefixes during training. At inference, model-generated records complement a recent visual window, providing reusable factual context without revisiting historical visual features. Proactive State Transition Learning (PSTL) reduces the dominance of repeated waiting states by preserving supervision at all output anchors and selecting representative state-change and state-persistence tokens. We further develop a streaming data synthesis pipeline that aligns output content and timing with available evidence. Combining the resulting streaming captions and QA with cleaned open-source data yields OneStreamer-1M, a broad-coverage streaming video interaction dataset with over one million records spanning diverse tasks. Our 4B model achieves the best results among the compared methods across all eight evaluated streaming video understanding benchmarks. Ablations show that retaining generated captions improves historical QA without degrading real-time perception. PSTL also outperforms dense state supervision while supervising only 27.5% of annotated state tokens. Together, these results support proactive generation as a shared learning interface connecting perception, memory formation, and timely response in streaming video interaction.
