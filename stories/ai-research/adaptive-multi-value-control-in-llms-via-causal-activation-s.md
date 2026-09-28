---
title: "Adaptive Multi-Value Control in LLMs via Causal Activation Steering"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30405"
authors: ["Payel Bhattacharjee, Ravi Tandon"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2609.30405v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Large language models (LLMs) are increasingly deployed in settings where responses must reflect multiple, potentially interacting social norms and human values. Activation steering offers a lightweight alternative to training-based alignment by modifying internal activations at inference time. However, prior human-value steering methods have largely considered values in isolation, while direct composition of multiple directions relies on fixed intervention strengths that cannot respond to the model's evolving internal state. Motivated by this key observation, we introduce AIMES, a framework for adaptive multi-value activation steering. AIMES constructs layer-specific bipolar directions for moral-foundation values and uses intermediate-layer vocabulary readouts as online observers. An observer-guided controller then adapts the strength of each requested value intervention at every decoding step based on its current observed state, without training a separate value-state estimator. Across multiple instruction-tuned model families, value combinations, and intervention depths, we find that multi-value controllability varies across both value combinations and intervention locations. Compared with fixed joint steering and prompt-based steering, AIMES shows depth-dependent advantages that are broadly supported across two independent evaluators, with some variation in the precise depth at which specific control effects emerge. These advantages come with smaller realized activation-space interventions than fixed-joint steering and comparable response quality. Overall, our results suggest that online observer feedback can provide lightweight, state-aware adaptation for single-pass multi-value steering.
