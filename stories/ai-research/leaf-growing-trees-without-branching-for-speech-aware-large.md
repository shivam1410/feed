---
title: "LEAF: Growing Trees Without Branching for Speech-Aware Large Language Model Post-Training"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07610"
authors: ["Argyrios Gerogiannis, Yekaterina Yegorova, Mark Hasegawa-Johnson, Venugopal V. Veeravalli"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2606.07610v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07610v1 Announce Type: new Abstract: State-of-the-art GRPO-style methods for speech-aware large language model post-training suffer from coarse credit assignment, broadcasting the same terminal-reward advantage to every token in a response. This ignores useful structure within rollout batches, where speech-conditioned completions often share prefixes before diverging at important decisions. We propose Low-rank Exploration with Adaptive Forking (LEAF), a retrospective tree-based RL method that recovers this structure without online branching or additional decoding. LEAF samples complete responses, selects high-surprisal boundaries, groups responses by shared prefixes, and assigns span-level advantages using descendant rewards. We theoretically justify LEAF's span-level credit assignment and boundary-selection design. Empirically, LEAF improves over GRPO across speech question answering and speech translation benchmarks under the same rollout and low-rank adaptation budget. Notably, smaller LEAF-trained models outperform current state-of-the-art, full-parameter baselines.
