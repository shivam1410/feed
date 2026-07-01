---
title: "Multistage Defer Trees for Hybrid Interpretability: If at First You Can't Succeed, Tree Again"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.30995"
authors: ["Zakk Heile, Hayden McTavish, Margo Seltzer, Cynthia Rudin"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.30995v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.30995v1 Announce Type: new Abstract: Recent work has shown that well-optimized individual decision trees can match complex black box models in some settings, primarily in noisy domains. For the remaining settings, however, complex ensembled compositions of trees often achieve higher accuracy at the cost of interpretability, leaving practitioners with difficult modeling decisions along an accuracy-interpretability tradeoff. Ideally, we would like to classify as much of the data as possible with one or a small number of trees, achieving interpretability for most samples while maintaining state-of-the-art accuracy. We introduce Multistage Defer Trees: a sequence of sparse decision trees that each make predictions for most samples, while deferring a small proportion to the next tree in the sequence or, ultimately, to a black box. We demonstrate that we can train this model class to match the performance of complex tree-based ensembles while routing most samples through only one or a small number of sparse decision trees. We discuss a range of techniques for training these models while maintaining simplicity. Our method expands the accuracy--interpretability frontier in settings where single-tree methods remain insufficient, demonstrating that even when complex models are necessary, they need not be fully opaque.
