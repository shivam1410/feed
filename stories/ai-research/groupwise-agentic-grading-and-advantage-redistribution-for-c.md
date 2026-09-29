---
title: "Groupwise Agentic Grading and Advantage Redistribution for Code Agent RL"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.32577"
authors: ["Jinhao Dong", "Liang Zhao", "Zihao Yue", "Wenhan Ma", "Linghao Zhang", "Lei Li", "Shicheng Li", "Yifan Song", "Bowen Ye", "Fuli Luo"]
date: "2026-09-25T20:00:00.000Z"
score: 72
guid: "2609.32577"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.32577.png"
generated: "2026-09-29T19:09:35+05:30"
---

Reinforcement learning (RL) for code agents often uses executable tests to provide binary rewards. With these rewards, Group Relative Policy Optimization (GRPO) assigns identical advantages to test-passing trajectories within each rollout group, overlooking differences in implementation quality and adherence to task requirements. This leaves the policy without a learning signal that favors clean, targeted implementations over those containing unnecessary or out-of-scope changes. We introduce GAGAR, a framework for quality-aware credit redistribution in code agent RL. Built on dynamic sampling that retains groups containing both passing and failing trajectories, GAGAR places all trajectories from each group in a shared workspace, where an SFT-trained agentic grader jointly inspects them and ranks the test-passing candidates. Based on this ranking, we downweight lower-ranked trajectories and proportionally rescale the advantages of all test-passing trajectories to restore their original sum. This sum-preserving redistribution retains the relative weights established by quality-based downweighting while shifting credit toward higher-quality implementations. We evaluate GAGAR at industrial scale using pre-RL SFT checkpoints of MiMo-V2.6-Flash (310B total parameters) and MiMo-V2.6-Pro (1.02T total parameters). Controlled code-only Flash experiments show improved code agent performance, reduced trajectory-length growth, and more stable training. We further apply GAGAR in large-scale mixed-task RL with both Flash and Pro. Our results support combining test-based verification with groupwise agentic grading to improve the quality and stability of code agent RL.
