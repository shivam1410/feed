---
title: "Lost in the Hallway: Benchmarking Persistent Spatial Memory Across Revisits"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.21485"
authors: ["Henry Zheng", "Weibo Gong", "Yang Yue", "Rui Huang", "Yang Zhang", "Gao Huang"]
date: "2026-11-15T19:00:00.000Z"
score: 45
guid: "2611.21485"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.21485.png"
generated: "2026-11-23T19:04:08+05:30"
---

Persistent spatial understanding is essential for embodied agents to operate reliably in environments they repeatedly encounter. It requires recognizing revisited places despite viewpoint changes, distinguishing them from similar-looking rooms, and updating memories as environments change. Yet existing evaluations often leave physical place identity across separated visits implicit. We introduce ReSpaceBench, a benchmark comprising 3,244 questions across 590 synthetic and real-home scenes, organized into 9 tasks spanning room association, persistent state tracking, and downstream reasoning. Controlled walkthroughs define visits by physical room entry and deliberately include same-type room distractors and cross-session object changes. Our evaluation of 32 models and 3 agentic video-understanding frameworks reveals substantial limitations: the strongest evaluated zero-shot model achieves 50.5% overall accuracy and 52.2% on a 450-question subset, compared with 90.1% for human annotators. The evaluated agentic frameworks offer no overall improvement over direct inference with the same base model. Analysis of agent execution traces reveals evidence omissions and incorrect cross-visit room associations as major failure modes, suggesting that iterative evidence seeking alone does not ensure consistent spatial memory. Further analyses expose a gap between recognizing familiar rooms and identifying the correct visited room, while annotation-guided sampling highlights the importance of preserving intervening visits and transitions. We also provide RS-30K, a separate training dataset from synthetic sources with no template, scene, route, or video overlap with the benchmark. Fine-tuning Qwen3-VL-8B raises overall accuracy from 35.5% to 60.4%, with the largest gains in association and improvements extending to real-life scenes.
