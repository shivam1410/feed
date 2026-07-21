---
title: "Quantizing Recursive Reasoning Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16237"
authors: ["Thorir Mar Ingolfsson, Wajeeha Tahir, Anna Tegon, Lionnus Kesting, Gamze \\.Islamo\\u{g}lu, Luca Benini"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.16237v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16237v1 Announce Type: new Abstract: Recursive reasoning models solve hard puzzles by applying compact, weight-tied blocks over many refinement steps. Because these blocks are reused many times, quantizing them creates a unique dynamical problem: the quantization error is incurred at every step. While 8-bit quantization (integer or float) preserves accuracy, moving to a per-tensor 4-bit format causes a systematic bias to accumulate. The ensuing drift catastrophically degrades exact-solution accuracy on Sudoku from 84.1% to 0.0% (only ~25% of cells correct). In this work, we show that this collapse is caused by activation-scaling granularity rather than bit-width or number format. Crucially, moving to per-block scaling completely restores the transition. To implement this, we apply MXInt4, a blockwise integer activation format, to recursive reasoning models. It is competitive with blockwise float formats on our tasks, while keeping integer elements and power-of-two block scales. Finally, recursion depth and reuse modulate quantization sensitivity, with the deepest architecture we test (the EqR equilibrium model) the most sensitive. Yet blockwise scaling overcomes this vulnerability, staying robust across these architectures and transferring to the open-ended ARC-AGI benchmark.
