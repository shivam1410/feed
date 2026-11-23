---
title: "CreditFilter: Calibrated Token Weights over the Within-Response Entropy Rank for RLVR"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.27227"
authors: ["Hanqing Zhao, Liuyue Xie, Rong-Cheng Tu, Xu Zhang, Davide Modolo, Dacheng Tao"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2611.27227v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

Critic-free reinforcement learning with verifiable rewards (RLVR) typically assigns a uniform advantage to every token. Token-reweighting heuristics like the 80/20 mask favor high-entropy tokens, but fail to measure a token's actual impact on the outcome. We formalize this impact as the forking value: the variance of the success probability over the policy's next-token choices. The expected forking values along a response sum exactly to the reward variance. Token credit is thus, in expectation over a prompt's responses, a fixed budget spent at the forks. This motivates weights that redistribute credit within a response. The forking value factorizes into a fork consequence, which requires costly continuations to estimate, and a fork probability, which the softmax provides. On Qwen3-8B-Base, this fork probability decays exponentially with a token's within-response entropy rank at class-specific rates, revealing that most tokens carry negligible forking value. CreditFilter weights each token by an exponential window over the same rank. The window is calibrated to this fork-probability envelope, under an approximately flat fork consequence. CreditFilter needs no extra forward passes and is stabilized by difficulty damping and an entropy-gated fallback. Averaged over three seeds, it outperforms DAPO by 7.7 points on MATH500 and by 10.5 and 9.1 points on AIME24 and AIME25. Its dynamically adaptive variant matches it. The ablations show that both parts matter: ranking tokens within each response rather than across the batch, and matching the window's decay rate to the envelope. Code is available at https://github.com/yoctta/CreditFilter.
