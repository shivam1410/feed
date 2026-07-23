---
title: "One Student, Many Teachers: Multi-Task On-Policy Distillation via Soft-Prompt Privileged Context"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18293"
authors: ["Yingzi Ma, Zichen Zhu, Ming Jiang, Chaowei Xiao"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18293v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18293v1 Announce Type: new Abstract: On-policy self-distillation (OPSD) teaches large language models new skills through a teacher that shares the student's backbone and supervises its own rollouts. Existing teachers either inject privileged context at the input -- inducing post-hoc rationalization -- or fine-tune weights, accumulating drift and forgetting across tasks. We propose \method, whose teacher differs from the student only by a learnable soft prompt: trained on $(x, y_\text{gold})$ pairs with the backbone frozen, the prompt yields a task-specific teacher that preserves the student's exact representational geometry. \method\ extends naturally to multi-task settings by routing each example in a merged corpus to its corresponding soft-prompt teacher, allowing a single student to absorb knowledge from $K$ teachers in parallel; at inference, all prompts are discarded. On Qwen3-1.7B-Base and Phi-4-mini-instruct across four tasks (Science, Tool Use, Biology, Math), the single-task variant (OPD with a PT teacher) matches or exceeds full fine-tuning while training orders of magnitude fewer parameters, and the multi-task variant achieves the best overall average ($56.2$ on Qwen3-1.7B-Base) while preserving general-capability benchmarks -- in contrast to sequential SFT, which degrades both.
