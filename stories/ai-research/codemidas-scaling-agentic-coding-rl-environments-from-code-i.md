---
title: "CodeMidas: Scaling Agentic Coding RL Environments from Code Itself"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.22068"
authors: ["Bowen Ye", "Lei Li", "Shicheng Li", "Zihao Yue", "Linghao Zhang", "Hanglong Lv", "Yuanxin Liu", "Wenhan Ma", "Hao Tian", "Rang Li", "Jinhao Dong", "Yikai Zhao", "Xiangwei Deng", "Hailin Zhang", "Liang Zhao", "Qi Liu", "Lingpeng Kong", "Tong Yang", "Fuli Luo"]
date: "2026-09-17T20:00:00.000Z"
score: 75
guid: "2609.22068"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.22068.png"
generated: "2026-09-22T19:08:22+05:30"
---

Training capable coding agents via reinforcement learning (RL) requires diverse tasks with reliable verifiers. Open-source codebases offer a rich source of such tasks, while existing methods typically rely on development artifacts such as issues and commits, limiting the range of tasks that can be extracted. To better scale RL environments, we present CodeMidas, an agentic pipeline that turns implemented functionality in existing codebases into executable RL environments using source code as its only task-specific input. CodeMidas allocates agentic compute to every stage of environment construction: agents explore implemented functionality to formulate behavioral specifications, construct tests grounded in execution of the original code, and validate and filter candidate tasks through execution checks and repeated solution rollouts. The resulting dataset has 5,545 training tasks from 3,185 open-source codebases spanning 23 programming languages and 15 technical domains. Training MiMo-V2.5 on these tasks with GRPO improves performance on all five diverse benchmarks, covering issue repair (DeepSWE + 11.7%), whole-program construction (ProgramBench +17%), and terminal work (Terminal-Bench v2.1 +8.5%). Ablations show that increasing the number of high-quality training tasks improves performance. Trajectory analysis shows the RL-trained agent demonstrates better behaviors like increasing codebase exploration and more diverse self-verification. These results establish source code as a scalable foundation for constructing RL environments that improve coding agents across diverse software tasks.
