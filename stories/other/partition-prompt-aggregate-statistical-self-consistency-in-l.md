---
title: "Partition, Prompt, Aggregate: Statistical Self-Consistency in Language Models"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.15277"
authors: ["Patrik Wolf", "Thomas Kleine Buening", "Andreas Krause", "Celestine Mendler-Dünner"]
date: "2026-07-15T20:00:00.000Z"
score: ""
guid: "2607.15277"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.15277.png"
generated: "2026-07-19T19:52:10+05:30"
---

In-context learning is commonly interpreted as a form of conditional inference, in which the prompt specifies a context and the model's output is treated as an estimate of the corresponding conditional distribution. If this interpretation holds, then LLM estimates should satisfy basic probabilistic identities. In particular, the law of total probability asserts that prior-weighted conditional distributions aggregate into population-level marginals over any valid partition of the population. In this work, we investigate to what extent LLM estimates adhere to this self-consistency principle. We use binary trees as an evaluation scaffold to recursively partition a population into increasingly fine-grained subpopulations. We then prompt LLMs with verbalized subpopulation descriptions in context, aggregate the resulting estimates back into population-level estimates, and compare them across partitions of varying granularity. Applying this protocol across problem domains and state-of-the-art frontier models, we show widespread violations of basic consistency properties. An in-depth study of persona prompting reveals a pattern we call the macro fallacy: estimates reconstructed from more fine-grained subpopulation responses are often better aligned with human reference data than direct population-level estimates. This effect persists across variations in tree structure and estimation task, and can be partially recovered through implicit prompting. Together, these findings suggest that models possess relevant subpopulation knowledge but do not reliably propagate it into aggregate estimates. This gap establishes statistical self-consistency as an unsaturated, reference-free criterion for evaluating LLMs.
