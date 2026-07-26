---
title: "OpenForgeRL: Train Harness-native Agents in Any Environment"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.21557"
authors: ["Xiao Yu", "Baolin Peng", "Ruize Xu", "Hao Zou", "Qianhui Wu", "Hao Cheng", "Wenlin Yao", "Nikhil Singh", "Zhou Yu", "Jianfeng Gao"]
date: "2026-07-22T20:00:00.000Z"
score: 80
guid: "2607.21557"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.21557.png"
generated: "2026-07-26T22:35:53+05:30"
---

OpenForgeRL enables training of harness-native AI agents end-to-end using standard RL infrastructure. The framework decouples training from inference harnesses (like Claude Code and OpenClaw) by proxy-serving model calls as training data. A Kubernetes orchestrator runs rollouts in remote containers. On diverse benchmarks: OpenForgeClaw reaches 31.7 and 55.9 pass@3 on ClawEval, 33.7 on QwenClawBench; OpenForgeGUI achieves 37.7 on OSWorld-Verified, 63.0 on Online-Mind2Web, 72.3 on WebVoyager. Both outperform open baselines of comparable size, approaching proprietary system performance with hundreds to thousands of tasks.
