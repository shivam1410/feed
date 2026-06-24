---
title: "Parallel Manifold Steering: Efficient Adaptation of Large Associative Memories via Residual Energy Shaping"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24396"
authors: ["Kanishk Awadhiya"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.24396v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.24396v1 Announce Type: new Abstract: Large Transformer models function as Dense Associative Memories (DAMs), retrieving knowledge via high-dimensional attractor dynamics driven by the self-attention mechanism \citep{ramsauer2020hopfield, wu2024attention}. However, adapting these frozen memory systems to new tasks presents a fundamental ``Plasticity-Stability'' dilemma. Current methods either risk catastrophic interference by modifying synaptic weights directly (e.g., LoRA) \citep{hu2021lora} or degrade associative capacity by clogging the retrieval buffer with static prompt tokens (e.g., VPT) \citep{jia2022vpt}. In this work, we propose \textbf{H-Res} (Hierarchical Residual Steering), a mechanism that modulates the effective energy landscape of the Transformer without altering its global equilibrium or expanding its sequence length. By formulating adaptation as a control problem on the activation manifold \citep{chen2018neuralode}, H-Res learns a state-dependent vector field that steers token trajectories into task-specific basins of attraction. We formally prove that H-Res preserves the attention entropy of the foundation model and facilitates Neural Collapse \citep{papyan2020prevalence}. Empirically, Manifold Steering outperforms global weight modification by 26\% on associative retrieval tasks and eliminates the computational overhead of prompt-based methods, scaling effectively to structured domains \citep{zha2023vtab}.
