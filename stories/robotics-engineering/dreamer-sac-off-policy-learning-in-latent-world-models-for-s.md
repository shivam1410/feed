---
title: "Dreamer-SAC: Off-Policy Learning in Latent World Models for Sample-Efficient Autonomous Driving"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.10386"
authors: ["Jiazhuo Li, Linjiang Cao, Qi Liu, Xi Xiong"]
date: "Wed, 12 Aug 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2608.10386v1"
image: ""
generated: "2026-08-12T19:06:41+05:30"
---

Dreamer-SAC combines learned world models with soft actor-critic policy optimization for sample-efficient autonomous driving. The framework trains policy directly in latent space using recurrent state-space dynamics, generated trajectories, real interactions, and n-step target estimation. Empirical results consistently outperform DreamerV3, SAC, and PPO while using substantially fewer real environment interactions. Analysis reveals an inverted-U relationship where short-horizon latent rollouts best balance training signals against accumulated model bias. This matters because sample efficiency is critical for autonomous driving—reducing costly real-world training while maintaining safety and efficiency objectives.
