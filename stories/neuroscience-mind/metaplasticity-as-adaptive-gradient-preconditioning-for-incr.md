---
title: "Metaplasticity as adaptive gradient preconditioning for incremental learning"
category: "Neuroscience & Mind"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14634"
authors: ["Isabelle Aguilar, Zayn Andre Zainal, Omid Kavehei"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.14634v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14634v1 Announce Type: new Abstract: Biological intelligence naturally prevents catastrophic forgetting through Complementary Learning Systems (CLS) theory, a macroscopic consolidation process driven at the local level by synaptic metaplasticity: the continuous, history-dependent neuromodulation of individual synapses. While artificial neural networks struggle with the stability-plasticity dilemma in non-stationary environments, existing solutions often require task labels or incur massive memory overhead, diverging from biological reality. Re-framing this localized neuromodulation as an optimization-driven process, we introduce $\textbf{SynGAP}$: $\textbf{Syn}$aptic $\textbf{G}$eometric $\textbf{A}$daptive $\textbf{P}$reconditioning. SynGAP is a task-free continual learning framework based on adaptive gradient preconditioning. Rather than relying on explicit episodic triggers, SynGAP simulates real-time metaplasticity by maintaining an exponential moving average of the Fisher Information Matrix over a continuous data stream. During the optimization step, these dynamic metaplastic states are translated into a bounded multiplicative mask that preconditions raw gradients, selectively attenuating updates to critical historical parameters. Empirical evaluations demonstrate SynGAP's superior ability to mitigate catastrophic forgetting compared to established baselines. On the Split CIFAR-100 benchmark, SynGAP delivers a $4\times$ increase in accuracy compared to EWC++ and outperforms Experience Replay (ER) by almost $10\%$, while reducing the forgetting measure by over $10\%$ against both methods. Furthermore, on the CORe50 benchmark, SynGAP achieves about $68\%$, a $10\%$ improvement over optimizer baselines. By mathematically formalizing continuous biological metaplasticity as stable gradient-based regularization, SynGAP offers a highly robust and memory-efficient solution for adaptive intelligence at the edge.
