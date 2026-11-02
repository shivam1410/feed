---
title: "When can Optimally Trained Transformers Achieve Near-Lossless Token Prediction for non-Markovian Data?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.41038"
authors: ["Ka\\u{g}an Akman, Jake Feldman Starosta, Naci Saldi, Serdar Y\\\"uksel"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2610.41038v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

There exists little mathematical theory explaining why Transformer architectures are empirically successful even for non-Markovian data. To this end, this paper studies next-token prediction via stochastic optimal control theoretically trained Transformers for such sources, where we consider either stationary and ergodic non-Markovian sources or those which are hidden Markov models of some finite order (possibly non-stationary). In either case, we first obtain error bounds via finite models with finite window approximations. For stationary ergodic sources, the resulting error is bounded by an entropy gap; for $N$th order Markovian sources, it decays at an exponential rate $\alpha^{\lfloor M/N\rfloor}$, where $M$ is the window length and $\alpha$ is determined by filter stability (and the Dobrushin coefficients of the transition and measurement kernels). We then construct a Transformer of depth $M+1$, one head per layer, realizing the truncated filter, and we optimally train it with stochastic control developed in earlier work, which rigorously returns a near optimal Transformer. In particular, we show that for a non-Markovian source, either under stationarity and ergodicity for general models or under filter stability for hidden Markov models, an optimally trained Transformer has arbitrarily small performance error with increasing context length, data, and approximation refinement. Numerical studies accompany the theory.
