---
title: "$\\Psi$-Resilience: Model-Free Feature Importance from 1D Topological Signals"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02299"
authors: ["Fabian Galis, Darian Onchis, Pedro Real Jurado"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.02299v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

We introduce $\Psi$-Resilience, a model-free feature importance method that derives explanations directly from the data itself via 1D topological signals. Our method constructs a class-disagreement landscape by estimating class-conditional densities and taking their pointwise absolute difference along the feature axis. Then, the 0-dimensional persistence of this 1D signal defines a resilience functional that aggregates only those topological features that survive perturbations up to a robustness scale which is set by the user. This gives us a context-robust importance score that is inherently auditable via the underlying 1D landscapes and their persistence. We evaluate our method on both synthetic and real datasets. On synthetic generators with specified ground-truth importance, $\Psi$-Resilience recovers the ranking of features with high fidelity, achieving Spearman rank correlations up to 0.8 and performing competitively with multiple feature importance methods, including SHAP and mutual information. On real datasets with no known ground truth, our technique agrees with these methods, with correlations up to 0.9. These results show that $\Psi$-Resilience is a stable explanation method that enables rigorous, distribution-level auditing of feature importance without relying on a predictive model.
