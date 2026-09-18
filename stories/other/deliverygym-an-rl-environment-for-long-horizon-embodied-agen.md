---
title: "DeliveryGym: An RL Environment for Long-Horizon Embodied Agent Planning with Adaptive Curriculum"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19801"
authors: ["Haoqiang Kang, Yiming Zhang, Yiyang Guo, Chuying Li, Jianzhi Shen, Tianruo Rose Xu, Xiaokang Ye, Lianhui Qin"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19801v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19801v1 Announce Type: new Abstract: Executable environments enable LLM agents to learn from the consequences of their actions. For embodied agents, those consequences extend beyond whether the current task succeeds: completing a delivery can consume the time, energy, or money needed for later work. Learning to plan therefore requires environments that preserve these dependencies and turn them into feedback across a complete trajectory. We introduce DeliveryGym, a 3D environment for evaluating and training agents on continuous courier shifts. It couples multimodal tool interaction with persistent world dynamics and computes trajectory rewards from simulator events, making the costs of an agent's decisions available for reinforcement learning (RL). The environment also adapts future training shifts to the policy's observed weaknesses while keeping evaluation fixed. Across six models and 13 city maps, evaluation exposes a gap between reliably executing assigned deliveries and choosing and sequencing work over a shift. On the fixed test suite, RL improves Qwen3-VL-4B's net income by 54.3%, showing that learning from complete shifts improves performance under these coupled constraints. Adapting the training environment improves test income by 16.5% over uniform sampling at the same rollout budget, indicating that which situations an agent practices also matters. DeliveryGym provides an executable setting for studying how agents learn to coordinate deliveries and preserve resources for later orders within an episode.
