---
title: "RRPO: Reference-Relative Policy Optimization with Stratified Conditional Rollouts"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18470"
authors: ["Yuxin Xiong, Xunyi Jiang, Rohan Surana, Xintong Li, Sheldon Yu, Nikki Lijing Kuang, Ryan A. Rossi, Jingbo Shang, Tong Yu, Julian McAuley, Junda Wu"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18470v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18470v1 Announce Type: new Abstract: Group Relative Policy Optimization (GRPO) has shown strong effectiveness in reinforcement learning from verifiable feedback, where sampled rollouts can be compared within a group using task-provided correctness signals. However, extending group-relative optimization beyond verifiable settings is challenging because success in many tasks is not captured by a single correctness criterion. We propose \textbf{Reference-Relative Policy Optimization (RRPO)}, which generalizes GRPO by replacing direct correctness-based advantage construction with reference-relative contrastive comparisons. RRPO first uses \emph{stratified conditional rollouts} to construct positive and negative anchor sets, and then trains a metric projection head with a set-contrastive objective to compare candidate rollouts against these anchors. The resulting alignment scores directly define contrastive advantages: during policy optimization, the projection head is frozen, and the scores are centered within each rollout group in a standard group-relative objective. We evaluate RRPO using anchor-based contrastive advantages throughout policy optimization, without relying on task ground-truth verifiers. Across verifiable reasoning, open-ended generation, and post-SFT settings, RRPO remains competitive with verifier-based optimization, improves over weakly supervised baselines, and provides additional gains after supervised fine-tuning.
