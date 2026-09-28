---
title: "PolicyAttention: Softmax Attention Implements Policy Mirror Descent for Closed-Loop Control"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30500"
authors: ["Yuhe Sui, Yingzhi Tang, Shufang Chen"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2609.30500v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Can causal softmax attention implement policy mirror descent as a repeated controller rather than a one-step algebraic identity? Negative-entropy policy mirror descent (PMD) has the statewise update $\operatorname{PMD}_\eta(\pi,Q)=\operatorname{softmax}(\log\pi+\eta Q)$. Building on the known Q-TD-PMD recursion, we construct one fixed causal-softmax actor--environment--one-step-critic protocol with explicit actor, routing, sampling, and normalization residuals, and propagate them to the policy actually returned. The construction states the finite-logit/full-support domain, the external tokenization and sampling boundary, and the mean-zero LayerNorm carrier conditions required by the normalized compilation. Separately trained pre-LN Transformers recover the target computation empirically. A frozen one-step audit model is closest to PMD among the tested fixed rules; in a preregistered five-run $S=4$ repeated-control test, the learned actor with an exact one-step critic reaches median returned-policy loss $1.052\times$ the Exact PMD oracle and retains the criterion across four no-retraining shifts. The same checkpoints with their learned critic give descriptive median $1.050\times$ the oracle (no registered margin). At $S=8$, replacing the exact critic by the learned critic raises median $T=20$ loss to $0.0225$ yet leaves the Liang--Lai and Algorithm Distillation adaptations $20.2$--$24.2\times$ higher-loss; this is a one-sided sampled-critic bound because PolicyAttention consumes 144 generative transitions per round versus 20 on-policy transitions for the adaptations. The strict 20-transition comparison remains open. At $S=8,16$, the exact-critic common-harness comparison remains $17.7$--$28.2\times$ lower-loss than those adaptations, with the information asymmetry stated locally.
