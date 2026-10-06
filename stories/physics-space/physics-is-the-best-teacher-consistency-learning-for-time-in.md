---
title: "Physics is the Best Teacher: Consistency Learning for Time-Invariant Operators of Chaotic Dynamics"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04108"
authors: ["Lufang Chiang, Jiachen Yao, Thomas Y. L. Lin, Anima Anandkumar"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2610.04108v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Accelerating the prediction of long-term behavior in chaotic systems is crucial in scientific computing. However, existing methods rely on numerical solvers or autoregressive models that advance one small step at a time, which makes long horizons expensive. We instead view this problem as learning the system's time-invariant evolution operator, which jumps the state across a large time span in a single evaluation. To this end, we derive the consistency equations a time-invariant operator must satisfy, with differential and compositional objectives in physical time. These equations also connect the learned operator to the physics-prescribed instant dynamics, enabling physics embedding in consistency learning. Across five chaotic systems, we find that physics-distilled consistency makes both short-term trajectories and long-term statistics more accurate. The learned operator survives temporal extrapolation and requires one-tenth as many evaluations as autoregressive rollout, offering an efficient route to long-term simulation of chaotic dynamics.
