---
title: "FACT: Fixed-Budget Allocation and Cross-Step Training for Speculative Decoding"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23463"
authors: ["Hadi Fares, Mayssa Hajj Hassan, Ali Salman, Ammar Mohanna"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23463v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Speculative decoding accelerates language-model generation by verifying multiple draft tokens in a single target-model pass. However, better draft predictions and longer accepted continuations do not necessarily produce faster generation. To examine this gap, we present FACT (Fixed-Budget Allocation and Cross-Step Training), an experimental framework for studying how drafter training, candidate allocation, and execution conditions jointly affect acceptance and latency. Using a lightweight feature-prediction drafter with a frozen Llama-3-8B-Instruct target under greedy decoding, we first examine how training translates into accepted tokens. Backpropagating through predicted-feature rollouts with greater weight on early steps improves acceptance by 15-24% over uniformly weighted detached training, yet average rollout proxy cross-entropy does not reliably rank drafters by acceptance. Beyond prediction quality, the placement of draft candidates also matters: with a fixed 256-node budget and matched per-depth widths, replacing static allocation with confidence-guided allocation increases speedup over autoregressive decoding from $1.46\times$ to $2.02\times$ on HumanEval and from $1.31\times$ to $1.75\times$ on MT-Bench. This allocation benefit extends to an independently trained drafter, but stronger training does not consistently amplify it, showing that the two improvements do not necessarily reinforce each other. Even these speed gains depend on execution conditions: changing only host-thread settings can nearly eliminate speedup without changing acceptance. Together, these findings show why training and allocation must be evaluated jointly using both acceptance and end-to-end latency under controlled execution conditions.
