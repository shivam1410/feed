---
title: "Demystifying On-Policy Distillation: Roles, Pathologies, and Regulations"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.13399"
authors: ["Rui Wang", "Hongru Wang", "Yi Chen", "Boyang Xue", "Tianqing Fang", "Wenhao Yu", "Kam-Fai Wong"]
date: "2026-07-14T20:00:00.000Z"
score: ""
guid: "2607.13399"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.13399.png"
generated: "2026-07-19T19:52:10+05:30"
---

On-policy distillation (OPD) has become a key paradigm in LLM post-training, yet its training dynamics remain poorly understood. We present a systematic study examining the role, pathologies, and regulations of OPD. We first clarify the role of OPD as an exploration catalyst: it steers the student toward correct reasoning paths via dense token-level guidance, without expanding capability ceiling. We confirm this by showing that prompt diversity matters more than per-problem sampling numbers, and critically, that the effectiveness of OPD hinges entirely on the quality of its guiding signal. This dependency exposes two pathologies that derail exploration. The Student-Teacher Mismatch occurs when a large teacher-student distributional gap causes the guiding signal to misalign with task correctness, steering exploration in counterproductive directions. Length Exploitation arises when the aggregated token-level objective creates length-dependent shortcuts, allowing the student to game the reward landscape through response truncation or redundant padding, exploring degenerate length modes rather than reasoning strategies. To tame these pathologies, we investigate lightweight signal regulations: advantage clipping and log-scale compression, ensuring exploration is guided by faithful signals. Experiments across seven benchmarks demonstrate that these regulations alleviate length exploitation and enable effective distillation, stably surpassing OPD variants and RLVR baselines, thereby confirming that well-regulated signal quality, rather than mere teacher scale, governs successful exploration in OPD.
