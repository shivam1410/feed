---
title: "Self in Space: Benchmarking Self-Awareness and Spatial Cognition in UAV Embodied Intelligence"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.12477"
authors: ["Zhishan Zou", "Guoyan Sun", "Zhiwei Wei", "Jiancheng Pan", "Yujie Li", "Mugen Peng", "Wenjia Xu"]
date: "2026-07-13T20:00:00.000Z"
score: ""
guid: "2607.12477"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.12477.png"
generated: "2026-07-19T19:52:10+05:30"
---

Autonomous UAV systems increasingly rely on multimodal large language models (MLLMs) to operate in complex real-world environments. Such embodied scenarios require not only understanding the surrounding space but also maintaining a coherent representation of the agent itself. However, existing UAV-oriented approaches and benchmarks remain largely environment-centric, primarily focusing on spatial understanding tasks, with the agent's self-awareness remaining implicit. To address this gap, we introduce SIS-Bench, a benchmark for evaluating embodied spatial intelligence in UAV scenarios under a unified self-in-space formulation. SIS-Bench organizes evaluation along two complementary dimensions, space and self, and a three-level hierarchy of perception, memory, and reasoning. It contains 4,856 question--answer pairs across 13 tasks derived from 1,646 real-world UAV videos through a task-conditioned construction pipeline with expert verification.Extensive evaluations reveal that current MLLMs exhibit fundamental limitations in modeling dynamic and agent-centered processes. In particular, we observe a clear imbalance between spatial cognition and self-awareness, as well as a progressive performance degradation across cognitive levels.Motivated by these findings, we further explore a motion-aware representation that incorporates self-related dynamics through optical flow and visual feature fusion. Experimental results show that modeling agent motion consistently improves perception and memory performance, not only in spatial cognition but also in self-awareness, and generalizes to downstream UAV decision-making tasks.Our results highlight the importance of self-awareness for advancing embodied spatial intelligence, and provide both a new benchmark and empirical evidence for motion-aware self-in-space modeling.
