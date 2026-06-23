---
title: "Gradient-Free Warm-Start Library Recovery: an Amortized-Regret Separation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.21253"
authors: ["Jianwei Lou (RailMind Systems, Neuss, Germany)"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.21253v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.21253v1 Announce Type: new Abstract: Continual learning that is gradient-free, local, online, and append-only is attractive for edge and streaming deployment, but its value is usually argued informally. We give a provable account on recurring-regime streams. Given segmentation, a warm-start library learner attains amortized recovery cost $O\!\big(KD/\varepsilon^2+(R-K)\logK/\Delta^2\big)$ versus a memoryless re-estimator's $\Theta(RD/\varepsilon^2)$, an advantage $(R-K)\,\Theta(D/\varepsilon^2)$ growing with dimension $D$ and recurrence density. The mechanism is a decoupling: recognizing which of $K$ seen regimes is active costs $O(\log K/\Delta^2)$, independent of $D$, whereas estimating a regime costs $\Theta(D/\varepsilon^2)$. We prove this is tight: matching lower bounds give recognition $\Theta(\log K/\Delta^2)$ and a memoryless-class bound $\Omega(RD/\varepsilon^2)$, so each term is individually minimax-tight (the joint statement is conditional). The separation is born-immune (a memoryless learner's advantage is identically zero) and paradigm-level: it matches, and does not beat, a fair spawn-capable Bayesian baseline; the contribution is attaining this cost structure without end-to-end backprop and with zero forgetting by construction. A count-calibrated variant ties the baseline's leading constant up to a bounded, never-negative per-recurrence overshoot, hyperparameter-free and with no per-step transcendentals. We bound the scope: recognizable regimes are capped by simplex packing (walls $e^{\Theta(D)}$); autonomous segmentation is impossible at the packing wall (no detector escapes the false-alarm/delay frontier as regimes overlap); the advantage vanishes under overlap. The dimension-dependent separation is corroborated on synthetic streams and real $k$-mer genome distributions (memoryless cost $\propto D^{1.04}$, recognition $D$-independent); the one real sequential stream sits in the $D{=}1$ near-null corner.
