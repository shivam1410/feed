---
title: "TopoSHAP: Shapley for Explainable and Efficient Topological Deep Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08789"
authors: ["Mathilde Papillon, Nina Miolane"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08789v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Topological deep learning (TDL) extends learning on graphs, such as molecules or social networks, to higher-order structures, such as rings in a molecule or groups in a social network. Explaining which of these structures drive a model's predictions, and which architectural components matter most for its performance, remains challenging. We introduce TopoSHAP, an efficient and general explanation framework that addresses both questions across topological domains and model architectures. TopoSHAP-cell assigns Shapley values to topological data cells and extracts compact explanations. These explanations match or outperform graph-based counterparts on GraphXAI benchmark data while running up to 112$\times$ faster. They also reveal advantageous topological feature design, leading to measured improvements in explanation recovery and predictive accuracy. On the architecture side, TopoSHAP-neighbor explains how neighborhoods contribute to model performance, and turns these evaluations into a backward-elimination search that identifies smaller, competitive architectures early in training. This is up to $11.3\times$ cheaper than traditional TDL training sweeps.
