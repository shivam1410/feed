---
title: "The Attention Within: Consensus Dynamics in Selective State Space Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.17997"
authors: ["Jo\\~ao Pedro Silvestre, \\'Alvaro Rodr\\'iguez Abella, Paulo Tabuada"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.17997v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.17997v1 Announce Type: new Abstract: Selective state space models (SSMs) have recently emerged as a compelling alternative to transformers, combining competitive performance with substantially improved inference efficiency. At each SSM layer, a sequence of hidden states are propagated by a recurrence, mixing information of different tokens. Despite using a different mechanism, this mixing plays a role analogous to attention in transformers. In fact, recent works have shown that the two architectures may be closer than they first appear, as this recurrence admits a formulation akin to linear attention. In transformers, attention is known to drive the tokens to cluster, i.e., to reach consensus, collapsing in the limit to a single direction. Thus, we ask: does the recurrence at the core of SSMs drive the tokens to consensus, as attention does in transformers? To answer this question, we take a dynamical systems perspective on SSMs, modeling the evolution of tokens across layers as an ordinary differential equation. By exploiting input-to-state stability arguments, we establish local exponential stability of the consensus equilibria and characterize their domain of attraction for time-varying weight matrices, a setting not addressed by previous results. We thereby show that the resemblance between SSMs and transformers does run deeper: the recurrence at the core of SSMs aggregates tokens just as attention does. Numerical experiments on a pretrained Mamba-2 model point to the output gate as the component that regulates the extent of this consensus, preventing the tokens from reaching it in full.
