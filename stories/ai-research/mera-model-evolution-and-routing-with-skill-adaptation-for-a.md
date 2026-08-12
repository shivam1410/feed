---
title: "MERA: Model Evolution and Routing with Skill Adaptation for Agentic Systems at Scale"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.10333"
authors: ["Yuhang Yao, Zeyu Wang, Wanyi Chen, Tongyun Yang, Yuhang Han, Jie Xiao, Chengke Bao, Tianyi Zhao, Lynn Ai, Eric Yang, Tianyu Shi"]
date: "Wed, 12 Aug 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2608.10333v1"
image: ""
generated: "2026-08-12T19:06:41+05:30"
---

MERA improves small language models through iterative adaptation rather than just smarter routing. Instead of assigning hard tasks to large models (limiting small-model improvement), MERA replays failed invocations to collect teacher demonstrations, distills recurring procedures into an adaptive SkillBook, and fine-tunes a student LoRA adapter. Over four cycles, Qwen2.5-Coder-1.5B improved from 28.7% to 49.7% pass on HumanEval+MBPP. Under verifier-backed fallback, deployed policy retains 88.3% pass at 60.8% cost of always-using-large-model. This matters because it enables cost-efficient agentic systems by making smaller models genuinely capable.
