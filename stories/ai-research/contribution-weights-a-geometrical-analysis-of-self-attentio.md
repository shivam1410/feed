---
title: "Contribution Weights: A Geometrical Analysis of Self-Attention Transformers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07604"
authors: ["Harry Jake Cunningham, Nicola Muca Cirone"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2606.07604v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07604v1 Announce Type: new Abstract: Analyzing attention weights has become a standard approach for interpreting the information flow of Large Language Models (LLMs). However, this approach has significant limitations as it neglects the geometric properties of the value vectors being aggregated. To address this gap, we introduce \emph{Contribution Weights}, a projection-based metric that quantifies a token's influence by accounting for it's attention weight, value magnitude, and directional alignment with the layer output. We demonstrate that contribution weights provide a more faithful measure of token importance, consistently outperforming attention-based metrics in identifying semantically critical tokens across different decoder-only models, tasks, and datasets. Further, our metric enables novel mechanistic analysis of \emph{attention sinks}. While previous work characterized sinks as passive repositories for excess attention, we reveal they serve an active functional role, suppressing information through a convex relationship between sink rate and output norm, stabilizing representations by opposing the semantic drift of low-confidence tokens.
