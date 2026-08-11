---
title: "Adaptive Supervised Anchoring for On-Policy Self-Distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.07935"
authors: ["Meilin Yang (Renmin University of China, Beijing, China), Zixuan Ding (Renmin University of China, Beijing, China), Jianhao Nie (Renmin University of China, Beijing, China), Weite Zhang (Renmin University of China, Beijing, China), Yuxin Zhang (Renmin University of China, Beijing, China), Zhiming Shao (Renmin University of China, Beijing, China), Li Yu (Renmin University of China, Beijing, China), Zhe Fu (Renmin University of China, Beijing, China)"]
date: "Tue, 11 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.07935v1"
image: ""
generated: "2026-08-11T19:05:57+05:30"
---

arXiv:2608.07935v1 Announce Type: new Abstract: On-policy self-distillation (OPSD) adapts a language model by distilling guidance from a frozen teacher on trajectories sampled from the student. Its effectiveness, however, depends critically on the quality of those trajectories. We show that when student rollouts drift from target trajectories, conditioning the teacher on off-target prefixes substantially weakens its task-relevant supervision. Controlled prefix-corruption experiments expose this failure mode, which we term rollout-conditioned signal degradation. To address this problem, we propose a unified training framework that separates two complementary supervision pathways. The first retains rollout-conditioned distribution matching, providing guidance on states the student actually visits. The second applies supervised cross-entropy on canonical ground-truth contexts, avoiding the incompatibility of imposing target tokens on erroneous rollout prefixes. Token-level rollout-target alignment is used to adapt the strength of the canonical-context anchor, emphasizing it during cold start and relaxing it as rollout quality improves. Experiments across multiple model scales, two task families, and general-reasoning benchmarks show that the proposed approach improves task acquisition over OPSD while preserving general capabilities, resulting in a more favorable empirical plasticity-stability trade-off. These findings identify context quality as a central bottleneck in on-policy self-distillation and demonstrate the value of separating rollout-conditioned guidance from canonical supervision.
