---
title: "On the Convergence of Stochastic Low-Rank Adaptation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.21975"
authors: ["Ru Wang, Chengchang Liu, John C. S. Lui"]
date: "Mon, 27 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.21975v1"
image: ""
generated: "2026-07-27T19:07:27+05:30"
---

arXiv:2607.21975v1 Announce Type: new Abstract: Low-rank adaptation (LoRA) optimizes $J(B,A)=\mathcal L(W_\mathrm{base}+sBA)$ over two adapters $B \in \mathbb{R}^{m \times r}$ and $A \in \mathbb{R}^{r \times n}$ that form a low-rank update to a frozen pretrained weight matrix $W_\mathrm{base} \in \mathbb{R}^{m \times n}$. The prior analysis shows LoRA-GD takes $\exp\{\mathcal{O}(\epsilon^{-2})\}$ oracle calls to find an $\epsilon$-stationary point such that $\|\nabla J(B,A)\|\leq \epsilon$ in the deterministic setting. We sharpen the analysis and show that $\mathcal{O}(\epsilon^{-4})$ full-gradient evaluations suffice for the same first-order criterion. We further study stochastic LoRA under unbiased gradient estimates and finite variance. We propose LoRA-NSGDM, which finds an $\epsilon$-stationary point with $\mathcal{O}(\epsilon^{-8})$ stochastic oracle complexity. Under the additional mean-square smoothness condition, we use variance reduction strategy and propose LoRA-STORM, which improves the stochastic oracle complexity to $\mathcal{O}(\epsilon^{-6})$.
