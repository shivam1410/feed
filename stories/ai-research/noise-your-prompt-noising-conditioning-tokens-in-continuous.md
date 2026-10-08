---
title: "Noise Your Prompt: Noising Conditioning Tokens in Continuous Diffusion Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09145"
authors: ["Justin Jung"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2610.09145v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

We revisit a standard accepted practice in the continuous diffusion language model literature of fixing conditioning prompt tokens clean during training. We make a very simple modification: also noise the conditioning prompt tokens during training. We demonstrate that under this modified training objective, we achieve better generalization in combinatorial reasoning tasks such as Sudoku and N-Queens, with the largest gains on harder variants ($3.73\% \to 24.65\%$ solve rate on Sudoku Hard), and increased diversity of generated solutions ($50.60\% \to 73.79\%$ coverage on 10x10 N-Queens). We also show measurable improvements to natural language generation quality in modest dataset regimes with Gigaword summarization, but notably demonstrate that gains do not transfer to all natural language tasks (e.g open ended dialogue generation). Our method is a single line change to the training objective, requires no additional inference costs by default, and provides the flexibility of classifier-free guidance inspired guided sampling. Our \href{https://github.com/LateralIntelligence/noise-your-prompt} {code} is publicly available.
