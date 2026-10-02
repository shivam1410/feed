---
title: "Large Language Bayes Is Not Reparameterisation-Invariant"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00265"
authors: ["Jian Xu"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2610.00265v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Large Language Bayes (LLB) answers an informal modelling question by sampling candidate probabilistic programs from a language model, running approximate inference on each, and averaging them with weights proportional to an exponentiated evidence bound. We show that this weighting depends on how a model is written. The log marginal likelihood is invariant to reparameterisation; the evidence bound is not. On eight schools the centered and non-centered programs are the same measure to $5.7\times10^{-14}$, yet their weights differ by $6.1\times$; importance weighting reduces this only to $2.2\times$, and reproducing the inference LLB actually runs, a full-covariance Gaussian matched to the posterior moments, still leaves $1.9\times$ on eight schools and $8.9\times$ in $64$ dimensions. Across likelihood families, dimensions and funnel severities the discrepancy reaches $31.9\times$ and reverses sign, so no single writing is uniformly preferable. It inverts Bayes factors against eight natural competitors, and the induced error in the model posterior, and in any downstream target, is controlled by the spread $\Delta$ of the bound shortfalls through a known sharp Hilbert-distance bound. Across $360$ programs from six language models the parameterisation written ranges from $0\%$ to $100\%$ centered and is stable within a model. Detecting equivalent programs statistically can falsely merge genuinely different models at practical sample budgets; verifying reparameterisations we generate ourselves cannot, and closes the window.
