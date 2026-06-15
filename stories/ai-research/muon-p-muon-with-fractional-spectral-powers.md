---
title: "Muon$^p$: Muon with Fractional Spectral Powers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.13867"
authors: ["Yihe Dong, Will Sawin"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.13867v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.13867v1 Announce Type: new Abstract: Muon is an increasingly widely used optimizer that replaces a gradient $G=USV^\top$ with its polar factor $UV^\top$, thereby flattening the singular spectrum. However, full flattening discards singular-value information that may matter for adaptation. We introduce Muon$^p$, a Muon-style optimizer that instead uses fractional spectral-power updates $US^pV^\top$ for rational $p\in(0,1)$, interpolating between Muon and gradient descent. To make it practical, we prove that fractional spectral powers cannot be computed by any fixed univariate polynomial iteration, and furthermore derive low-degree odd bivariate recurrences that approximate $US^pV^\top$ using only matrix multiplications, preserving Muon's matrix-multiplication-only structure and compute complexity. We show that Muon$^p$ maximizes the linear improvement in loss under the Schatten $q$-norm for $q=1+\frac{1}{p}$. Empirically, Muon$^p$ is especially effective for finetuning: on billion-scale models, Muon$^p$ improves validation perplexity and downstream task performance. We further analyze when Muon$^p$ is less suitable, through the lens of spectral geometry. Our results reveal important insights on when preserving the singular spectrum can bring significant gains, and introduce a principled way to achieve them.
