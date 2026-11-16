---
title: "TIDE: Reclaiming Lost Performance In On-Policy Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.17924"
authors: ["Mathew Jacob, Morgan Borjigin-Wang, Kan Zhu, Po Hao Chen, Yi Pan, Andy Ruan, Nayani Modugula, Ethan Lavi, Luis Ceze, Malte Schwarzkopf, Akshay Narayan, Deepti Raghavan, Stephanie Wang"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.17924v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

Synchronous, colocated RL post-training of large language models (LLMs) today suffers from severe under-utilization due to long-tail rollouts. Inference engines fall idle waiting for long-tail rollouts or decode at low, inefficient batch sizes. To address this, we present TIDE, an RL training system that preserves on-policy training semantics while recovering resource utilization. TIDE does so by two complementary techniques: (1) dynamically repurposing rollout GPUs for training while long-tail rollouts complete and (2) dynamically migrating rollouts between inference engines to boost decoding throughput. TIDE automatically determines the right time to repurpose rollout resources through an adaptive migration policy, obtaining performance improvements that generalize across multiple applications and hardware configurations without requiring bespoke configuration. In our evaluation, TIDE provides end-to-end speedups of up to 1.36x over colocated systems, outperforming all evaluated on-policy baselines and achieving up to 97% of optimal throughput.
