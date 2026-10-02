---
title: "Benchmarking System One decision models against trained classifiers and language models for automated decision gates"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00346"
authors: ["Amir Rafe, Subasish Das"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2610.00346v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Software that hands branching decisions to a model needs a declared option and a probability it can threshold. Typed decision models, also called System One models, return such probabilities without generating text, while supervised classifiers and generative language models are the established alternatives. Under matched conditions, one harness sends eight decision-model checkpoints from six families, including the hosted model Jev, and two generative comparators the same semantic requests, and scores supervised and zero-shot classifiers on the same workflow, intent and social-science items. The ranking of the model classes depends on the conditions. With the task's own labels, small trained classifiers are the most accurate on intents and not significantly different from the best decision models on workflows. Without labels, every decision model except the encoder-based checkpoints exceeds a zero-shot entailment classifier on workflows and intents. Read through option-key likelihoods, a larger generative model is level with Jev on workflows and intents and accepts more workflow decisions at five percent risk, and fine-tuned decision checkpoints gain intent accuracy over their untuned backbones. Stored temperatures fitted on few options raise calibration error with many options, and a held-out threshold for five percent in-scope risk still lets Jev accept 0.310 of out-of-scope requests. Swapping yes and no flips 50.5 answers per hundred for Jev, while fine-tuned checkpoints cut their backbones' social-science flips. An intent-trained first stage escalating to Jev matches its accuracy at 0.43 of its cost at full graphics-processor utilization. The results yield condition-dependent design rules for automated decision gates.
