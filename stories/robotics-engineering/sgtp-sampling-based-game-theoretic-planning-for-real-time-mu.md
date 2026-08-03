---
title: "SGTP: Sampling-based Game-Theoretic Planning for Real-Time Multi-Vehicle Autonomous Racing"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.25388"
authors: ["Zhouheng Li", "Fangguo Zhao", "Mattia Piccinini", "Baha Zarrouki", "Yuan Gao", "Zitong Shan", "Johannes Betz", "Chen Lv", "Lei Xie"]
date: "2026-07-27T20:00:00.000Z"
score: 75
guid: "2607.25388"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.25388.png"
generated: "2026-08-03T19:06:42+05:30"
---

Autonomous multi-vehicle racing requires real-time planning of diverse competitive behaviors in intense interactions. Existing planners often struggle to balance strategic diversity and computational efficiency. To address this challenge, we propose Sampling-based Game-Theoretic Planning (SGTP), a real-time framework that combines game-theoretic reasoning with GPU-accelerated sampling of control sequences and dynamics rollouts. Sampled trajectories are ranked using a game-aware cost to capture competitive interactions and generate diverse racing behaviors. Our planner then performs feasibility selection by explicitly enforcing track-boundary and dynamic collision-avoidance constraints, ensuring safe and reliable transitions between racing strategies. Extensive simulations on challenging tracks show that SGTP achieves a 95.24% win rate and a 99.35% task-completion ratio in highly interactive races, with a mean computational time of 0.095 s over multiple iterative solving steps. We also demonstrate the successful application of SGTP in large-scale scenarios with up to 10 agents. We release our code and provide an open-source benchmark of multi-agent autonomous racing algorithms to facilitate future research. Project page: https://sgtp-racing.github.io/.
