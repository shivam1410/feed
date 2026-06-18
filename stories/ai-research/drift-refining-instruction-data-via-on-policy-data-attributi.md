---
title: "DRIFT: Refining Instruction Data via On-Policy Data Attribution"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18307"
authors: ["Zefan Wang, Lincheng Li, Tianyu Yu, Yuan Yao"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2606.18307v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18307v1 Announce Type: new Abstract: Optimizing the training data distribution for Supervised Fine-Tuning (SFT) dictates the capability of Large Language Models (LLMs). While existing data curation methods excel at accelerating training under constrained budgets, they are less suited to elevating the capability upper bound. The challenge here is no longer to identify a smaller subset that preserves performance, but to refine the data distribution toward instances most capable of improving the final model. To address this problem, we explore instance-level data attribution using Influence Functions (IF). We identify that standard IF formulations struggle in this setting due to two structural limitations: a proximity gap caused by off-policy validation targets, and a severe bias towards gradient norm. We propose DRIFT (Data Refinement via On-Policy Influence Functions for Supervised Fine-Tuning). Instead of relying on external reference data, DRIFT utilizes the model's on-policy rollouts as validation targets, which empirically minimizes the parameter proximity gap and better aligns with the local neighborhood assumption of IF. It further applies signed weighting based on trajectory correctness and debiases influence scores against the gradient hacking issue, allowing a small set of validation queries to act as reliable anchors for attributing the full dataset. Experiments on 7B-parameter instruction and reasoning models show that DRIFT consistently raises the performance ceiling on both, outperforming existing data curation baselines.
