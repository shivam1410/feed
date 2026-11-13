---
title: "Epigraph Form Reinforcement Learning-based Safe Trajectory Tracking Control for Connected and Autonomous Vehicles"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.14903"
authors: ["Xiaoke Yang, Jin Chen, Yafei Wang, Qi Zhang, Ming Li, Haiwen Wu, Chengliang Yin, Yong Zhang"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.14903v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Safe trajectory tracking (STT) aims to enable autonomous vehicles to follow a reference trajectory accurately while avoiding collisions. This problem is particularly challenging for Connected and Autonomous Vehicles (CAVs) in highly dynamic environments. Existing non-learning-based STT methods often use simplified vehicle and interaction models to meet real-time requirements, which may result in suboptimal tracking accuracy. Although Deep Reinforcement Learning (DRL) can help address this limitation, widely used Lagrangian DRL methods often suffer from unstable training because increasing Lagrange multipliers amplify policy-gradient magnitudes. To address these issues, we propose a novel reinforcement learning framework for STT, called STT Control Epigraph Form RL (STTC-EFRL). In this framework, the STT problem is formulated as an epigraph-form min-max optimization problem. Based on this formulation, we develop a learning mechanism that uses a decreasing scalar related to the epigraph to adjust the policy gradient descent direction without increasing the gradient magnitude, thereby improving training stability. We also develop a computationally efficient ray-casting method to compute a polyhedron scaling factor for safety quantification. Experimental results, including Vehicle-in-the-Loop tests, show that STTC-EFRL achieves higher tracking accuracy than the considered non-learning-based baseline and more stable training than widely used Lagrangian DRL methods, while satisfying safety requirements in connected environments.
