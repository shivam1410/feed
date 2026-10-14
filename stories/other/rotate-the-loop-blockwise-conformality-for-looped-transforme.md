---
title: "Rotate the Loop: Blockwise Conformality for Looped Transformers"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14030"
authors: ["Alexey Zemtsov, Albina Klepach, Vadim Lomshakov, Andrei Polubarov, Nikita Lyubaykin, Alexander Derevyagin, Vladislav Kurenkov, Alexander Nikulin"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14030v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Looped transformers reuse one shared block across many recurrent steps, so depth becomes a quantity that can be spent at runtime rather than a stack of distinct layers. Those extra steps help only if a write made on one recurrent step is still readable on later ones, and that depends on the linear map applied to the residual between recurrent steps. We show that whether the loop learns to track state is a geometric question about the form of this map, and we propose blockwise conformal injections: the residual splits into coordinate-aligned groups and rotates inside each one, so every group has its own timescale while the geometry stays exact within it. Our experiments show a performance increase on a demanding form of state tracking - last-token accuracy when the rest of the prefix is already correct - and on language modelling, where a signal written earlier has to be retrieved at the end of the sequence.
