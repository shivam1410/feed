---
title: "Recovering Stranded Discrimination in Knowledge Tracing: Per-Item Bias Correction via Empirical-Bayes Shrinkage"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14123"
authors: ["Xiaoran Yan, Cheng Tang, Atsushi Shimada"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2606.14123v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.14123v1 Announce Type: new Abstract: Deployed knowledge-tracing models are typically frozen after training, yet systematic per-item logit bias arises, from limited per-item expressivity in backbone architectures and from post-deployment shifts in item properties, degrading prediction quality. Global post-hoc calibrators such as Platt scaling, temperature scaling, and isotonic regression improve probability estimates but leave discriminative ability, as measured by AUC, unchanged. This AUC invariance is a structural consequence of monotone score-only transforms; recovering the stranded discrimination requires conditioning on item identity. We propose SLC (State-space Logit Correction), which converts binary observations to Gaussian pseudo-observations via Laplace/IRLS, applies empirical-Bayes shrinkage through a Kalman smoother, and fits an offset-Platt link. The state-space formulation also yields a detectability bound that characterizes the Bernoulli information floor, explaining why temporal tracking provides no benefit at current data densities. Across four datasets, five backbones, and three seeds, SLC improves AUC on all four datasets and NLL on three, with the advantage concentrating on sparse items. Cross-domain controls suggest that the same phenomenon can arise beyond education when the deployed backbone leaves entity-level bias.
