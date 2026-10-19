---
title: "Refusal Is Not Robustness: Measuring Harmful Reachability in Autoregressive Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22754"
authors: ["Parv Kapoor, Teresa Fortes, Claudia Mamede, Rui Abreu, Jonathan Aldrich, Eunsuk Kang"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.22754v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

LLM safety evaluations via jailbreaking typically index on attack success rate (ASR): whether a generated response violates safeguards. However, ASR only evaluates sampled outputs and provides little information on the underlying generation process. Autoregressive language models define distributions over possible outputs, and a sampled refusal can coexist with substantial probability mass on harmful generation paths. We study this hidden structure through bounded continuation analysis (BCA), which models autoregressive generation as a stochastic process over token prefixes and computes the finite-horizon probability that generation reaches a harmful continuation. BCA constructs a bounded continuation tree, labels terminal continuations with a semantic harm evaluator, and estimates harmful reachability using exact probabilistic model checking. BCA complements ASR by measuring how much harmful behavior remains accessible beneath a sampled safe response. This makes it useful for distinguishing models that look identical under measured ASR values, and allocating red-team effort toward regions of the generation process with greater hidden risk. Across four instruction-tuned LLMs and 100 JailbreakBench behaviors, we show that BCA effectively quantifies hidden harmful behavior and provides a useful signal to guide red teaming.
