---
title: "UFO: Chain-of-Evaluation for Omni-Condition Alignment in Multi-Modal Image Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.12397"
authors: ["Danning Zhang", "Yijing Lin", "Shuhan Zhuang", "Mengqi Huang", "Shaojin Wu", "Shancheng Fang", "Zhendong Mao"]
date: "2026-09-16T20:00:00.000Z"
score: 62
guid: "2609.12397"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.12397.png"
generated: "2026-09-21T19:05:57+05:30"
---

Multi-modal image generation, particularly subject-driven customization, has garnered growing attention in recent years. Despite the rapid advancement of generative models, their evaluation remains largely lagging. Existing methods, whether embedding-based or Multi-modal Large Language Model (MLLM)-based, evaluate alignment with each modal condition in isolation, which contradicts the simultaneous condition alignment objective of multi-modal image generation, leading to poor consistency with human judgments. To address this challenge, we propose UFO, the first unified framework for omni-condition alignment simultaneous evaluation. Specifically, UFO introduces a novel Atomized Chain-of-Evaluation paradigm, i.e., it first decomposes omni-condition alignment into a sequential chain of fine-grained, disentangled Atomic Evaluation Units (AEUs), categorizes them into distinct modality-relevance classes, and then employs general or dedicated functional calls for accurate verification of different AEU types. Experimental results demonstrate that UFO achieves the highest correlation with human evaluation preferences, delivering an average improvement of 15.25%. Furthermore, we present UFO-Bench, a dedicated benchmark designed to holistically evaluate the performance of existing customization models under the diverse mutual interactions of textual and visual conditions.
