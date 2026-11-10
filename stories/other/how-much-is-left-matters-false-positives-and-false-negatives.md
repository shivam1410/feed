---
title: "How Much Is Left Matters: False Positives and False Negatives in Partial-Prompt Contamination Tests"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10307"
authors: ["Abhishek Anand"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10307v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Partial-prompt completion, where a model receives the first part of a benchmark problem and is checked for whether it reproduces the rest, is a widely used test for benchmark contamination. We audit this test on seven open-weight models using MATH-500 and recent AIME 2025/2026 problems, which serve as true negatives. Memorization flags depend strongly on how much text remains: for every model, problems with at most 8 leftover words are flagged several times more often than problems with at least 25 (31.5% vs. 5.5% for Qwen2.5-7B-Instruct), and half to three-quarters of all ROUGE-based flags come from short leftovers. On true negatives, a ROUGE-L >= 0.75 threshold flags up to 6.7% of problems at a 60% prefix, and at an 80% prefix even exact match flags 8.6% (pooled over models; 6.2% on AIME 2026, which postdates every model), against 0% at 40-60%. The test also misses contamination upstream: models distilled from Qwen2.5-Math, whose base is heavily flagged in prior work, show almost no model-specific recall. Calibrating each model against models from other families removes most flags while isolating a consistent Qwen2.5-specific signal at every prefix length. We recommend length-stratified reporting, prefixes of at most 60%, style-matched post-cutoff controls, and cross-family calibration.
