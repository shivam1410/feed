---
title: "Where to cut, how deep: BPE and Unigram-LM on chemistry SMILES"
category: "Chemistry & Materials"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.05691"
authors: ["Hunter Heidenreich"]
date: "2026-07-05T20:00:00.000Z"
score: 62
guid: "2607.05691"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.05691.png"
generated: "2026-07-09T19:06:43+05:30"
---

Byte-pair encoding and Unigram-LM produce distinctly different subword vocabularies in chemical language models with no convergence between approaches. Researchers tested both tokenization methods across diverse chemical corpora and vocabulary sizes, finding that the two methods create fundamentally different tokenization schemes regardless of corpus composition or vocabulary constraints. This finding highlights that tokenization choice in domain-specific NLP—particularly for structured languages like chemistry SMILES notation—significantly impacts model behavior and performance. The lack of convergence suggests that tokenization strategy should be carefully selected rather than assumed equivalent across chemical language models, and that domain-specific tokenization analysis is crucial for chemistry applications.
