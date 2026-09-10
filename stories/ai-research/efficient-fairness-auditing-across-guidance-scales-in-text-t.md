---
title: "Efficient Fairness Auditing Across Guidance Scales in Text-to-Image Diffusion Models via Causal Abstraction"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09486"
authors: ["Nabila Tasfiha Rahman, Rajatsubhra Chakraborty, Depeng Xu, Lu Zhang"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.09486v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09486v1 Announce Type: new Abstract: Fairness auditing of text-to-image diffusion models often requires generating large numbers of images across sampling configurations, making comprehensive evaluation computationally expensive. We propose a causal-abstraction-based audit instrument for efficiently evaluating fairness under interventions on the classifier-free guidance scale. Given a fixed prompt and a target feature function, we represent the diffusion process as a low-level structural causal model and construct a corresponding high-level model over abstract denoising states. We characterize the projected causal structure, establish identifiability of the fairness-relevant interventional query, and provide sufficient conditions under which the high-level model preserves this query. A probabilistic transformer implements the high-level model as an amortized predictor of target-feature distributions across guidance scales. Experiments evaluate distributional fidelity, fairness-query accuracy, and computational efficiency. We present two auditing demonstrations: one using standard Stable Diffusion 1.5 and another using StayFair, a fairness-enhanced Stable Diffusion model, to examine their behavior across guidance scales.
