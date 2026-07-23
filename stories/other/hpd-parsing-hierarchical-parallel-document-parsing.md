---
title: "HPD-Parsing: Hierarchical Parallel Document Parsing"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.18839"
authors: ["Shu Wei", "Jingjing Wu", "Lingshu Zhang", "Qunyi Xie", "Hao Zou", "Le Xiang", "Xu Fan", "Yangliu Xu", "Manhui Lin", "Xiaolong Ma", "Cheng Cui", "Tengyu Du", "YY"]
date: "2026-07-20T20:00:00.000Z"
score: ""
guid: "2607.18839"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.18839.png"
generated: "2026-07-23T04:03:36+05:30"
---

Efficient teamwork typically combines global coordination with parallel execution, a principle not yet fully reflected in unified Vision-Language Model (VLM)-based document parsers. Existing unified parsers process an entire page jointly but generate its output through a single token-by-token autoregressive trajectory, creating a sequential bottleneck that grows with document length. Such full-page sequential generation overlooks a key property of document parsing: layout must be analyzed globally, whereas block content can be parsed in parallel. Based on this observation, we introduce HPD-Parsing, which replaces full-page autoregressive generation with a Hierarchical Parallel Decoding paradigm. A main layout branch organizes the overall document structure and dynamically assigns block-level content decoding to concurrent branches, while progressive multi-token prediction (P-MTP) further reduces the decoding steps within each branch. Experiments on public benchmarks show that HPD-Parsing achieves 4,752 tokens per second, delivering 2.62times the throughput of the fastest existing document parsing model and 3.06times that of the vanilla autoregressive baseline, while maintaining competitive parsing accuracy. These results establish hierarchical parallel decoding as an effective alternative to full-page autoregressive generation, opening a new direction for efficient unified document parsing.
