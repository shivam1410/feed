---
title: "More Convincing, Not More Correct: Self-Play Reward Hacking of Reference-Free LLM Judges"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05904"
authors: ["Chenyu Zhou"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2607.05904v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05904v1 Announce Type: new Abstract: Training a language model against its own reference-free judgments (the premise of self-rewarding, self-play, and LLM-as-a-judge pipelines) assumes a model's verdict on a shown answer tracks correctness. We show it fails structurally: conditioned on a candidate, a judge scores plausibility, not correctness, leaving false-positive basins a policy learns to exploit. We measure this with a hidden-anchor audit: a held-out, cross-source exact-match check the judge never sees. On GSM8K with Qwen3 policies, self-play drives the judge's pass rate from 0.72 to 0.94 while true accuracy stays at 0.20 (three seeds). This reward hacking is not white-box gaming: the errors transfer across judge families (Qwen, Llama, Gemma) and scales, a strict three-judge ensemble still accepts 55% of them, and no plausibility-scoring defense closes the basin. The decisive variable is whether the judge commits an answer of its own before using the candidate: committing first drops the false-positive rate from 0.719 to 0.012, blind solving lifts discrimination to 0.96, and used as the training reward the de-anchored channel keeps false positives at zero, preventing the basin rather than only detecting it. A falsifiable bound (the gap is at most 1 - accuracy) predicts which regimes are exposed. The full arc replicates without training under best-of-N selection in code and competition math, and with a Gemma policy.
