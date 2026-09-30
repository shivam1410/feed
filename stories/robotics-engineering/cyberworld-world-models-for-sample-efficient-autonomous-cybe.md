---
title: "CyberWorld: World Models for Sample-Efficient Autonomous Cyber Defense"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31893"
authors: ["Ryozo Masukawa, Sanggeon Yun, Raheeb Hassan, Hyunwoo Oh, SungHeon Jeong, Mohsen Imani"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.31893v1"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

Deep reinforcement learning has become a prominent approach to autonomous cyber defense. Existing methods are predominantly model-free and consequently require extensive environment interaction. World models provide an alternative by learning predictive dynamics and optimizing policies through imagined trajectories, yielding substantial gains in sample efficiency in robotics and embodied control. Extending this paradigm to cybersecurity raises a fundamental question: what should constitute the "world" in a cyber world model? We introduce CyberWorld, a Dreamer-style world modeling framework that learns latent cyber dynamics from vector, graph, textual, and multimodal representations of the defended network. Across all four scoreable CyberWheel attack strategies, the graph-based CyberWorld variant exceeds a strategy-agnostic control after 3.6k-15.8k environment steps, compared with millions of steps required by model-free PPO. Across representation choices, graph structure provides greater robustness under topology-dependent attacks, while simpler representations remain competitive in overall performance. Among successful runs, the number of episodes required to reach the control remains approximately constant as network size increases from 15 to 100 hosts. These results establish learned cyber dynamics as a sample-efficient and scalable basis for autonomous defense, and identify world representation as a central design axis for robustness and scalability.
