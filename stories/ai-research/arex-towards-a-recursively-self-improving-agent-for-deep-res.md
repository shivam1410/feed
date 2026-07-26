---
title: "AREX: Towards a Recursively Self-Improving Agent for Deep Research"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.21461"
authors: ["Shuqi Lu", "Chaofan Li", "Kun Luo", "Zhang Zhang", "Hui Wang", "Hongwang Xiao", "Zheng Liu", "Lei Xiong", "Jiahao Wang", "Sen Wang", "Xiyan Jiang", "Wanli Li", "Yuyang Hu", "Hongjin Qian", "Bingyu Yan", "Ziyi Xia", "Yingxia Shao", "Kang Liu", "Zhicheng Dou", "Di He", "Chaozhuo Li", "Qiwei Ye", "Zhongyuan Wang", "Zheng Liu"]
date: "2026-07-22T20:00:00.000Z"
score: 85
guid: "2607.21461"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.21461.png"
generated: "2026-07-26T22:35:53+05:30"
---

AREX introduces recursively self-improving research agents that alternate between evidence-gathering inner loops and constraint-auditing outer loops to iteratively refine answers. Rather than just searching longer, the system verifies intermediate results and uses partially verified states to guide follow-up research. A learnable context-update tool compresses interaction history into compact improvement states without external models. Trained via agentic mid-training and long-horizon RL on a 4B model and 122B MoE model, AREX addresses the fundamental asymmetry in research: discovering answers is costly while verifying candidate solutions can be decomposed into tractable checks. This approach enables agents to conduct deep research more efficiently by leveraging verification to direct discovery.
