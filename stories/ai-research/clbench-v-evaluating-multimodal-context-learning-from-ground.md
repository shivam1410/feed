---
title: "CLBench-V: Evaluating Multimodal Context Learning from Grounding to Knowledge Acquisition"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.25294"
authors: ["Lai Wei", "Chengqi Li", "Jiapeng Li", "Ruina Hu", "Yue Wang", "Weiran Huang"]
date: "2026-07-27T20:00:00.000Z"
score: 65
guid: "2607.25294"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.25294.png"
generated: "2026-07-30T19:07:10+05:30"
---

Real-world tasks often require models to learn from task-specific context rather than relying only on pre-trained knowledge. While recent work has highlighted this capability as context learning, existing evaluations mainly focus on textual contexts. In many practical settings, however, the context to be learned from is multimodal: scientific findings are conveyed through figures and tables, financial indicators are scattered across converted reports, and spatial decisions depend on maps, scenes, or web pages. We introduce CLBench-V, a benchmark for multimodal context learning that addresses the difficulty of localizing where context use breaks down by organizing tasks around three dimensions: context grounding, new information application, and new knowledge learning. CLBench-V combines converted public benchmarks with newly constructed datasets spanning domains such as science, finance, long-document understanding, spatial reasoning, and web-based visual question answering. To reduce the cost of constructing domain-specific context-learning tasks, we further use automated construction and filtering procedures for our newly built datasets. Across 3,443 instances and six recent multimodal models, the best overall score is only 0.2847, indicating that multimodal context learning remains far from saturated. Moreover, InternVL3.5-30B-A3B performs best on context grounding and new knowledge learning, while Qwen3.5-Plus performs best on new information application. We further analyze judge reliability, context length, image count, and representative failure cases. Code is available at https://github.com/IamLihua/CLBench-V.
