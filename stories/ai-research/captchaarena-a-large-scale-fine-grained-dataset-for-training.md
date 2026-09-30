---
title: "CaptchaArena: A Large-Scale, Fine-Grained Dataset for Training Computer-Use Agents on Interactive CAPTCHAs"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.31957"
authors: ["Zhenhao Zhang", "Zhaoyu Fan", "Haohan Ying", "Jingwen Hu", "Hancen Fan", "Junhao Zhou", "Zitian Chen", "Linchao Zhu"]
date: "2026-09-25T16:04:24.000Z"
score: 78
guid: "2609.31957"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.31957.png"
generated: "2026-09-30T19:08:55+05:30"
---

Interactive CAPTCHAs remain challenging for computer-use agents, while existing datasets face trade-offs among type coverage, interaction fidelity, and trajectory supervision. To address these gaps, we present CaptchaArena, the first large-scale, fine-grained training dataset for interactive CAPTCHA solving. It contains 50K puzzles across 20 CAPTCHA types and 5 interaction modes, with every solution verified through execution. CaptchaArena provides 50K screenshot-action trajectories, including 46K with step-by-step reasoning annotations. It also includes fine-grained pixel-mask annotations for irregular targets. Using CaptchaArena, we train CaptchaAgent, a single 9B policy for all 20 CAPTCHA types, with supervised fine-tuning followed by reinforcement learning. The environment verifier directly provides the RL reward. Supervised fine-tuning reaches 70.5 Pass@1, and reinforcement learning further improves it to 71.7, while also improving performance on two external benchmarks. These results demonstrate the value of large-scale, fine-grained computer-use supervision for training interactive CAPTCHA agents. We release CaptchaArena and CaptchaAgent at https://github.com/X0X0X00/CaptchaArena.
