---
title: "Causal Local States: Scalable Simultaneous Causal Network Inference and Forecasting for Dynamical Systems"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.17452"
authors: ["Jonas Braun, Fabian Fischbach, Daniel K\\\"oglmayr, Sebastian Baur, Christoph R\\\"ath"]
date: "Thu, 20 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.17452v1"
image: ""
generated: "2026-08-20T19:00:16+05:30"
---

arXiv:2608.17452v1 Announce Type: new Abstract: Machine learning methods predict many real-world systems with remarkable accuracy, but they are typically treated as black boxes that offer no insight into which interactions drive the dynamics. Causal discovery methods reconstruct the interaction network from observational data, but without regard to whether the inferred structure supports prediction. Existing approaches combining both tasks rely on a single global hyperparameter, such as a causal threshold or a fixed neighborhood size, which cannot recover the structure of heterogeneous systems. Here we introduce causal local states (CLS), a framework that simultaneously infers an approximate Granger-causal interaction network and forecasts the system dynamics. For each node independently, we select the smallest set of neighbors that allows a predictive model to forecast the node near-optimally, and the resulting neighborhoods are then combined for a forecast of the full system. On three benchmarks of increasing difficulty, we achieve reconstruction of the underlying networks with high fidelity and forecasts on par with a model that is supplied with the true network, providing a step toward explainable and scalable forecasting of complex systems.
