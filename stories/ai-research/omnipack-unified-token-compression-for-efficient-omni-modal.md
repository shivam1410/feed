---
title: "OmniPack: Unified Token Compression for Efficient Omni-modal Large Language Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.03812"
authors: ["Wanshun Su", "Yang Shi", "Feihu Liu", "Ziwen Yu", "Yan Min", "Zhuoran Zhang", "Qixun Wang", "Haotian Wang", "Shixuan Liu", "Yuanxing Zhang", "Peng Wu", "Chengfu Huo", "Liang Ding"]
date: "2026-08-03T20:00:00.000Z"
score: 70
guid: "2608.03812"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.03812.png"
generated: "2026-08-05T20:00:21+05:30"
---

Omni-modal large language models (Omni-LLMs) have achieved remarkable performance on audio-visual understanding tasks, but processing long and highly redundant visual and audio token sequences incurs substantial computational overhead, demanding aggressive token compression for efficient deployment. Existing methods often degrade at low token budgets: pre-LLM compression may discard structurally important and globally distributed evidence, whereas inner-LLM compression often underexploits query-conditioned audio-visual collaboration. To address these limitations, we propose OmniPack, a training-free framework that coordinates structural compression before the LLM with task-relevant semantic refinement within the LLM. Before the LLM, OmniPack removes structural redundancy through modality-specific importance, global coverage, and similarity-aware merging. After sufficient multimodal interaction, it further consolidates diverse, task-relevant representations through textual guidance and audio-visual collaboration. Extensive experiments on five benchmarks with three Omni-LLM backbones demonstrate that OmniPack consistently achieves the best performance-efficiency trade-off across diverse retention ratios, outperforming all existing methods. Notably, on Qwen2.5-Omni-7B, OmniPack preserves 98.0% of the original performance while reducing FLOPs to 16.7%, and still retains 92.9% of the original performance with only 6.8% of the original FLOPs.
