---
title: "Sample-Efficient Post-Training for LEGO Spatial-Physics Reasoning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07602"
authors: ["Yuhuan Yuan, Zhouliang Yu, Minghao Liu, Weiyang Liu, Ge Lin Kan"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.07602v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07602v1 Announce Type: new Abstract: LLM-based LEGO assembly generation requires both semantic grounding and physical feasibility. We identify a data-induced failure mode, PhysHack, in which the assemblies satisfy physical-validity constraints while producing structures that are geometrically misaligned, semantically inconsistent, or poorly calibrated. To address this challenge, we propose a model-based data selection approach that uses only a small fraction of the training data while improving physically grounded LEGO assembly generation. Building on the selected trajectories, we introduce PVPO, a sample-efficient reinforcement learning method that couples physical feasibility with voxel-space geometric rewards. Our results show that physical validity alone is an insufficient proxy for reliable physical reasoning: models can learn to generate valid structures without preserving semantic or geometric fidelity. Experiments across model backbones and test-time scaling settings demonstrate that PVPO improves structural and semantic alignment, physical validity, structural stability, and calibration, while reducing reliance on extensive post-hoc rejection sampling. In particular, results on calibration show that PVPO mitigates PhysHack by making test-time selection more predictive of semantic and structural quality.
