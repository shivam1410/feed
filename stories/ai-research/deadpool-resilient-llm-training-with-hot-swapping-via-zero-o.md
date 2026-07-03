---
title: "DeadPool: Resilient LLM Training with Hot-Swapping via Zero-Overhead Checkpoint"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01646"
authors: ["Haotian Xie, Junlin Chen, Mingkai Zheng, Lishan Yang, Zhao Zhang"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.01646v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01646v1 Announce Type: new Abstract: State-of-the-art large language model (LLM) training takes tens of thousands of graphics processing units (GPUs) for months and encounters failures across the software and hardware stack. Existing fault-tolerance mechanisms either impose non-trivial overhead during failure-free execution or suffer from prolonged recovery latency, particularly under scenarios where a small subset of compute nodes experience permanent failures. %The tradeoff between failure-free overhead and recovery latency forms a space forms a Pareto frontier We present DeadPool to simultaneously address both optimization objectives. DeadPool incorporates a fault-tolerance mechanism that restores LLM training via hot-swapping, namely by replacing failed nodes with spare nodes without terminating the complete job. The hot-swapping of DeadPool is enabled by two ideas: First, it exploits an off-critical-path in-memory checkpointing mechanism for spatial redundancy. Second, it introduces a communicator reconstruction protocol that replaces failed nodes with spare nodes at runtime. DeadPool efficiently overlaps the in-memory checkpointing with computation, thus introducing zero overhead during error-free execution. Upon permanent node failures, DeadPool can rebuild memory states with minimal recomputation by leveraging in-memory checkpoints. We evaluate DeadPool across scales (up to 512 NVIDIA A100 GPUs) and LLMs (up to 65B parameters), and observe zero checkpoint overhead with hot-swapping recovery completing in under 40 seconds. These results show that DeadPool simultaneously achieves both zero-overhead error-free execution and extremely low recovery cost.
