---
title: "Rank-Then-Act: Reward-Free Control from Frame-Order Progress"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.01897"
authors: ["Yuriy Maksyuta", "George Bredis", "Ruslan Rakhimov", "Daniil Gavrilov"]
date: "2026-07-01T20:00:00.000Z"
score: 75
guid: "2607.01897"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.01897.png"
generated: "2026-07-09T19:06:43+05:30"
---

Rank-Then-Act is a novel framework that learns robot control policies from video demonstrations without requiring environment-based reward signals. The approach uses a vision-language model as an ordinal scorer to evaluate frame sequences and trajectory quality, generating correlation-based rewards that guide policy learning from visual demonstrations. By leveraging the semantic understanding of VLMs to rank trajectories by quality, the method enables stable learning from diverse demonstration videos across different tasks. The framework demonstrates strong cross-task transfer, showing that policies trained without task-specific environment rewards can generalize effectively to new manipulation and navigation problems, reducing the need for expensive per-task reward engineering.
