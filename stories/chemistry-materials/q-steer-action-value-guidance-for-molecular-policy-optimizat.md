---
title: "Q-Steer: Action-Value Guidance for Molecular Policy Optimization"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26391"
authors: ["Xinyu Wang, Jinbo Bi, Minghu Song"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 67
guid: "oai:arXiv.org:2607.26391v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

arXiv:2607.26391v1 Announce Type: new Abstract: Oracle-limited molecular optimization gives reward only after a complete molecule is generated, while each rollout requires many local next-token decisions. This delayed-feedback interface makes molecular policy optimization myopic: an optimizer can learn that a molecule was good without knowing which intermediate actions made it good. We introduce Q-Steer, a rollout-time action-value steering primitive for molecular language models. Q-Steer uses an offline-trained and frozen prefix-action value scorer, PAVS-Q, that estimates the downstream reward of taking a candidate next token under a partial SMILES prefix, then adds a normalized value bonus to sampling logits. The optimizer update rule and online oracle budget are unchanged; the claim is fixed-online-oracle performance, not equal total compute. On PMO23 with a fixed 10,000-call online budget, complete factorial studies across two molecular language-model backbones and four optimizers show that Q-Steer improves mean valid-unique score in all eight backbone-optimizer cells, with positive macro mean-score gains between +0.033 and +0.049 and 18-20 task wins per cell. Mechanism controls show that action identity matters: prefix-broadcast values are nearly neutral, while shuffled action values harm performance. These results support Q-Steer as a reusable rollout-time action-value wrapper that improves average molecular optimization reward across optimizer families and policy backbones without changing the online oracle budget.
