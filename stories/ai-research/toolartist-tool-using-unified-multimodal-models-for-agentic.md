---
title: "ToolArtist: Tool-Using Unified Multimodal Models for Agentic Image Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.04436"
authors: ["Jiahao Zhao", "Xiaomin Yu", "Zhongxiang Sun", "Fengwei Teng", "Chengwei Qin", "Xiaobin Hu", "Jun Xu", "Shuicheng Yan"]
date: "2026-08-04T20:00:00.000Z"
score: 70
guid: "2608.04436"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.04436.png"
generated: "2026-08-06T19:05:18+05:30"
---

Text-to-image (T2I) models can produce visually compelling images, yet they remain limited on open-world tasks that require complex semantic understanding, multi-step reasoning, and the integration of external world knowledge. Existing efforts introduce agent capabilities into image generation, but they either prescribe a fixed workflow or place only a subset of the open-world image generation process under agent control. Consequently, reasoning, tool invocation, and image generation are not coordinated by a single policy. We propose ToolArtist, a fully agentic image generation model obtained by post-training a Unified Multimodal Model (UMM). ToolArtist dynamically orchestrates reasoning, external tool use, and native image generation within one unified policy. During Supervised Fine-Tuning (SFT), we equip a teacher agent with search tools alongside an image-generation tool. We then convert the collected trajectories into a UMM compatible format, where the image-generation tool is concealed while the resulting generated images are retained. During Reinforcement Learning (RL), we develop an agentic RL infrastructure for UMMs and introduce Reason-Act-Draw GRPO (RAD-GRPO), which uses complementary intent and quality rewards to jointly optimize the model. Experiments show that placing the entire open-world image-generation process under an agent policy consistently outperforms approaches with fixed pipelines or only partially agent-controlled components. We release the training data and the complete post-training infrastructure.
