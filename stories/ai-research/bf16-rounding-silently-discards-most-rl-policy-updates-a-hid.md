---
title: "bf16 Rounding Silently Discards Most RL Policy Updates: A Hidden Training-Inference Mismatch and an Unbiased One-Line Fix"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.41073"
authors: ["Andrew Gao, William Gao"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 45
guid: "oai:arXiv.org:2610.41073v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Reinforcement learning (RL) post-training of language models keeps fp32 master weights in the optimizer and serves rollouts from a bf16 copy produced by round-to-nearest conversion. At the learning rates in common use, most per-step updates are smaller than half a bf16 spacing and the conversion discards them: on Qwen3-1.7B only 0.4-0.5% of served weights change per step, and the policy that generates the training data lags the optimizer by 50-150 steps. Existing mismatch corrections cannot see this lag because they compare two copies downstream of the same rounding. We propose Fair Cast: export the master with an unbiased rounding rule (stochastic rounding or error feedback) and compute the training loss on the served copy. The change is one line at the export call, adds no hyperparameters and costs 22-38 ms per export of 1.7B parameters. Across 25 matched seed-pairs on Qwen3-0.6B to 4B with AdamW and Muon, Fair Cast is ahead on 18, tied on 6 and behind on 1, with a mean gain of 6.1 points; on zebra puzzles it reaches 0.57 +/- 0.16 over four runs where round-to-nearest collapses to 0.33 +/- 0.10. It also makes the saved fp32 checkpoint agree with the served model, and it exposes the implicit lag of round-to-nearest as a regularizer that can be restored explicitly when a task needs it.
