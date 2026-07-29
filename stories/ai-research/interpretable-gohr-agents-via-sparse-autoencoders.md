---
title: "Interpretable GOHR Agents via Sparse Autoencoders"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.25132"
authors: ["Shiwei Tan, Yusong Zhao, Weiyi Qin, Wentian Wang, Jacob Feldman, Lazaros K. Gallos, Paul B. Kantor, Vladimir Menkov, Hao Wang"]
date: "Wed, 29 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.25132v1"
image: ""
generated: "2026-07-29T16:31:06+05:30"
---

arXiv:2607.25132v1 Announce Type: new Abstract: A central challenge in interpreting learned decision-making systems is to determine whether their internal representations contain concepts that help explain their behavior. We report interpretability experiments for a tokenized autoregressive Transformer agent in the Game of Hidden Rules (GOHR). We focus on a compact two-rule task in which both hidden rules map object shapes to target buckets, but with different permutations. The policy is trained on episodes sampled from these two hidden rules and then evaluated with fixed weights. It is never given a rule label and does not use an explicit rule classifier; any rule information must be inferred implicitly from interaction history. In this setting, the correct rule is not identifiable before the agent tries an informative move and observes accept/reject feedback. Sparse autoencoders (SAEs) trained on the agent's decision-token embeddings recover this structure. When held-out decisions are labeled by simple concepts such as the chosen shape or bucket, SAE dimensions that are highly selective for a concept cover most decisions where that concept is present. Individual SAE dimensions also correspond to interpretable strategies such as probing one rule hypothesis and switching after negative feedback.
