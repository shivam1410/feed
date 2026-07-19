---
title: "Token Time Continuous Diffusion for Language Modeling"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.14106"
authors: ["Parikshit Bansal", "Sujay Sanghavi"]
date: "2026-05-06T20:00:00.000Z"
score: ""
guid: "2607.14106"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.14106.png"
generated: "2026-07-19T19:52:10+05:30"
---

In this paper we introduce token time continuous diffusion (TTCD), a new diffusion language model which (a) operates in continuous space, deterministically mapping Gaussian noise to a final token canvas with no further sampling, and crucially (b) incorporates a new notion of per-token times, with some tokens proceeding from noise to token at a faster rate than others. Continuous space modeling helps TTCD avoid the parallel sampling of multiple tokens, which is a key source of inaccuracy at high speedups for models that iterate purely in discrete space. The notion of per-token times helps TTCD to better model conditional generation, allows for more sure tokens to proceed at a faster rate, and allows for differentiated inter-token influences during refinement. TTCD outperforms discrete models at high speedups. We train a 160M parameter TTCD model on OpenWebText, and then self-distill it; we find that at high speedups we are comparable in unconditional generation quality, and outperform in conditional generation, several existing models of similar size trained, on the same data, and self-distilled. We achieve similar gains in Sudoku solving as well.
