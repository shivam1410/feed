---
title: "Mixture of Wide Experts: Sparse Routing for Interpretable Native Coordinates"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03655"
authors: ["Tavish Mankash, Vardhaman Kalloli, Keshava Prasad, Deepan Muthirayan"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03655v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Language models often spread a concept across many internal dimensions, making their features difficult to interpret. Sparse autoencoders (SAEs) recover clearer features after training. We ask whether models can instead learn interpretable output coordinates directly. We introduce Mixture of Wide Experts (MoWE), a sparse feed-forward layer in which selected experts read the full representation but write to fixed, disjoint output coordinates. On a controlled task with known hidden causes, this design preserves predictive performance while localizing causes more clearly than dense and standard mixture-of-experts (MoE) models. At approximately matched compute, we train two 19-layer runs of each architecture for 10 billion tokens. MoWE achieves evaluation cross-entropy 2.417 versus 2.452 for dense, while standard MoE reaches 2.22. We measure native-coordinate readability by asking a language-model judge to describe each coordinate from passages where it is strongly active and test that description on new passages. Correcting for descriptions that also fit other coordinates gives a specificity score of 0.523 for MoWE, 0.375 for dense, and 0.268 for standard MoE. TopK SAEs trained on the same FFN updates score 0.489 for dense and 0.556 for MoWE, making native MoWE comparable to the dense SAE. In the first case study, we identify a four-coordinate causal path supporting the model's prediction of degrees after the prompt A right angle is 90. We then copy seven angle-related coordinate values into the model as it processes A rectangle has four, changing its next-token prediction from sides to degrees. In the second, one fixed coordinate set detects hazardous requests and another steers the next token toward refusal. These examples show that MoWE combines sparse conditional computation with coordinates that can be identified and reused directly.
