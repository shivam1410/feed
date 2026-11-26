---
title: "JevBench: Metamorphic Coherence Testing for Typed Probabilistic Decision Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31533"
authors: ["Chen Feng"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.31533v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Typed probabilistic decision models return distributions over specified answers, such as yes or no, a set of options or levels on an ordered scale. We ask whether their probabilities remain coherent when questions about the same input are reworded, negated, combined, given different options or placed in different batches. JevBench tests this coherence without gold labels. Its 50 metamorphic relations each test one law of probability or choice across five dimensions: representation, batch independence, probability measure, logical order and choice-set conditioning. Each test changes the question or batch while keeping the input fixed. Every model receives the same requests, fixed in advance. JevBench-240 contains 12,000 tests across 240 synthetic cases in 12 decision domains. A fixed subset of 1,200 tests, JevBench-mini, closely reproduces the full-suite ranking (Spearman 0.983). Across 21 openly released models, coherence scores range from 56.5 to 83.9. Batch independence holds for most models. Additivity fails broadly, particularly for complements, where the probabilities of a proposition and its negation should sum to one. A uniform reference model ignores the input and scores 89.4 at chance accuracy, exceeding every evaluated model's coherence score. Among decoders, accuracy ranges from 82.4% to 89.2%, while coherence ranges from 64.2 to 83.9. These results show why both measures are needed to assess decision models. JevBench is available as an open-source Python package.
