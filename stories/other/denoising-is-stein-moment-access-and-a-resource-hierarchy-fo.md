---
title: "Denoising Is Stein: Moment Access and a Resource Hierarchy for Learning Hidden Structure in Diffusion Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.04043"
authors: ["Rui Wang"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.04043v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

We study score learning from denoising pairs when the data contain a hidden non-Gaussian component. If covariance reveals the component, its subspace can be recovered directly. If covariance is isotropic, the first distinguishing moment has order $k^\ast$, and the learner must extract that moment from clean points and their noisy views. Correlations in the denoising loss are Stein discrepancies against a baseline; for polynomial fields they determine exactly the corresponding moment differences. Averaging fresh noisy views conditional on a clean point gives an exact moment query on the clean distribution. In the covariance-matched regime, orientation-independent dictionaries satisfying an $L^4/L^2$ condition need order $d^{k^\ast-1}$ features, and the stated dot-product kernel ridge models need the same power in samples. Small-step online SGD on one unit has this exponent up to logarithms. A two-stage learner uses the curvature of a smoothed denoising loss to recover the hidden direction, then sharpens it and fits a scalar readout. For every even $k^\ast$, it obtains a fixed score gain over the Gaussian baseline from $O(d^{k^\ast/2}\log d)$ clean points. In the covariance-visible regime, the frozen-feature threshold occurs at $d^J/J!$, while projection onto principal components makes the fitted-model, score-risk and generated-law distributions independent of ambient dimension. In the covariance-matched experiments, the measured partial-trace overlaps are consistent with the proposed spectral transition. A width-8 network trained with clean-point reuse shows a $d^2$-like training-set threshold over $d=64$--$192$, with fixed validation and calibration overhead.
