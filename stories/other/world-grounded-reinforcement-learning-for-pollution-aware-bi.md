---
title: "World-Grounded Reinforcement Learning for Pollution-Aware Bird Movement Modeling Using a Multi-Instance DQN Framework"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21895"
authors: ["Shivin Mangal, Divyansh Chawla, Anshu Garg, Isshaan Singh"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21895v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

Birds are modeled as environmentally sensitive agents whose movement reflects real-world air quality conditions, where AQI serves as a measurable world feedback signal representing pollution-driven consequences. Instead of relying on human preference or synthetic rewards, the system uses environmental outcomes as the primary training signal, enabling policy learning grounded in ecological impact. We propose a multi-instance reinforcement learning simulation in which agents navigate a 2D grid representation of India integrated with a precomputed AQI matrix and geographic state boundaries. The framework combines bird call metadata from the Xeno-canto dataset, spatial discretization, and real environmental data to learn adaptive navigation strategies under pollution constraints. To ensure scalability and efficiency, repeated real-time API queries are replaced by a structured AQI mapping that enables fast lookup during training and execution. Multiple baselines, including Monte Carlo, Q-Learning, and Value Iteration, are evaluated for comparison. Deep Q-Network demonstrates stronger stability, adaptability, and cumulative performance across varying environmental conditions, establishing a scalable foundation for world-feedback driven ecological decision modeling.
