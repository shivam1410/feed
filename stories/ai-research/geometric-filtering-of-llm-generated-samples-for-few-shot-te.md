---
title: "Geometric Filtering of LLM-Generated Samples for Few-Shot Text Classification"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.13866"
authors: ["Benjam\\'in Schindler, Gonzalo A. Ruz"]
date: "Mon, 17 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.13866v1"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

arXiv:2608.13866v1 Announce Type: new Abstract: Large language models (LLMs) can generate synthetic training data for text classification, but the quality of generated samples is heterogeneous: some fall in correct class regions of the embedding space while others land in peripheral or cross-class zones. We propose a geometric filtering framework that evaluates each LLM-generated sample by its Euclidean distance to real class examples in a sentence embedding space, selecting only geometrically consistent candidates. A soft weighting mechanism transforms filter scores into sample weights for classifier training. Evaluated across 13 datasets, 5 classifiers, 10 augmentation methods, and over 6,700 configurations, our method achieves +2.61 percentage points (pp) over SMOTE ($p<0.0001$, Cohen's $d=0.95$, 88.9% win rate). The approach generalizes to named entity recognition (+9.26pp, 100% win rate) without filter modification, and is robust across 5 LLMs from 4 providers. A key finding is that the simplest distance-based filter consistently outperforms complex multi-criteria alternatives.
