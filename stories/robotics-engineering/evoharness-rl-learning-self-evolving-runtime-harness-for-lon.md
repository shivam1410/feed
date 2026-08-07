---
title: "EvoHarness-RL: Learning Self-Evolving Runtime Harness for Long-Horizon LLM Agents"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.05446"
authors: ["Xuying Ning, Dongqi Fu, Tianxin Wei, Hanqing Zeng, Yuanchen Bei, Bingxuan Li, Zihao Li, Qifan Wang, Xiang Shen, Yifan Wu, Jiayi Liu, Hong Li, Yinglong Xia, Xiangjun Fan, Hanghang Tong, Jingrui He"]
date: "Fri, 07 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.05446v1"
image: ""
generated: "2026-08-07T19:04:45+05:30"
---

arXiv:2608.05446v1 Announce Type: new Abstract: Long-horizon LLM agents increasingly rely on external execution support to maintain state, track progress, invoke tools, verify outcomes, and reuse experience across interactions. However, effective harness use raises two coupled challenges: state formation from noisy interaction traces and runtime control over external-state access. Existing agents usually handle both through prompts, heuristics, or domain-specific conventions, leaving the external workspace and its usage policy manually engineered. To address this, we study the problem of harness policy learning, where agents learn harness policies offline and deploy them to construct and update external harness state online during runtime task execution. We introduce EvoHarness-RL, which exposes Belief, Progress, and Experience (BPE) as policy-facing harness state. Supervised harness fine-tuning teaches the base agent the harness action space and how to construct useful external state, while cost-aware GRPO explores coordination policies to selectively read, update, and consolidate that state during long-horizon interaction. Instantiated on ALFWorld with a Qwen3-8B LLM, EvoHarness-RL reaches 96.9% success and reveals two key dynamics: harness annealing, where training internalizes recurring harness-use patterns into the model policy and shifts the agent from frequent harness calls toward selective external-state access, and harness evolution, where progress updates and experience consolidation refine the harness into a compact, task-adaptive state substrate. These results suggest that long-horizon agents benefit from trainable policies for constructing and coordinating with external harness workspaces, beyond simply adding stronger tools or larger memories.
