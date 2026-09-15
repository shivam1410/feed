---
title: "HarnessBandit: Joint Learnability-Transferability Scheduling for Multi-Harness Agentic Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13739"
authors: ["Hongliang Wei (Harbin Institute of Technology, Alibaba Cloud), Xiaobing Tu (Alibaba Cloud), Yinggui Wang (Alibaba Cloud), Zhengxi Liu (Alibaba Cloud), Rongkun Xue (Alibaba Cloud), Jinkui Ren (Alibaba Cloud), Xiantao Zhang (Alibaba Cloud), Debin Zhao (Harbin Institute of Technology), Xiaopeng Fan (Harbin Institute of Technology)"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13739v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13739v1 Announce Type: new Abstract: Language-model agents are increasingly deployed through diverse harnesses that differ in system prompts, tool schemas, control loops, and trajectory formats. The same model can perform unevenly across these interfaces, making robustness to harness variation an important objective. A natural approach is to train a shared policy through multiple harnesses, but doing so introduces a scheduling problem: each training step should favor a harness that currently provides a useful learning signal while also producing an update that benefits the other harnesses. We develop HarnessBandit, an online scheduler that selects one harness per optimizer step. After a group-relative policy optimization (GRPO) update, it observes learnability -- the mean absolute advantage on the batch -- and transferability -- the cosine between a low-dimensional gradient sketch of the current harness and exponential moving averages of the remaining harnesses. The two signals are fused after pooled sliding-window min-max normalization and sampled with a visit-dependent bonus and an explicit exploration floor. We train Qwen3.5-2B across six harnesses on ClawGym and evaluate on PinchBench (held-out tasks, in-distribution OpenClaw) and ClawEval (held-out tasks and harness). HarnessBandit improves over mixed-batch multi-harness training on both benchmarks, while training diagnostics indicate that learnability and transferability provide distinct, evolving signals.
