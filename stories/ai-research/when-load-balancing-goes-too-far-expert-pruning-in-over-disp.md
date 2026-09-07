---
title: "When Load-Balancing Goes Too Far: Expert Pruning in Over-Dispersed Mixture-of-Experts Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04453"
authors: ["Berkcan Kapusuzoglu, Connor Pryor, Sangwoo Cho, Supriyo Chakraborty, Shi-Xiong Zhang, Sambit Sahu, Milind Naphade"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.04453v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04453v1 Announce Type: new Abstract: Expert pruning reduces the memory and serving cost of Mixture-of-Experts (MoE) models by removing low-importance experts identified by the router, assuming router probabilities provide a reliable importance signal. We observe that this assumption breaks down under over-dispersed routing, a regime associated with aggressive load-balancing during training, in which tokens are distributed nearly uniformly across experts and importance signals collapse. In this regime, perplexity does not predict downstream task accuracy: on gpt-oss-20B, the lowest-perplexity pruning configuration yields the worst mathematical reasoning, while the highest-perplexity configuration preserves it. This does not occur under standard routing (e.g., Mixtral-8x7B-Instruct), where perplexity and accuracy degrade together. Pruning under over-dispersed routing also exposes a capability trade-off in which no single scoring metric dominates: activation-aware scoring preserves mathematical reasoning but severely degrades knowledge-intensive science (an 18-point gap on GPQA), whereas frequency-based scoring exhibits the reverse. We propose Minimax Expert Score Allocation (MESA), a domain-aware method that iteratively boosts importance scores for experts serving whichever domain is currently worst-affected, minimizing worst-case domain degradation rather than average accuracy. At 25% expert pruning MESA achieves the smallest worst-case degradation across domains, outperforming activation-aware baselines on 7 of 11 benchmarks at a correspondingly reduced memory footprint, and it generalizes to gpt-oss-120B, Gemma-4-26B-A4B, and OLMoE-1B-7B. Our results indicate that over-dispersed routing is a qualitatively distinct pruning regime in which standard assumptions fail, and that recognizing it is a prerequisite for principled expert pruning of load-balanced MoE models.
