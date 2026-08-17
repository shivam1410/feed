---
title: "CutClean: Neural Network Pruning for Privacy-Preserving Inference"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.13773"
authors: ["Leonardo Magliolo, Vito Paolo Pastore, Giuseppe Valenzise, Enzo Tartaglione"]
date: "Mon, 17 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.13773v1"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

arXiv:2608.13773v1 Announce Type: new Abstract: Neural networks are increasingly deployed in high-stakes applications with growing privacy leakage concerns. We show that this privacy leakage can occur even in the absence of representation imbalances that lead to traditional dataset biases. This poses significant privacy risks when deploying models that process sensitive attributes. In this context, we propose CutClean, a privacy-aware pruning method that allows to reduce privacy information flow through the network, while increasing its sparsity. Our approach employs auxiliary linear privacy heads placed at each network's block to quantify information leakage, and further applies increasing levels of sparsity to remove the private attribute leakage, measured in terms of the accuracy of the privacy head attached to the last block. Experiments on synthetic and real-world datasets demonstrate that our approach effectively minimizes private information flow while achieving high sparsity rates and preserving classification target accuracy.
