---
title: "SE(3)-MeanFlow: Few-Step Protein Backbone Generation on Lie Groups"
category: "Genetics & Biology"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.27431"
authors: ["Yikun Bai, Binghang Lu, Yikai Liu, Elaheh Akbari, Soheil Kolouri, Linxuan Wang, Ping He, Shuchan Wang, Ruqi Zhang, Guang Lin"]
date: "Fri, 31 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.27431v1"
image: ""
generated: "2026-07-31T19:06:14+05:30"
---

arXiv:2607.27431v1 Announce Type: new Abstract: Generative modeling of protein backbones promises the de novo design of proteins with prescribed structural and functional properties. Existing diffusion and flow-matching models produce high-quality backbones on SE(3)^N, but inference requires numerically integrating an ODE over hundreds of network evaluations, each involving a Lie group exponential map - a bottleneck for high-throughput design campaigns. We introduce SE(3)-MeanFlow, a few-step generative framework that extends MeanFlow from Euclidean space to the Lie group geometry of protein frames. Working natively in the Lie algebra so(3) and in R^3, we derive closed-form average-velocity identities for rotations and translations, giving simulation-free training targets. We further introduce an SE(3) alpha-Flow objective that removes the Jacobian-vector product from the rotation branch and serves as a warm-up stage, after which training switches to a small-t stabilized MeanFlow loss that is used for the remainder of pretraining and for rectification-based post-training. In protein backbone generation, SE(3)-MeanFlow matches or exceeds flow-matching baselines that use several times more sampling steps, and its advantage widens in the few-step regime, where rectification lets it lead at every matched budget - at a modest cost in diversity.
