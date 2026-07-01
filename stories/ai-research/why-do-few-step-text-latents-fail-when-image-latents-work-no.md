---
title: "Why Do Few-Step Text Latents Fail When Image Latents Work? Non-Commitment at Sharp Categorical Readouts"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.30705"
authors: ["Zhongyao Wang"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.30705v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.30705v1 Announce Type: new Abstract: Deterministic few-step generation succeeds on continuous image latents but collapses to incoherent text on continuous text latents, and we show the cause is geometric rather than a training or scaling deficiency: a smooth, regularity-limited deterministic map cannot resolve a discrete branch choice before a sharp categorical readout, so few-step failure is governed by decoder sharpness, not transport accuracy. In the overlapping regime of real text autoencoders, we prove (Theorem 3) that the posterior-mean terminal step flips tokens at the rate of the latent mass in an $O(s(t))$ tube around decision boundaries. Two diagnostics, DABI (readout sharpness) and CCI (categorical commitment), measured on published checkpoints show that four independently built continuous-text decoders amplify a boundary-aligned perturbation far beyond a norm-matched isotropic one (DABI from $5\times10^{2}$ to $>10^{5}$), while image decoders have DABI $\approx 1$. Two mechanisms escape the continuous bound: categorical commitment (autoregressive decoders succeed despite sharper readouts) and stochastic re-injection (deterministic ODE at $K=4$ gives PPL 294 versus SDE 50 on the same model). In the idealized separated regime we prove matching sharp transport laws, including a dimension phase diagram: the deterministic stiffness needed to separate $M$ modes grows as $\Theta(\sqrt{\log M})$ once the latent dimension is $\Omega(\log M)$ (and as $M^{1/n}$ in fixed dimension), with a depth-$B$ hierarchy giving a $\sqrt{B}$-smaller per-step peak (Theorems 5-7); a coarea identity links these to the overlapping tube (Theorem 17). The result is an accuracy-depth-stiffness tradeoff: within the deterministic-continuous class the cost is irreducible, and both escapes step outside it.
