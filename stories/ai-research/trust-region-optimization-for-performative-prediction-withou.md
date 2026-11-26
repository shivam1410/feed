---
title: "Trust-Region Optimization for Performative Prediction without Response Modeling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31492"
authors: ["Siqi Du, Miaolan Xie, Roy Dong"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: 20
guid: "oai:arXiv.org:2611.31492v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Performative prediction studies learning problems in which deployed decisions change the distribution of future data. Existing methods often impose structure on the population response, which limits their applicability when a fixed model class poorly captures that response. Generic black-box optimization avoids response modeling but does not exploit the known loss function. We introduce Performative Trust-Region Optimization (PTRO), which bridges these two approaches by optimizing performative risk without specifying or fitting a response model while still exploiting the known loss. The key idea is sampling from the current population to evaluate the known loss at nearby decisions, and use additional deployments only to estimate the effect of population response. This gives a local approximation of performative risk without committing to a model of how the population responds. PTRO then uses a trust-region mechanism to determine and adapt how far this local information can be trusted. Under moment-bounded losses and suitable smoothness and estimator-accuracy conditions, we establish high-probability convergence to an $\epsilon$-stationary point of the performative risk in $O(\epsilon^{-2})$ iterations, with $O(d^{3}\epsilon^{-4})$ samples per iteration, where $d$ is the decision dimension and $q\geq2$ is the loss-moment order. Experiments illustrate methods built around a specified response model can be more sample-efficient when their structural assumptions are accurate, whereas PTRO remains effective as the population response is poorly captured by a fixed model class. Ablations further show that both exploiting the known loss and adaptive trust-region updates are important for controlling the accuracy and efficiency.
