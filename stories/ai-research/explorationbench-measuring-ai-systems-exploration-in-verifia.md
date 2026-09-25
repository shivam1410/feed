---
title: "ExplorationBench: Measuring AI Systems' Exploration in Verifiable Alien Worlds"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.30199"
authors: ["Ming Zhang", "Zhenghao Xiang", "Peizhong Gao", "Yujiong Shen", "Yuhui Wang", "Zhonghan Yue", "Shihan Dou", "Zhangyue Yin", "Junjie Ye", "Shichun Liu", "Weihuang Zheng", "Jiahao Chen", "Jiayi Chen", "Hongzhang Liu", "Jiaqi Shao", "Tao Gui", "Qi Zhang", "Xuanjing Huang", "Suncong Zheng", "Maxm Pan"]
date: "2026-09-23T20:00:00.000Z"
score: 72
guid: "2609.30199"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.30199.png"
generated: "2026-09-25T22:38:54+05:30"
---

Scientific discovery begins where known problems end. There, AI systems must engage in exploration: framing hypotheses, designing experiments, and iterating on the results. However, evaluating this ability is difficult: (1) how to verify whether a genuinely new hypothesis holds, and (2) how to determine whether a system has discovered it through exploration or merely recalled related knowledge from pre-training data. To this end, we introduce ExplorationBench, which turns the wicked problem of evaluating scientific exploration into a concrete and tractable framework built on verifiable Alien Worlds: their rules are executable, so every answer can be checked exactly, and they conflict with familiar knowledge, so recall alone cannot solve the tasks. The benchmark contains two sandboxes, AlienCode (31 discovery targets, 70 tasks) and AlienLogic (24 discovery targets, 70 tasks). Each sandbox provides a flawed manual, task-specific environmental feedback, and a dedicated tool-call schema. Systems use these resources to explore the sandbox, then solve held-out tasks. We evaluate 10 AI systems and find that the strongest systems can acquire and apply unfamiliar rules, while performance varies substantially across trajectories and continued exploration can stall or reverse earlier gains. ExplorationBench represents a step towards AI systems that can acquire and apply genuinely new knowledge through exploration in unknown environments.
