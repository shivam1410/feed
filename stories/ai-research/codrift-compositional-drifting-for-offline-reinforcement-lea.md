---
title: "CoDrift: Compositional Drifting for Offline Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.23939"
authors: ["Xiewei Ni, Ruofeng Mei, Xiangyu Xu"]
date: "Wed, 26 Aug 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2608.23939v1"
image: ""
generated: "2026-08-26T19:06:33+05:30"
---

arXiv:2608.23939v1 Announce Type: new Abstract: Offline reinforcement learning is intrinsically multi-objective: a policy must remain compatible with the behavioral support of a fixed dataset while preferentially selecting high-value actions. We recast these objectives in a common form by viewing each as an action-space motion field that specifies how generated actions should move. This perspective enables heterogeneous learning objectives to be combined directly through field composition. Inspired by drifting models, we propose CoDrift, a compositional framework for one-step generative policy learning. CoDrift combines three objective-level fields into a unified policy field. The conditional field preserves state-dependent behavioral structure, while the marginal field pools actions across states to provide a more stable generative signal in the single-positive-sample regime of continuous-control offline RL. The value field moves generated actions toward higher-value regions. The composed field is absorbed into a stochastic generator that produces an action with a single forward pass at deployment. We evaluate CoDrift on 73 tasks from OGBench and D4RL in both offline and offline-to-online settings. CoDrift compares favorably with state-of-the-art methods and achieves the best average rank in both settings.
