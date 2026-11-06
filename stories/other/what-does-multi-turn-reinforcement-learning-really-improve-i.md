---
title: "What Does Multi-Turn Reinforcement Learning Really Improve in LLM Agents?"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.06483"
authors: ["Kejian Zhu", "Zhuoran Jin", "Shangqing Tu", "Tianyi Men", "Yupu Hao", "Jiachun Li", "Kang Liu", "Jun Zhao"]
date: "2026-11-04T08:24:54.000Z"
score: ""
guid: "2611.06483"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.06483.png"
generated: "2026-11-06T21:37:05+05:30"
---

While multi-turn agentic reinforcement learning (RL) excels on long-horizon tasks, its performance gains remain highly sensitive to interaction constraints. Evaluating across sampling breadth K and interaction depth T via Pass@(K,T), we show that trajectory-level RL advantages depend on sufficient turn budgets, diminishing significantly when budgets tighten. Besides, agentic RL does not uniformly elevate single-step decision quality; rather, its strength concentrates in error recovery and long-horizon resilience. To mitigate the deployment risks caused by this budget dependence, we provide a preliminary discussion on the benefits and limitations of process supervision signals and introduce BudgetMix RL as an alternative that varies interaction budgets during training. Experiments demonstrate that BudgetMix RL achieves robust performance across diverse execution settings. Project Page: https://rethinking-agentic-rl.github.io/
