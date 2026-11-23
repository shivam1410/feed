---
title: "Don't Discard Your Rollouts: Reusing Teacher RL Traces for Student Distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.26803"
authors: ["Vashisth Tiwari, Emma Strubell, J. Zico Kolter"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 45
guid: "oai:arXiv.org:2611.26803v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

RL post-training methods such as PPO and GRPO are computationally expensive, with substantial resources devoted to sampling rollouts, which contain multiple completions per prompt along with their respective rewards. Canonical distillation, however, discards these traces and uses more compute to regenerate data from the final teacher. We ask if and how we can reuse the saved teacher RL rollouts to distil student models. Reusing rollouts is non-trivial: naive SFT on the rollouts underperforms canonical distillation, and naive DPO, while performant, is unstable, collapsing on weaker students. We show that treating rollout reuse as a data selection problem using metadata already recorded during GRPO substantially reduces this gap. We use prompt pass rates to order the data, using the easiest prompts for an SFT warm start prior to using mixed-success prompts for DPO. For each prompt, we use saved teacher log-likelihoods as a proxy for selecting student-compatible completions. Across mathematical reasoning and Python coding tasks, with students from multiple model families, our two-stage recipe achieves comparable average performance to canonical distillation, while incurring no additional inference cost for dataset construction.
