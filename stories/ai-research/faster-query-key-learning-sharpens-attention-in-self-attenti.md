---
title: "Faster Query-Key Learning Sharpens Attention in Self-Attention Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.06776"
authors: ["Rahul Vashisht, Harish G. Ramaswamy"]
date: "Mon, 10 Aug 2026 00:00:00 -0400"
score: 67
guid: "oai:arXiv.org:2608.06776v1"
image: ""
generated: "2026-08-10T19:05:52+05:30"
---

arXiv:2608.06776v1 Announce Type: new Abstract: A standard self-attention layer consists of two interacting circuits: the query-key circuit that governs attention allocation, and the output-value circuit that maps attended representations to predictions. Collapsed and factorized parameterizations of the query-key and output-value circuits lead to qualitatively different attention patterns. In particular, some parameterizations give sharper attention to task-relevant tokens, at a similar training loss. We analyze how the parameterizations of these circuits shape the parameter trajectories in single-layer self-attention models trained for next-token prediction. Through gradient-flow analysis, we show that factorization induces implicit rescaling of the two circuits' learning rates. We derive closed-form dynamics showing that output-value and query-key parameters move along a line, with relative speeds determined by their learning rates. Faster query-key learning relative to output-value learning thus produces sharper attention, as the model compensates for slower output-value learning by increasing attention mass on relevant tokens. Experiments show that differences in the relative learning rates of the two circuits govern attention concentration. This improves attention interpretability proxies while maintaining comparable predictive performance.
