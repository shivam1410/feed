---
title: "Generalization Is Stability, Not Accuracy: Multi-Axis Evaluation of LLMs"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.01428"
authors: ["Nagham Omar", "Mahmoud Jabarin", "Maya Rozenshtein", "Rom Himelstein", "Avi Mendelson", "Amit LeVi"]
date: "2026-09-30T20:00:00.000Z"
score: 62
guid: "2610.01428"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.01428.png"
generated: "2026-10-04T19:07:43+05:30"
---

Generalization in large language models (LLMs) is the ability to produce consistent and semantically stable outputs when the same input is expressed in different ways. Existing work typically evaluates generalization through aggregate accuracy on a single prompt format, task, or set of variations, which conflates robustness with overall benchmark performance. In this work, we show generalization evaluation at the level of individual examples, across multiple input variants, and across different aspects of model behavior, focusing on variability rather than reducing performance to a score that can be improved through narrow training or other ways that obfuscate generalization evaluation. Following this view, we introduce the Stability-Aware Generalization Objective (SAGO), a framework that measures how much model behavior changes for the same input under different variations and benchmarks, capturing variability across several dimensions including generation consistency, internal activations, confidence, and response mirroring. We show that many commonly used models exhibit statistically significant and consistent generalization instability: no model generalizes uniformly, behavioral axes capture independent failure modes, and cross-dataset variation can reverse model rankings.
