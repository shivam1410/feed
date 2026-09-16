---
title: "How I learned to stop worrying and love StopGrads: Stationarity, Convergence, and a case study on Flow Map Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16222"
authors: ["Max W. Shen, Mark Goldstein, Zichu Wang, Aahlad Puli, Rajesh Ranganath"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16222v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16222v1 Announce Type: new Abstract: Stopgrads are widely used in training machine learning models, but stopgrads can alter the gradient, stationary points and convergence guarantees of the original objective, which can make stopgrad training theoretically ungrounded. We introduce a stopgrad regression principle, which identifies a general template for stopgrad objectives with a closed-form characterization of stationary points and their uniqueness, unifying stopgrad objectives for flow maps, reinforcement learning, and diffusion samplers. We provide theoretical grounding for optimizing stopgrad flow map objectives by showing their unique stationary point is the true flow map, and showing positive convergence results for Eulerian and Lagrangian objectives, including MeanFlow and improved MeanFlow. Remarkably, we show that under functional semi-gradient flow, the learned flow map has a closed-form expression composing the initial flow map and the true flow map. We additionally use our stopgrad regression principle to propose modified stopgrad placements for flow map objectives which reduce training memory by 2x.
