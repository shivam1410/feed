---
title: "Third Eye: Beyond Immediate Gains in Recursive Self-Improvement"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.12988"
authors: ["Sujato Dutta, Padala Indira Sneha, Kypu Mahitha, Shashank Vanga, Neeraj Choudhary"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.12988v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Does a useful self-update remain useful after the model updates again? Third Eye separates immediate performance from the outcome of a further native update. We evaluate five 3-8B backbones on math and code: 64 fresh runs, three candidates per run, and three continuations per candidate. Selection and final scoring use disjoint items. In the balanced Qwen3-4B/Llama-3.2-3B comparison, immediate-selected utility is near zero, but continuation reduces it by 1.78 percentage points (simultaneous 95% interval [0.68, 2.88]). Candidate-averaged immediate utility is already negative: selection partly accounts for the apparently neutral first step. Continuation also lowers utility for SmolLM3-3B and Llama-3.1-8B; Qwen3-8B remains inconclusive. Target and out-of-distribution losses dominate retention changes. Matched recipe and recipient-donor controls identify neither a reliable mitigation nor a single mechanism. The results support evaluating persistent self-updates as adaptation transitions, with independent scoring and a no-update baseline, rather than interpreting immediate performance as their full value.
