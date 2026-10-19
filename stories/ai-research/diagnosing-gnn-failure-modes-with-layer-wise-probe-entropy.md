---
title: "Diagnosing GNN Failure Modes with Layer-Wise Probe Entropy"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22595"
authors: ["Shanzi Bao, Mar Gonz\\`alez I Catal\\`a, Pietro Li\\`o"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.22595v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

Graph neural networks (GNNs) are typically evaluated only at their final layer, obscuring how task-relevant information evolves during message passing. We introduce a post-hoc diagnostic that freezes a trained GNN, fits an independent linear probe to each layer, and tracks probe accuracy alongside normalized predictive entropy. Across real and synthetic graph settings, layer-wise probe entropy distinguishes beneficial, neutral, and harmful smoothing, a capability not demonstrated by existing geometric measures. Moreover, by comparing shallow and deep models, we show that the onset of entropy degradation separates the two main GNN failure modes: structural mismatch under heterophily, which appears from the earliest layers even in shallow models, and excessive-depth oversmoothing, which emerges only as propagation depth increases. These results establish probe-entropy trajectories as a tool for analyzing information flow in GNNs and motivate future work on adaptive depth selection and early-exit mechanisms.
