---
title: "ViRA: Toward Ultra-High-Resolution Visual Agents via Cross-Input Relative Policy Optimization"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.21605"
authors: ["Huawei Lin", "Jinting Liu", "Tongyan Wang", "Xuyang Chen", "Ruihua Shi", "Zhichao Xu", "Jiaxin Qin", "Guoshenghui Zhao", "Baijian Yang", "Yingjie Victor Chen", "Tan Yu", "Weijie Zhao"]
date: "2026-11-15T19:00:00.000Z"
score: ""
guid: "2611.21605"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.21605.png"
generated: "2026-11-18T19:12:26+05:30"
---

Visual agents answer questions about ultra-high-resolution photos by zooming into the relevant regions. However, existing agents often answer from common sense instead of reading the evidence. Reinforcement learning (RL) on the final answer cannot correct this, because a guess earns the same reward as reading. We propose Cross-Input Relative Policy Optimization (CrossRPO), which trains agents on contrast sets. A contrast set asks one question about several versions of an image that differ only in a small region with the evidence and have different answers, so only reading the evidence solves the whole set. CrossRPO rewards solving the whole set, and we prove that it does not reinforce a set answered from common sense. We build contrast sets for training (ViRA-Train) and evaluation (ViRA-Bench) by editing one small object in images of 21 to 120 megapixels, and we photograph further sets with real changes (ViRA-Bench-Real) to exclude editing traces. We train two Visual Reasoning Agents, ViRA-9B and ViRA-27B, with CrossRPO on only about 3,500 items of ViRA-Train each. CrossRPO achieves 63.3% set accuracy on ViRA-Bench at the maximum resolution, against 59.3% for GRPO. ViRA-9B is the most accurate open model of its size on all benchmarks, and ViRA-27B outperforms Claude Haiku 5.5 and GPT-6-Luna, both at their highest thinking level, on most benchmarks.
