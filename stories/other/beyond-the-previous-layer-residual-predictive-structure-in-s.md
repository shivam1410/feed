---
title: "Beyond the Previous Layer: Residual Predictive Structure in Sparse MoE Routing"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.17940"
authors: ["Hao Li, Yasuyuki Tahara, Yuichi Sei"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.17940v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.17940v1 Announce Type: new Abstract: Sparse mixture-of-experts models route each token through a sequence of expert selections. We ask whether the immediately preceding selection adequately summarizes this trajectory for predicting the next router. Using frozen OLMoE and JetMoE models, we measure the held-out predictive gain from earlier expert selections while retaining the most recent selection as a common baseline. In OLMoE, extending the history from one to eleven layers raises router-logit $R^2$ from 0.59879 to 0.66544. A preregistered JetMoE replication yields four-layer gains of 0.14275 and 0.20528 at two target depths, with paired bootstrap intervals above zero. These gains survive nonlinear decoding: adding history to a small multilayer perceptron improves $R^2$ by 0.17137 and 0.21861, whereas nonlinear decoding of the recent state alone adds 0.00139 and 0.00936 over a linear probe. Parameter-matched controls preserve the advantage, and cross-fitted history residuals predict target residuals with $R^2$ of 0.20549 and 0.23556. These findings identify residual predictive structure in expert-selection trajectories beyond adjacent-layer persistence.
