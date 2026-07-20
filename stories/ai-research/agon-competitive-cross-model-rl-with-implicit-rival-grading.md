---
title: "Agon: Competitive Cross-Model RL with Implicit Rival Grading of Reasoning"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.07690"
authors: ["Vladislav Beliaev"]
date: "2026-07-07T20:00:00.000Z"
score: 80
guid: "2607.07690"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.07690.png"
generated: "2026-07-20T19:05:49+05:30"
---

Agon introduces a training method where two AI models compete to solve problems by grading each other's reasoning. Unlike standard RL that only grades final answers, Agon has one model draft a solution while the other reads and solves it, rewarding whoever out-reasons the other. This forces reasoning to be judged implicitly without explicit process labels. On DeepMath's hard problems using Qwen3, Agon doubled the pass rate of the baseline method (GRPO), roughly eight times better than untrained ensemble approaches. The breakthrough matters because it trains models to reason more deeply rather than just writing longer solutions, and both models can improve together as they face progressively stronger rivals.
