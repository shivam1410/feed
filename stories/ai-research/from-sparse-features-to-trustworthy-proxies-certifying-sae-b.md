---
title: "From Sparse Features to Trustworthy Proxies: Certifying SAE-Based Interpretability"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18383"
authors: ["Dibyanayan Bandyopadhyay, Asif Ekbal"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.18383v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18383v1 Announce Type: new Abstract: Sparse autoencoders (SAEs) are increasingly used to extract interpretable features from language models (LMs), yet a central question remains: when can an SAE-based explanation be treated as a faithful view of an underlying frozen LM We study this through a post-hoc generalization framework that certifies the LM via a sparse proxy, obtained by replacing a native hidden activation with its pretrained SAE reconstruction. Our framework derives an upper bound on the base model's expected risk using four measurable quantities: proxy risk, SAE reconstruction gap, concept-pool mismatch, and sparse complexity. We interpret this certificate as an operational criterion for explanatory faithfulness. In particular, a non-vacuous bound indicates that the extracted sparse features retain meaningful predictive information, while small reconstruction and mismatch errors indicate that the proxy remains behaviorally close to the original model. Empirically, we show that the bound becomes non-vacuous on GPT-2 Small, Gemma-2B, and Llama-3-8B at practical sample sizes. A detailed layerwise analysis of Llama-3-8B reveals a strong depth dependence, with later layers becoming much easier to certify, associated with both stronger local fidelity and weaker downstream error amplification. Finally, through feature-shuffling ablations, we show that the decomposition distinguishes genuine semantic alignment from mere statistical sparsity, providing a useful diagnostic for when SAE-based explanations become less reliable.
