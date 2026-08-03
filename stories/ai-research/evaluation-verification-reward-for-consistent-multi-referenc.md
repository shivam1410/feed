---
title: "Evaluation-Verification Reward for Consistent Multi-Reference Image Editing"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.29025"
authors: ["Yingmao Miao", "Pengfei Zhang", "Xiaochen Lv", "Meng Yu", "Lei Sun", "Xiangxiang Chu", "Chao Shen", "Chenhao Lin"]
date: "2026-07-30T20:00:00.000Z"
score: 65
guid: "2607.29025"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.29025.png"
generated: "2026-08-03T19:06:42+05:30"
---

While recent image editing models have made rapid progress, multi-reference editing remains challenging, particularly in maintaining visual consistency across references and ensuring overall visual harmony. Reinforcement learning has proven highly effective for text-to-image generation and single-image editing, but its extension to multi-reference editing is hindered by the absence of suitable reward models that capture multi-image relational constraints. Moreover, naively using multimodal large language models(MLLMs) as zero-shot evaluators faces a key tension between hallucination-prone long-form reasoning and the limited deductive power of short-form judgments. We address these issues with a Multi-dimensional Evaluation-Verification Reward(EVR). EVR decomposes evaluation into distinct visual criteria; for each criterion, an MLLM Evaluator generates multiple candidate hypotheses, and a Verifier grounds each claim in concrete visual evidence to accept or reject it, producing reliable and fine-grained reward signals. Together with a scalable data pipeline, our method enables RL fine-tuning of off-the-shelf editors without architectural changes. Extensive experiments show substantial gains over the base Qwen-Image-Edit, improving consistency and harmony to match or surpass NanoBanana.
