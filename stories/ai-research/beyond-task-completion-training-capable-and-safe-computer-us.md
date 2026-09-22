---
title: "Beyond Task Completion: Training Capable and Safe Computer-Use Agents"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22178"
authors: ["Zeyu Kang, Zhenyun Yin, Yang Zhang, Shan He, Shanzhe Lei, Yanjiu Zhong, Xinquan Chen, Yuhong Wang"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2609.22178v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22178v1 Announce Type: new Abstract: Computer-use agents (CUAs) have made rapid progress in completing complex tasks through graphical user interfaces, yet post-training centered on task success alone does not induce reliable safety behavior. A reliable CUA must condition its execution on risk: it should complete ordinary benign tasks, avoid environmental hazards and continue when a safe completion path remains, and refuse when the goal is harmful or no safe path exists. To learn this conditional policy, we develop Safety and Capability Optimization for Policy Execution (SCOPE), which jointly post-trains a CUA for task-execution capability and safety-aware decision making. To provide aligned training data for this joint objective, we further introduce SCOPE-Gen, an automated pipeline that synthesizes verifiable capability tasks and converts them into paired environment-risk variants while preserving their original goals. Using the resulting tasks, we construct SATraj-OS, a trajectory dataset comprising capability demonstrations, safe continuations, and explicit refusals. SCOPE first learns from all three trajectory types through supervised fine-tuning and then further improves task completion through online reinforcement learning. Starting from Qwen3.5-9B, SCOPE-RL achieves a 54.17% task success rate on OSWorld and a 64.30% attack-avoidance rate on OS-BLIND, yielding the best aggregate capability--safety score of 58.80% among the evaluated agents. Ablations reveal asymmetric but complementary roles for the two forms of safety supervision: refusal trajectories account for most of the attack-avoidance gain, whereas risk-handling trajectories preserve greater task utility at comparable attack-avoidance levels.
