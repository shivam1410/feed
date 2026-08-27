---
title: "Neural-Bayesian Structure Learning for Discrete Choice Modeling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.25258"
authors: ["Hyunsoo Yun, Eun Hak Lee, Jiaru Zhang, Ziran Wang, Eui-Jin Kim"]
date: "Thu, 27 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.25258v1"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

arXiv:2608.25258v1 Announce Type: new Abstract: Conventional discrete choice and machine learning models are estimated primarily from observational data and typically treat explanatory covariates as parallel inputs, providing no internal mechanism for determining how related attributes should adjust when one is deliberately changed. This paper proposes Neural-Bayesian Structure Learning (Neural-BSL), a framework coupling differentiable structure learning with random-utility-based discrete choice estimation in a single differentiable procedure. To prevent mutually exclusive choice outcome from distorting the recovered attribute structure, the observed choice is maintained outside the graph as an alternative-specific utility comparison, while the attribute structure and random-utility parameters are learned jointly. The learned structure enters the choice model through structure-weighted attribute interactions and provides the structural basis for propagating interventions through downstream attributes. An intervention is evaluated by updating the intervened attribute, propagating its model-implied downstream changes in topological order, and then recomputing utilities and choice probabilities. This yields both predicted mode-share responses and the associated changes in downstream traveler or trip attributes. We evaluate Neural-BSL using stated-preference data from Seoul and the revealed-preference data from London. Neural-BSL achieves predictive performance comparable to conventional benchmarks while recovering behaviorally coherent dependency structures. Across policy scenarios, propagating interventions through the learned structure changes the predicted redistribution across modes while exposing the downstream traveler and trip adjustments underlying those responses.
