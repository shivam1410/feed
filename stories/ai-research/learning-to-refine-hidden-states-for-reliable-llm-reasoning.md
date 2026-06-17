---
title: "Learning to Refine Hidden States for Reliable LLM Reasoning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17524"
authors: ["Chia-Hsuan Hsu, Jui-Ming Yao"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.17524v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17524v1 Announce Type: new Abstract: Large language models show strong reasoning ability, but their internal reasoning process can remain unstable in complex multi-step settings, where early hidden-state errors may propagate to incorrect predictions. We propose ReLAR, a reinforcement-guided latent refinement framework that iteratively updates hidden representations before decoding. ReLAR maintains a compact latent reasoning state and uses learned depth and action controllers to adaptively determine both the number and direction of refinement steps. The controllers are trained with a policy gradient objective based on step-wise likelihood improvement, enabling efficient input-dependent reasoning without explicit chain-of-thought generation. Experiments on medical, mathematical, multi-hop reasoning, and open-ended generation benchmarks show that ReLAR improves accuracy, generation quality, and reasoning stability with substantially lower inference overhead than explicit reasoning baselines.
