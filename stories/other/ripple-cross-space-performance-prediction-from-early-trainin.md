---
title: "RiPPLE: Cross-Space Performance Prediction from Early Training for Neural Architecture Search"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12418"
authors: ["Yifan Yang, Zhaoyan Wang, Zheng Gao, Xiaoyu Li, Jiaojiao Jiang"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12418v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12418v1 Announce Type: new Abstract: Neural architecture search (NAS) evaluates candidate networks, but fully training enough architectures to rank an entire space is expensive. Zero-cost proxies score architectures at initialization, yet their ranking quality varies across search spaces. Learned predictors reduce evaluation cost but typically require fully trained labels or partial-training features for individual candidates. We introduce $\textbf{RiPPLE}$, $\underline{\textbf{R}}$anking v$\underline{\textbf{i}}$a $\underline{\textbf{P}}$refix-$\underline{\textbf{P}}$ropagated $\underline{\textbf{L}}$abel $\underline{\textbf{E}}$xtrapolation, which treats partial training as a source of labels for a small coverage set of anchors. RiPPLE trains these anchors to an early prefix, extrapolates their learning curves to surrogate labels, and propagates the labels over label-free architecture features. The early-training signal remains a label on the anchors rather than a per-candidate feature. Feature, readout, and encoding rules are selected without held-out accuracy and reused across search spaces. We evaluate the method on twelve benchmark cells from four search-space families and on the larger DARTS space. The results examine ranking quality, label efficiency, architecture selection, and the roles of readout, coverage, and propagation. RiPPLE provides a whole-space ranking from a fractional anchor-training budget, with comparisons interpreted under their respective evaluation and cost protocols.
