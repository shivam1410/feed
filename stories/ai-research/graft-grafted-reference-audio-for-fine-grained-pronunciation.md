---
title: "GRAFT: Grafted Reference Audio for Fine-grained Pronunciation in Zero-shot Text-to-Speech"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.02633"
authors: ["Antonis Asonitis, Francesco Verdini, Aref Farhadipour, Vijeta Avijeet, Pierre-Edouard Honnet, Marzieh Razavi, Juan Pablo Zuluaga Gomez"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.02633v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.02633v1 Announce Type: new Abstract: We present GRAFT, a per-word pronunciation conditioning mechanism for text-to-speech neural codec language modeling. Existing systems reach high intelligibility and naturalness but inherit the ambiguity of text and mispronounce rare proper nouns, loanwords and technical terms. Even phoneme-conditioned models offer no direct acoustic handle for per-word pronunciation. GRAFT controls the pronunciation of a chosen word from a short spoken sample of it, encoded with the model's own speech tokenizer and bound to the word's position in the prompt. Voice conversion during training-data construction disentangles the hint speaker from the target speaker, so the hint may come from any voice while the output stays in the target voice. In a blind English listening study, human raters rank GRAFT first by a clear margin, judging its rendering of the difficult word closest to a reference recording of that word. On a five-language objective benchmark, GRAFT reduces target-word phoneme error rate by 22-39% over the identical text-only backbone and outperforms competitive open-source zero-shot systems, both phoneme- and text-conditioned, on target-word pronunciation, while preserving speaker similarity and naturalness.
