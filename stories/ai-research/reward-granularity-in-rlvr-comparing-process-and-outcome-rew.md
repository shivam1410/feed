---
title: "Reward Granularity in RLVR: Comparing Process and Outcome Reward Structures for Mathematical Reasoning in Small Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.02869"
authors: ["Anagha Radhakrishna Palandye, Rebecca Glick, Osheen Kaul"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.02869v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.02869v1 Announce Type: new Abstract: Reinforcement Learning with Verifiable Rewards (RLVR) has emerged as a promising paradigm for improving mathematical reasoning in language models. Yet most RLVR work rewards only the final answer (outcome-based rewards), leaving the impact of step-level process supervision (process rewards) underexplored especially for small models that lack the capacity to self-correct under sparse feedback. We systematically compare five reward conditions applied to Qwen2.5-0.5B fine-tuned with Group Relative Policy Optimization (GRPO) on GSM8K: a no-RL baseline, process-only, outcome-only, and three hybrid weightings ($\lambda \in \{0.9, 0.5, 0.1\}$ process weight). Process-only supervision achieves 63.73% test accuracy versus 53.75% for outcome-only, a nearly 10-percentage point gap while yielding reasoning traces with higher step validity and lower deviation from ground-truth chain length. Hybrid rewards generally correlate positively with process weight, with one notable anomaly: the low-process / high-outcome configuration ($\lambda=0.1$) underperforms pure outcome supervision, suggesting conflicting optimization signals. Error analysis using GPT-4o as a judge reveals distinct failure mode distributions: process models generate structurally inconsistent but arithmetically grounded traces, while outcome models produce concise but derivation-error-prone chains. Our results demonstrate that reward granularity is a first-order design decision for RLVR, with process-level supervision substantially improving both accuracy and trace fidelity in small language models.
