---
title: "From Retrieval to Typed Decisions: Calibrated System One Models from Biomedical Sentence Encoders"
category: "Health & Medicine"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.02486"
authors: ["Pritam Deka"]
date: "2026-09-30T20:00:00.000Z"
score: 54
guid: "2610.02486"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.02486.png"
generated: "2026-10-05T19:10:08+05:30"
---

Typed decision models answer schema-constrained questions about a text in one forward pass and return probabilities meant to be thresholded. We ask whether biomedical sentence encoders trained for retrieval are good starting points for such models. We present SBERT2S1, which converts Sentence-Transformers encoders into bi-encoder, cross-head (C) and prior-fused residual (PFR) decision models, together with BIODECIDE, a biomedical typed-decision suite, and MEDLINE-S1, 243k training decisions derived from NLM indexing. Across six parent-retriever pairs, retrieval training improves zero-shot matching of content-bearing options. After fine-tuning, its effect depends on the head: across five pairs and three training-set sizes, retrieval training significantly helps PFR, which keeps the retrieval prior, in 10 of 15 comparisons, but helps C in one and hurts it in five. A matched grid of two heads and five training objectives shows that C outperforms PFR under every objective, and that the released RLCD recipe of open System One models trails cross-entropy by 2.5-3.0 points. The deficit stems mainly from its reward normalisation, which inflates the noisy score-function term 3.6-15-fold; an unbiased leave-one-out estimator recovers most of the gap. After temperature scaling, no objective is clearly better calibrated than cross-entropy. We release the code, the MEDLINE-S1 labels and a model.
