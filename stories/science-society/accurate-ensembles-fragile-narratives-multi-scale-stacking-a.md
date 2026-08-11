---
title: "Accurate Ensembles, Fragile Narratives: Multi-Scale Stacking and a Fidelity Audit of LLM-Generated Explanations for Credit Risk"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.08126"
authors: ["Gregorius Reynaldi Pratama, Kuo-Kun Tseng"]
date: "Tue, 11 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.08126v1"
image: ""
generated: "2026-08-11T19:05:57+05:30"
---

arXiv:2608.08126v1 Announce Type: new Abstract: Credit scoring increasingly relies on models whose decision logic cannot be read off their parameters, in tension with supervisory expectations that adverse decisions be explainable. A common proposal closes that gap with a language model: compute feature attributions, hand them to an LLM, and let it write the rationale. We build such a system end to end and test whether the second half of the promise holds. The predictive component is a multi-scale stacking ensemble fusing four differently regularised gradient-boosting learners with a residual network through a neural meta-learner trained on out-of-fold predictions. On a public 32,581-application credit dataset it reaches test ROC-AUC 0.9539 (95% CI [0.9462, 0.9616]) and PR-AUC 0.9137, beating the best single model by Delta-AUC = 0.0143 (p = 0.016 under a conservative independence assumption). Our central finding is asymmetric. The ranking gain is real but operationally small: at the F1-optimal threshold the ensemble avoids only six additional missed defaults out of 1,422 against a tuned random forest, cutting cost-weighted loss by under 2%. The narrative layer fails in a way prompt engineering alone does not fix. In an audited case the model named three factors as risk-increasing that the supplied attributions scored as risk-reducing, omitted the dominant driver, and introduced a feature never given to it. We trace this to properties we measure rather than assume: SHAP and LIME agree on which features matter (overlap@10 = 0.80) but not on their order (tau = 0.43, p = 0.18), and the attribution sign for the model's most sensitive input is near a coin flip across applicants (modal-sign share 0.53). Calibration (ECS = 0.117) and perturbation stability (DPD = 0.078) both fall short of our own thresholds. Constrained prompting is necessary but not sufficient: grounding must be verified after generation, not assumed.
