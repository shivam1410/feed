---
title: "SMOPD: Selective Token-Entropy Masking for Dirty-History Multi-Turn On-Policy Self-Distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14647"
authors: ["Chenyang Jiang, Changhan Huang"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2608.14647v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14647v1 Announce Type: new Abstract: Dirty-history rollouts make multi-turn on-policy self-distillation (OPSD) brittle: once a student emits an erroneous intermediate reply, later turns are conditioned on that reply, and uniform distillation can spend loss on tokens that carry little corrective signal. We introduce SMOPD (Selective Masking for On-Policy Distillation), a loss-only stabilization method for multi-turn OPSD. For each generated middle-turn reply, SMOPD ranks token positions by student entropy and removes the lowest-entropy 20% from the clipped generalized Jensen-Shannon distillation loss; final-answer and FULL-preservation losses are unchanged. This design targets token-level uncertainty rather than coarse trajectory outcomes, adds no parameters, and has zero inference-time overhead. We compare SMOPD with a correctness-scaling variant that multiplies a common detached reliability proxy using final-answer correctness. On LiC with Qwen3 models, SMOPD improves SHARDED-view accuracy by 1.0-2.5 percentage points in single-seed 1.7B, 4B, and 8B comparisons, and a small 4B multi-seed check shows a +1.7pp mean SHARDED gain over baseline (two-tailed p = 0.022). Adding the outcome scalar is harmful without masking at 1.7B (-4.0pp) and remains scale-dependent when combined with masking (+1.3pp at 4B, neutral at 1.7B, and -0.5pp at 8B). These archived aggregate results suggest that token-level uncertainty is a more reliable stabilization signal than scalar final-answer correctness in this evaluated dirty-history OPSD setting, while leaving causal mechanism tests and broader benchmark validation to future work.
