---
title: "Parasite Features: Causal Abstraction Through Spurious Pathways"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.26711"
authors: ["Denis Sutter, Qing Yao, Sasha Boguraev, Julian Minder, Antonio Di Maio, Thomas Hofmann, Kyle Mahowald, Tiago Pimentel"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 45
guid: "oai:arXiv.org:2611.26711v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

Causal Abstraction defines a notion of \emph{equivalence} between a neural network and an algorithm, thus serving as a powerful framework for mechanistic interpretability. In this paper, however, we show the existence of a class of \emph{spurious features} which straightforwardly pass such equivalence tests. Suppose there are two directions in a model's representation space where: (i) one discriminates the input based on some feature, and (ii) the other steers the model towards a certain output. Interpretability methods based on Causal Abstraction (e.g., Distributed Alignment Search) can \emph{spuriously} simulate these directions' combined behavior by leveraging pathways passing through them, giving the impression that the model implements this feature. In such cases, we say the method discovered a \defn{parasite feature}. Experimentally, we show that Distributed Alignment Search finds parasite features using linear alignment maps in two tasks: syntactic agreement and two-digit addition. Our paper highlights an important consideration for Causal Abstraction and contributes to the ongoing debate about best practices for mechanistic interpretability.
