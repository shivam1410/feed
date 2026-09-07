---
title: "Training-Free Halving of Activated Experts in Fine-Grained Mixture-of-Experts Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04575"
authors: ["Xing Chen, Hengshuai Yao"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.04575v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04575v1 Announce Type: new Abstract: Modern fine-grained Mixture-of-Experts (MoE) models route each token to a small number of experts and renormalize their router probabilities. We show that this renormalization implicitly calibrates expert output gain to the training top-$k$: reducing $k$ at inference changes not only which experts are used but also the strength of the expert branch. We separate these effects by activating the top $k_1$ experts while normalizing by the probability mass of the top $k_2$ experts, introducing one integer with no parameters, training, or measurable compute overhead. On Qwen3.6-35B-A3B, reducing from 8 to 4 experts causes a 4.65-point MMLU drop under standard renormalization but only 0.35 points with $k_2=16$, while halving routed-expert compute. The result replicates on the $11\times$ larger Qwen3.5-397B-A17B, where reducing from 10 to 5 experts loses only 0.55 points with an appropriate reference set. Removing renormalization entirely is catastrophic, showing that preserving a suitable reference mass is crucial. We further find that perplexity and downstream accuracy favor different $k_2$, cautioning against selecting MoE compression settings using unlabeled text alone. Analyses also show that expert identity matters substantially more than expert weighting, while balanced and domain-specialized routing leaves limited room for expert pruning.
