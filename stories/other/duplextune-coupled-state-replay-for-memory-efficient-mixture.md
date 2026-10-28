---
title: "DuplexTune: Coupled-State Replay for Memory-Efficient Mixture-of-Experts Adaptation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36009"
authors: ["Paul Raj, Simon Caldwell, Daniel Whitmore, Mutlu Mete"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36009v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Sparse expert execution does not remove the stored states needed to adapt a mixture-of-experts language model. We present DuplexTune, a framework for replaying coupled hidden states through pretrained attention and expert modules. Trainable width bridges connect two residual streams to the backbone. Bridge warm-up precedes backbone adaptation, with router weights kept frozen. We analyze the implicit state-recovery equation and identify the convergence and replay conditions needed for reconstruction. On Qwen1.5-MoE-A2.7B, the single-H800 evaluation reports 38.8 GB peak memory, versus 64.8 GB for supervised fine-tuning with checkpointing, and throughput of 25.1 versus 19.9 samples/s. DuplexTune achieves 67.2% MMLU, 75.6% GSM8K, and 7.69 MT-Bench, with a weaker multilingual score than the checkpointed baseline. The results characterize a configuration-dependent tradeoff among state storage, throughput, and adaptation quality.
