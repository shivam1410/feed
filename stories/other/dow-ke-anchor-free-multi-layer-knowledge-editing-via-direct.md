---
title: "DOW-KE: Anchor-Free Multi-Layer Knowledge Editing via Direct End-to-End Weight Optimization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.16932"
authors: ["Ran Chen, Junbo Zhang, Qianli Zhou, Xinyang Deng, Wen Jiang"]
date: "Thu, 20 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.16932v1"
image: ""
generated: "2026-08-20T19:00:16+05:30"
---

arXiv:2608.16932v1 Announce Type: new Abstract: Multi-layer locate-then-edit methods for knowledge editing first optimize target residual-stream activations (anchors) at selected layers, then realize them layer by layer as weight updates. This pipeline optimizes an intermediate representation but deploys multi-layer weight updates whose joint effect through the true forward pass is never itself optimized: regardless of how anchors are set or propagated, each update comes from a local solve, so propagation-induced attenuation and distortion go uncorrected, leaving a closure gap between anchor targets and realized edits. We propose DOW-KE, an anchor-free method built on a single principle: what is optimized must be exactly what is deployed. DOW-KE backpropagates the final editing objective through the complete model, jointly optimizing the updates of all edited layers so cross-layer propagation and coupling enter every gradient step. The same principle dictates where preservation resides: embedding the preservation projection in the update parameterization, inside the computation graph, makes every gradient act on the deployed update; post-hoc constraints would reopen the gap, and the constrained search keeps edits clear of protected knowledge. In large-scale sequential editing on two datasets and three models, DOW-KE achieves the highest overall Score and neighborhood Specificity in five of six model-dataset settings among the evaluated baselines.
