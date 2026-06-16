---
title: "Probabilistic Signature Inversion: Learning Conditional Distributions from Truncated Signatures"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.15332"
authors: ["Junoh Kang, Kiseop Lee, Bohyung Han"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.15332v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.15332v1 Announce Type: new Abstract: The signature transform is a principled feature map for continuous-time paths, valued for its uniqueness and universality. Recovering a path from its truncated signature is, however, structurally ill-posed because the truncated signature map is not injective. We therefore reframe truncated signature inversion as a probabilistic problem -- learning the conditional distribution of a path given its truncated signature -- and adopt a signature-conditioned flow matching model as a practical estimator. This probabilistic formulation elucidates the fundamental difficulty of inversion: Bayes reconstruction error quantifies the irreducible uncertainty remaining after conditioning on a statistic. We derive the Bayes-optimal error under linear statistics, obtaining a closed form for log-GBM and numerically tractable formulas for log-fBM and OU, yielding a concrete theoretical baseline for model validation. This baseline upper-bounds the Bayes error under truncated-signature conditioning, since truncated signatures provide richer information than linear statistics. Experiments show that empirical reconstruction errors under linear-statistics conditioning faithfully align with the theory-derived baseline, while errors decrease when the statistic is replaced with truncated signatures. Moreover, generated paths faithfully recover the conditioning signature while preserving key distributional and temporal structures, indicating that the estimator is well-calibrated to the target conditional distribution. Together, these results establish a well-posed probabilistic framework for truncated-signature inversion, with applicability demonstrated on real financial data beyond the parametric process families covered by theory.
