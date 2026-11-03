---
title: "Conic Certification of Transformer Attention"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00585"
authors: ["Masoud Ataei"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 42
guid: "oai:arXiv.org:2611.00585v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Attention is the computational core of large language models, yet the verifiers that bound how far an attention head's output can move under input perturbations give no guarantee on how loose their bounds are. A weak certificate therefore cannot be told apart from a fragile model. We develop a conic programming theory of attention certification that supplies this guarantee. We prove that the difficulty lies not in the softmax but in the bilinear interaction of a varying query with the keys. This interaction makes certification NP-hard over boxes and inapproximable once the attention logits can move by a constant amount. A fixed query or listed token substitutions, by contrast, make the exact worst case efficiently computable. An exponential cone moment relaxation then certifies a head with an error bounded quadratically in the perturbation radius by computable quantities, an order that cannot be improved. We also show that relaxations that treat a network one operation at a time, linear bound propagation among them, pay on second-order terms a sum of per-operation maxima instead of one coupled maximum. Computational results on GPT-2 indicate that the theory carries over to a trained model. Against exact worst cases with the query fixed, the certificate attains the predicted second-order accuracy. It is tighter than linear bound propagation on every head, and the looseness of bound propagation tracks the predicted per-operation excess.
