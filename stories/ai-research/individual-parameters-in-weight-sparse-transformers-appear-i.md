---
title: "Individual Parameters in Weight-Sparse Transformers Appear Interpretable"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.02964"
authors: ["Arnau Marin-Llobet, Stefan Heimersheim"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2607.02964v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.02964v1 Announce Type: new Abstract: A central goal of mechanistic interpretability is to understand how neural networks work and what each individual component does. Dominant circuit-finding approaches focus on a specific behavior and reverse-engineer the role of components on the associated sub-distribution. However, past work has shown that components can have different functions that are active on different subsets of the input distribution. In this work we ask whether a single weight can be understood globally across the full training distribution by characterizing when it matters (the inputs on which ablating it changes the model's predictions). We introduce an automated LLM pipeline that writes a short, human-readable description of when a weight matters and verifies it on held-out text, crediting a weight only if its description generalizes. Across two sparse and two dense transformers, the fraction of weights that are interpretable (in this sense) is higher in sparse transformers than in dense ones, a gap that widens once unreliable descriptions are discarded. Our results show that a meaningful fraction of a sparse transformer model's weights can be interpreted: 12 to 31% of weights have a single short description that identifies what the weight is used for.
