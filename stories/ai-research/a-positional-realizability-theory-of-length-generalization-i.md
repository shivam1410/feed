---
title: "A Positional Realizability Theory of Length Generalization in Single-Head Attention"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.41218"
authors: ["Jiasong Han, Yunkai Chai, Jintao Wang"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2610.41218v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Why does length generalization (LG) depend so sharply on the positional encoding (PE)? Relative schemes extrapolate fixed offsets, absolute schemes fix positions, and neither handles growing offsets. We give a realizability theory for a deliberately controlled abstraction, a single positional-only attention head, that derives this well-documented empirical pattern and says precisely where it holds and breaks. The device is a simulation transfer operator $T_L$ that re-evaluates a selected length-$L_0$-realizing positional kernel on the longer grid, with a scalar $\alpha_L \in [0,1]$ read off before any training from $(\Phi, t_n)$ alone. Here $\alpha_L$ serves as the computable witness of that taxonomy's derivation, not as a stronger empirical predictor. Our results are a relative-head deep-row characterization for kernels with a strict unique global maximizer (Theorem 2), an absolute/relative duality that derives the pattern (Proposition 4), a learned-absolute underdetermination result, and a static expressivity bound; a sufficiency theorem (Theorem 1) bridges $\alpha_L$ to LG, and the general deterministic case is a precise open conjecture (correcting a tempting but invalid "outside-colspan" argument). Experiments confirm the structure: in the controlled single-head regime $\alpha_L$ exactly separates the taxonomy's generalizing and non-generalizing (PE, task) cells (2625 trained-model measurements; stable at vocab 64/d=128). Together, these results turn the received PE taxonomy into a positional-kernel transfer theorem, and identify the content and depth mechanisms that escape it. The theory concerns the positional channel alone: tasks whose targets depend on token content, including the standard length-generalization suite such as addition and sorting, fall outside Theorem 2.
