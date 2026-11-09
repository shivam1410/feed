---
title: "Patching the Blind Spots: Reversible LLM Rule Overlay for Frozen Fraud Detectors"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08714"
authors: ["Bo Qu, Zhurong Wang, Frank Zahradnik, Ming Ouyang"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08714v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

In industrial tabular fraud classification, gradient-boosted trees remain state-of-the-art, but even a well-trained model has blind spots, and retraining the deployed model is not always safe. We propose a framework that patches such a model without modifying it: LLMs propose rules anchored on features the model underweights by SHAP, and the resulting noisy pool is screened for empirical support and calibrated into an additive, reversible log-lift overlay that runs at the production cut-off. Single-LLM benefit is high-variance and inverts between datasets, so we pool three diverse backbones by equal-weight logit averaging, trading peak gain for a bounded worst case. On a real-world e-commerce fraud detector trained on selection-biased data, continued training regresses even when carefully tuned, whereas the overlay gains on average +2.26% recall at equal precision ($\Delta$R@P) and +1.60% precision at equal recall ($\Delta$P@R) over production cut-offs spanning 30-57% precision and 23-63% recall. On a public benchmark of seven designed bias-shift variants it raises $\Delta$P@R on every variant and keeps $\Delta$R@P near neutral. Each amendment is a readable predicate naming the fraud pattern it covers.
