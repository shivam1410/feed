---
title: "Sum-of-Squares Degree Barriers for the Reweighted-Hinge Method in Robust Halfspace Learning: A Christoffel-Function Characterization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17215"
authors: ["Xiaoyu Li"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2606.17215v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17215v1 Announce Type: new Abstract: A certificate that removes outliers sees the data only through its low-degree moments, and an adversary exploits exactly this, hiding corruption where the clean data already looks typical, in the blind spot no bounded-degree test resolves. That blind spot turns out to have an exact size: the Christoffel function of the clean marginal, the very quantity modern data analysis thresholds to detect outliers, here read from the adversary's side as the corruption a bounded-degree certificate cannot remove. We turn this inversion into the organizing principle of the reweighted-hinge approach to robustly learning $\gamma$-margin halfspaces under malicious noise (Shen, 2025; Zeng and Shen, 2025): the governing resource is the Sum-of-Squares degree of the outlier-removal certificate, and the resolution principle states that the maximal corruption mass which can hide at a center $c$ from a degree-$2t$ certificate is exactly the Christoffel function $\lambda_{t+1}(c)$ of the clean marginal. Three consequences follow, all against the certificate method (not information-theoretic). A margin-degree tradeoff: certifying the dense pancake to error $\epsilon$ costs SoS degree $\Omega(\log(1/\epsilon))$ or margin $\Omega(\sqrt{\log(1/\epsilon)}/\sqrt{d})$, explaining why the $\log(1/\epsilon)$ margin Shen (2025) records is forced, with a weighted-Chebyshev reduction making the threshold $2t=\Theta((|c|/s)^2)$ tight modulo one classical weighted-extremal estimate. A degree-$2$ outlier barrier: the resolution principle realized as an explicit instance on which degree $2$ is stuck at $\eta^{1/2}$ while degree $4$ escapes, locating the method's small breakdown rate in the degree, not the analysis. And a degree-$2t$ algorithm tracing the frontier $\eta^{1-1/2t}$ (recovering Shen (2025) at $t=1$), whose gain is an explicit constant, capped by the pancake density and shown unimprovable by the degree-$2$ barrier.
