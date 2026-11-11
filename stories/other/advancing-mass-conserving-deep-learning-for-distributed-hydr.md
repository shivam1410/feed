---
title: "Advancing Mass-Conserving Deep Learning for Distributed Hydrologic Modeling: A Case Study in a Snow-Dominated Watershed"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13346"
authors: ["Yihan Wang, Lujun Zhang, N. Benjamin Erichson, Yang Hong, Tiantian Yang"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13346v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Recent progress in physics-aware deep learning (DL) has embedded mass conservation within Long Short-Term Memory (LSTM) architecture for hydrologic modeling, improving physical consistency and enabling diagnostics of internal states. However, existing mass-conserving neural networks are primarily developed in lumped formulations. Consequently, previous studies provide only fragmented and often indirect evidence of when and why imposed physical constraints may lead to unrealistic hydrologic behavior. To address this limitation, we propose Physics-Enhanced Conservation-Augmented Net (PECAN), a mass-conserving convolutional LSTM-based framework for distributed hydrologic modeling and diagnosing structural limitations of physics-aware DL models. PECAN is implemented in two variants: (1) PECAN-MC with a strict precipitation-based conservation constraint and (2) PECAN-MCR with a relaxed conservation constraint allowing additional water inputs beyond precipitation. Both variants are trained solely on gauge streamflow and evaluated in a snow-dominated watershed in Colorado. We benchmark PECAN against lumped DL baselines and the distributed process-based Variable Infiltration Capacity (VIC) model. Results show that PECAN achieves competitive outlet streamflow simulation accuracy while producing spatially explicit latent states for interpretation. Comparisons with reference soil moisture indicate that PECAN cell states resemble meaningful temporal soil moisture dynamics. However, analyses also reveal that PECAN misrepresents snow processes by prematurely removing winter snow water storage from the system rather than retaining it for spring release. PECAN demonstrates accurate streamflow simulation at gauges and shows diagnostic potential to expose structural limitations in hydrologic process representation, thereby informing future physics-aware neural network development for hydrology.
