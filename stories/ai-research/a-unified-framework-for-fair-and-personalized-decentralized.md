---
title: "A Unified Framework for Fair and Personalized Decentralized Learning under Communication Constraints"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26493"
authors: ["Krishnendu S. Tharakan, Carlo Fischione"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.26493v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26493v1 Announce Type: new Abstract: Decentralized learning systems aim to collaboratively train models across multiple clients without relying on a central coordinator. While decentralization improves scalability, privacy, and robustness, it also exacerbates three fundamental challenges: statistical heterogeneity across clients, fairness in client-level performance, and stringent communication constraints. This raises a natural question: \emph{how fair can decentralized learning be under limited communication?} We address this question by presenting a unified framework for decentralized learning under communication constraints, bringing together graph-based personalization, agnostic fairness, and compressed event-triggered communication. Specifically, we propose a new algorithm DMFL-SQ, a decentralized multi-task learning algorithm that couples personalized model training over a communication graph with an agnostic mixture fairness objective, while reducing communication through sparsification, quantization, and event-triggered synchronization. We establish convergence guarantees for general non-convex objectives and show that DMFL-SQ achieves an $\mathcal{O}(T^{-1/2})$ rate in expected squared Moreau-envelope stationarity despite sparse, quantized, and event-triggered communication. We further derive PAC-Bayes generalization guarantees for the fairness-aware mixture objective. Experiments on CIFAR-10 and the real heterogeneous MUSMET EEG dataset demonstrate that DMFL-SQ substantially reduces communication while maintaining predictive performance and improving fairness across clients. Together, our theoretical and empirical results show that personalization, fairness, and communication efficiency can be jointly achieved in decentralized learning while preserving the dominant convergence rate.
