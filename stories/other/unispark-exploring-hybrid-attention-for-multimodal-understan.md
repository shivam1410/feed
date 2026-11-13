---
title: "UniSpark: Exploring Hybrid Attention for Multimodal Understanding and Generation"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.16517"
authors: ["Jiancheng Pan", "Yuzheng Liu", "Hengyuan Cao", "Qiyuan Zhang", "Yangyan Li", "Biao Gong", "Zheng Zhang", "Ka Long Cheng", "Xinyang Wang", "Yujun Shen"]
date: "2026-11-11T19:00:00.000Z"
score: ""
guid: "2611.16517"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.16517.png"
generated: "2026-11-13T19:01:04+05:30"
---

We present UniSpark-9B, a unified multimodal model that investigates hybrid attention for visual understanding and generation. Built on a Mixture-of-Transformer-Experts backbone with approximately 9B parameters in each branch, UniSpark combines full attention for explicit token interactions with GatedDeltaNet linear attention for compact context propagation. Autoregressive text prediction and visual flow matching jointly support visual question answering, text-to-image generation, instruction-guided editing, and interleaved text-image prediction. In interleaved generation, noisy visual targets are isolated from subsequent predictions, while clean visual representations provide context for later outputs. A blockwise protocol enforces this distinction through attention masks in full-attention layers and recurrent-state retention rules in linear-attention layers. The selected training sources contain 159.7M generation samples, 213.4M understanding samples, and 624.8K interleaved sequences. A four-stage curriculum jointly trains multimodal understanding and visual generation, refining answer accuracy and instruction following while extending image synthesis to 2K. UniSpark scores 2470.3 on MME-S and 0.83 on GenEval. Qualitative examples further illustrate its capabilities in interleaved image generation, video synthesis, and video editing. Together, these results demonstrate that hybrid attention provides an effective backbone for unified multimodal understanding and generation.
