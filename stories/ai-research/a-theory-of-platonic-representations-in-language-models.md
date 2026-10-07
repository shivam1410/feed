---
title: "A theory of platonic representations in language models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07168"
authors: ["Darshil Doshi, Wenjie Zhou, Corinna Elena Wegner, Daniel J. Korchinski, Santiago Acevedo, Matthieu Wyart"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2610.07168v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Representations of translated sentences are similar in the inner layers of multilingual language models -- an observation connected to the platonic representation hypothesis, yet unexplained theoretically. We provide an explanation based on the assumption that data have a hidden hierarchical structure whose abstract levels are shared across languages while surface levels are modality- or language-specific. Concretely, we generate synthetic languages from probabilistic context-free grammars sharing upper-level but not lower-level production rules. In this setting the Bayes-optimal next-token predictor is belief propagation (BP); encoding its messages in successive layers yields analytical predictions that agree well with transformers trained on the same data. The framework explains why cross-lingual similarity peaks in middle layers, coexists with language-specific structure, and strengthens with language proximity, model quality and data exposure. It distinguishes similarity (shared neighborhood geometry) from alignment (shared coordinates), showing that the latter occurs when code-switched data, i.e. mixed-language sentences, are abundant enough. It further predicts that subtracting from each layer the component linearly predictable from the preceding one increases cross-lingual similarity, which we confirm in pretrained LLMs.
