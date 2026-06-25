---
title: "CKM-Driven Communication-Aware UAV Intelligent Trajectory Optimization for Urban Inspection"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24979"
authors: ["Yang Xiaomeng, Jia Ziye, Zhu Qiuming, Wu Qihui"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.24979v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24979v1 Announce Type: new Abstract: Unmanned aerial vehicles (UAVs) are increasingly employed in urban inspection tasks, where reliable communication is critical but challenging due to the severe spatial channel heterogeneity. To address the issue, in this paper, we focus on the communication-aware path planning for multi-UAV tasks, and propose a channel knowledge map (CKM)-driven trajectory planning framework which integrates the channel modeling and trajectory decision-making. Specifically, we apply the diffusion model to construct a time-accumulated CKM and achieve the accurate perception with low flight overhead, which leverages the sparse observation data to reconstruct the high-fidelity global channel quality distribution. Based on the CKM, we propose a global-to-local graph attention network soft actor-critic algorithm. The graph attention network optimizes the complex combinatorial node ordering problem, generating an optimal and communication-aware sequence for the inspection targets. Subsequently, the soft actor-critic algorithm performs continuous action control to ensure the smoothness of the flight path and dynamically avoid communication attenuation areas. Simulation results demonstrate that the proposed method effectively guides UAVs through high-quality channel regions without dependence on real-time channel feedback, significantly improving both the trajectory efficiency and communication reliability.
