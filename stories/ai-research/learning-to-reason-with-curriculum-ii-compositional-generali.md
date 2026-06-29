---
title: "Learning to Reason with Curriculum II: Compositional Generalization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27721"
authors: ["Nived Rajaraman, Audrey Huang, Miroslav Dudik, Robert Schapire, Dylan Foster, Akshay Krishnamurthy"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.27721v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27721v1 Announce Type: new Abstract: Compositional generalization, the ability to solve complex problems by combining solutions to simpler sub-problems, is a fundamental capability of both natural and artificial intelligence, and a key mechanism underlying chain-of-thought reasoning. However, the theoretical underpinnings of compositional generalization remain poorly understood: when and why does decomposing a problem into parts yield more efficient learning than solving it directly? We study this question through the canonical problem of learning to simulate semiautomata (predicting the outcome of $T$ steps of sequential computation), a model that captures state tracking, regular language recognition, and modular arithmetic. We show that an autocurriculum-based approach building on Part I of this series, recursively decomposing longer sequences into shorter sub-problems, learning to solve them, and composing the solutions, achieves dramatically better statistical complexity than direct methods. (i) For a setting inspired by supervised fine-tuning (SFT) where the learner receives interactive feedback on intermediate states of the computation, curriculum facilitates learning from only $2^{\mathcal{O}(\sqrt{\log T})}$ tokens of supervision; i.e., subpolynomial in the sequence length $T$, overcoming the $\Omega(T)$ token barrier required by direct simulation. (ii) For a setting inspired by reinforcement learning with verifiable rewards (RLVR), where the learner improves a pre-trained reference model using an outcome verifier, we show that curriculum reduces the requirement on the reference model from coverage at the full sequence length $T$ to coverage at a shorter block length $B \ll T$, an exponentially weaker condition.
