---
title: "When Genomic Masking Priors Fail to Transfer: Strong Variant Prediction, Weak Functional Generation"
category: "Genetics & Biology"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04861"
authors: ["Susu Hu, Preetam Gattogi, Jens Lehmann, Sahar Vahdati, Stefanie Speidel, Julien Vibert"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.04861v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04861v1 Announce Type: new Abstract: Bidirectional discrete diffusion model appears naturally suited to genomic modeling because it can reconstruct missing sequence from both flanks. We developed GenDA (Genomic Density-optimized Absorbing Diffusion) under the additional hypothesis that entropy-guided span placement would concentrate reconstruction pressure on compositionally complex regions, improving both downstream variant-effect prediction and functional sequence generation. Our results only partially support this premise. After supervised fine-tuning, the 202M-parameter GenDA model reaches a pooled ClinVar SNV AUROC of 0.774, exceeding a similarly scaled autoregressive model by 0.103. However, a matched random-span variant reaches 0.777, providing no evidence that entropy guidance causes the ClinVar improvement. More unexpectedly, GenDA fails a zero-shot functional inpainting stress test: across promoters, enhancers, exon boundaries, and intron boundaries, it does not consistently outperform a control that shuffles the native gap while exactly preserving 3-mer composition. Failure is already present for 50--500-bp gaps, although enhancer degradation worsens at longer gaps. Diagnostics identify several boundary conditions: entropy measures local sequence complexity rather than functional importance; 1-mer tokenization limits physical context; training spans are capped at 300 bp; and high absolute AlphaGenome fidelity can coexist with negative control-normalized restoration. These results show that strong fine-tuned variant prediction, a plausible corruption prior, and functional generation are distinct claims that require separate validation.
