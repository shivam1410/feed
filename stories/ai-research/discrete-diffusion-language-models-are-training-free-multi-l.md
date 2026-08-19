---
title: "Discrete Diffusion Language Models Are Training-Free Multi-Label Classifiers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14649"
authors: ["Pawan Kumar"]
date: "Wed, 19 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.14649v1"
image: ""
generated: "2026-08-19T19:06:05+05:30"
---

arXiv:2608.14649v1 Announce Type: new Abstract: We present dLLM-SetScore, a training-free method that uses discrete masked-diffusion language models for multi-label text classification. For each candidate label, it asks a short yes/no question and compares the probabilities of the two answer tokens at one masked position. The method uses no task-specific fine-tuning or training on textual-entailment datasets; a 200-example labelled validation slice selects thresholds, temperature, and prompt wording. We first show that placing all labels in one prompt creates a strong slot-position asymmetry: the first answer slot is predicted positive on $99.4\%$ of GoEmotions examples and $100\%$ of Reuters examples. Per-label scoring places every label in the same syntactic position, making predictions invariant to label order and avoiding this artifact. We evaluate LLaDA-8B and Dream-7B on six datasets against NLI models, an autoregressive LLM, SetFit, and supervised classifiers. On the five datasets shared by both diffusion families, Instruct checkpoints improve macro-F1 in 9 of 10 comparisons and micro-F1 in 8 of 10, although these comparisons do not identify the cause. Within our protocol, LLaDA-Instruct records the highest training-free values for both Reuters and ECtHR metrics. We prove permutation invariance, characterize thresholded decisions under weighted Hamming loss, and derive shortlist ceilings for recall and F1. An exploratory local Joint Set Refinement step lowers F1 from biased and unbiased initializations and is retained as a negative result.
