---
title: "When Autoregressive Consistency Hurts Safety Alignment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04168"
authors: ["Bochen Lyu, Yiyang Jia, Xiaohao Cai, Zhanxing Zhu"]
date: "Fri, 05 Jun 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.04168v1"
image: ""
generated: "2026-06-05T13:37:27+05:30"
---

arXiv:2606.04168v1 Announce Type: new Abstract: Safety alignment in large language models (LLMs) is fragile in part because it is often shallow: fine-tuning mainly reshapes the model's behavior near the first few output tokens. We argue that this phenomenon can be understood through autoregressive consistency, the tendency of next-token prediction to preserve and extend the current response trajectory consistently. By analyzing the learning dynamics of safety alignment, we show that autoregressive consistency can concentrate alignment updates on early tokens, offering a mechanistic explanation for shallow safety alignment. The same mechanism also predicts a broader class of attacks on LLMs: attacks that induce harmful continuation states at arbitrary positions in the output trajectory. As a concrete example, we introduce random insertion attack, which inserts a short harmful span into an otherwise safe refusal trajectory and exploits autoregressive consistency to sustain the resulting harmful branch, thereby bypassing safety alignment. Notably, a short harmful span can redirect the generation to be harmful even after a long refusal prefix, highlighting autoregressive consistency as a potential broader failure mechanism. This suggests that safety alignment should also break harmful autoregressive consistency throughout the output trajectory. We therefore propose adversarial safety alignment, an initial framework based on worst-case harmful continuation states, and instantiate it with random worst-insertion training. Overall, our results suggest that autoregressive consistency should be treated as a central consideration in both safety alignment and attack design.
