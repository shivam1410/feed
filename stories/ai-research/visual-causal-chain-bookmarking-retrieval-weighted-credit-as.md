---
title: "Visual Causal-chain Bookmarking: Retrieval-Weighted Credit Assignment for Reinforcement Learning from Delayed Reward"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24032"
authors: ["Prathap Selvakumar"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.24032v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

RL agents trained on a single trajectory-level return face a credit-assignment problem: when a reward arrives many steps after the decision that caused it, every action gets the same signal regardless of causal responsibility. This paper studies Visual Causal-chain Bookmarking (VCBM), which concentrates credit on the decision points that determine an episode's return, via two instantiations. The first targets a fully observed, low-dimensional MDP (a delayed-reward watch-repair task), where VCBM statistically discovers which state components the agent causally controls and estimates per-decision-point action values directly, evaluated against ground truth and RUDDER, an LSTM-based baseline. VCBM converges to 95.07% correct decisions in a mean of 1,532.3 episodes across 20 seeds, versus RUDDER's slower, more variable convergence (mean 3,327.1 episodes; p<0.001); VCBM's discovered causal structure exactly matches ground truth in all seeds. The second targets a partially observed, language-based setting: an LLM agent trained with Leave-One-Out PPO (LOOP) in AppWorld, where causal discovery is intractable and a structural heuristic (state-mutating tool calls) substitutes for it, with credit distributed via retrieval over episodic memory and blended with LOOP's advantage. Over 200 iterations on identical Qwen2.5-7B-Instruct/LoRA/FSDP2 configurations, VCBM-blended LOOP improves task success over plain LOOP (0.354 vs. 0.458), reduces final-step max importance weight, and improves token efficiency, with a small KL exception favouring LOOP. The watch-repair result supports the claim that weighting causally relevant steps is more sample-efficient than an undifferentiated baseline or a learned return-redistribution network; the AppWorld result, limited to one seed per arm by a 2-GPU budget, is a compute-limited demonstration at a harder, natural-language scale, not a statistical confirmation.
