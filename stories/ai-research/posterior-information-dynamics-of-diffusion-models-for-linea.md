---
title: "Posterior Information Dynamics of Diffusion Models for Linear Inverse Problems"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21709"
authors: ["Xiangming Meng"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.21709v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21709v1 Announce Type: new Abstract: Diffusion models are widely used as priors for linear inverse problems, yet endpoint quality does not reveal when measurement information enters reverse denoising or how it is allocated across signal directions. We study this process through the smoothed likelihood force, the difference between exact posterior and prior scores at each noise level. For a fixed measurement, its expected squared norm gives both posterior--prior relative-entropy dissipation and reverse-path relative-entropy growth. Averaging over measurements yields an information--minimum mean-square error (I-MMSE) identity linking information gain to denoising-error reduction. Under finite second moments, the force energy and its ratio to prior-score energy decay quadratically in the noising kernel's signal coefficient at high noise. Solvable models show that conditioning removes class separation already explained by the measurement, reduces a uniform index entropy over \(n\) empirical samples from \(\log n\) to \(H(I\mid r)\), and makes assimilation depend on operator--prior alignment even for identical singular values. Experiments in models with tractable posteriors evaluate these predictions. In a separate illustration with a frozen FFHQ model, masks sharing the same spectrum yield different prior-normalized null-space trajectory statistics.
