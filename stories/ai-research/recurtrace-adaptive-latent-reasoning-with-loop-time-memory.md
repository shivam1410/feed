---
title: "RecurTrace: Adaptive Latent Reasoning with Loop-Time Memory"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.03379"
authors: ["Yuxiang Wang, Kunyu Feng, Yingda Shen, Haoning Xu, Junyu Wang, Zhizheng Wu"]
date: "Fri, 04 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.03379v1"
image: ""
generated: "2026-09-04T23:32:20+05:30"
---

arXiv:2609.03379v1 Announce Type: new Abstract: Repeating a small block of middle layers increases a language model's effective inference depth without adding parameters or generating extra tokens, and recent work shows that this latent recurrence improves reasoning. However, two design choices limit these gains. Each iteration sees only the previous output and cannot directly access earlier computations. Moreover, a fixed loop count wastes depth on easy inputs while leaving hard ones with too little computation. We introduce RecurTrace, which addresses both limitations using the loop's own trajectory. Specifically, Loop Memory Attention lets each looped layer attend to its own states from previous iterations along the loop-time axis, so the model can revisit earlier computations instead of relying on the latest state alone. A halting head then reads the loop state and predicts whether to continue, with supervision from an oracle that identifies when additional depth still reduces loss. In a controlled MathQA comparison on the same looped backbone, RecurTrace achieves 56.9% accuracy with an average of 2.0 loops, exceeding the best fixed loop depth by 2.2 points at matched compute. By comparison, ACT and PonderNet collapse to one loop, and CALM reaches only 54.1% with 5.6 loops, while the stronger LoopUS-Conf and TaH-Mismatch baselines reach 55.3% at 3.2 loops and 55.7% at 2.1 loops. Finally, RecurTrace improves generation accuracy over same-budget fine-tuned baselines at 0.6B, 1.7B, 4B, and 8B, with the gain growing with model size from 0.6 to 3.4 points.
