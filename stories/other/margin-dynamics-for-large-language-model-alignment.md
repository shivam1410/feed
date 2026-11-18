---
title: "Margin Dynamics for Large Language Model Alignment"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21766"
authors: ["Xingzi Xu, Mehmet Saygin Seyfioglu, Karim Bouyarmane"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21766v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

Practitioners choose among LLM alignment methods largely by trial and error. We provide a theoretical foundation: each pairwise method defines a vector field on the probability simplex that governs how the model redistributes mass between preferred and dispreferred completions. Projecting onto a single preferred/dispreferred pair reduces this to a one-dimensional margin ODE with a closed-form solution. These solutions reveal that DPO margins grow without bound (logarithmically as $O(\log t)$ in the gradient-flow limit) while IPO margins converge to a finite $1/(2\tau)$; that label noise induces a qualitative phase transition in DPO (unbounded $\to$ bounded) but affects IPO only quantitatively; and that gradient concentration under asymmetric weighting governs trainability at scale. We confirm all three predictions across five model families spanning four benchmarks. The closed-form solutions also enable principled method design: we prove that adding any label smoothing $\varepsilon > 0$ to SimPO creates a finite margin attractor at $\Delta^* = \beta^{-1}\log((1-\varepsilon)/\varepsilon)$, while $\varepsilon = 0$ (standard SimPO) has no attractor. We test this across three models (8B-9B) and confirm the prediction: the theory-derived configuration (TPO-S, $\varepsilon = 0.05$) is competitive with the strongest baselines, attaining the highest mean IFEval score among the compared methods on all three, validating that the predicted finite attractor is a usable operating point rather than proposing a new state-of-the-art loss.
