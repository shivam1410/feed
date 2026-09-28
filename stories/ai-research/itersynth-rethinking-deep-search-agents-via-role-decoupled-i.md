---
title: "IterSynth: Rethinking Deep Search Agents via Role-Decoupled Iterative Synthesis"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.29444"
authors: ["Xingyu Wu", "Yuchen Yan", "Zhengxi Lu", "Siqi Chen", "Xin ZHANG", "Aiting Liu", "Chao Deng", "Jie Liu", "Jin Ma", "Jian Shao", "Jun Xiao", "Yongliang Shen"]
date: "2026-09-23T20:00:00.000Z"
score: 79
guid: "2609.29444"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.29444.png"
generated: "2026-09-28T20:49:59+05:30"
---

IterSynth replaces single-policy ReAct agents with separate Planner and Synthesizer roles that alternate. The Synthesizer maintains a persistent summary state instead of accumulating full search history. Role-Decoupled Policy Optimization trains with turn-level evaluations for better credit assignment. IterSynth-8B scores 50.7 on benchmarks, beating the prior 8B best by 4.2 points. This matters because role separation improves long-horizon search performance.
