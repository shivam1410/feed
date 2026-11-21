---
title: "A Model of Diverse Sampling from Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25003"
authors: ["Manuel Prada-Corral, Yahya Emara, Timothy J. O'Donnell, Ryan Cotterell, Tim Vieira"]
date: "Sat, 21 Nov 2026 00:00:00 -0500"
score: 50
guid: "oai:arXiv.org:2611.25003v1"
image: ""
generated: "2026-11-21T19:04:16+05:30"
---

Language models often produce high-quality individual samples but poor sets, with repeated samples clustering around the same semantic modes. We formalize diverse generation as sampling a size-$K$ subset of complete strings from a determinantal point process (DPP), where the likelihood encodes item quality, and the embedding geometry encodes repulsion between similar outputs. Exact inference over all strings is intractable, so we propose PoolDPP: draw a finite candidate pool from a tractable proposal, importance-weight the candidates toward the target quality, and run a $K$-DPP sampler on the induced pool kernel; a greedy MAP variant provides deterministic selection. We prove a finite-sample bound with an explicit constant: the KL divergence between the sampler's output and the target $K$-DPP decays as O(1/N) in the pool size. Empirically, PoolDPP extends the quality--diversity frontier on open-ended generation and the precision--recall frontier on ambiguous text-to-SQL (Ambrosia), and on mathematical reasoning (GSM8K), it raises diversity at about the same pass@$K$.
