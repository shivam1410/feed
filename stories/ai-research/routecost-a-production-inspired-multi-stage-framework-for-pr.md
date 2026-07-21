---
title: "RouteCost: A Production-Inspired Multi-Stage Framework for Pre-Order Shipping Cost Estimation in E-Commerce"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16230"
authors: ["Xianling Zeng, Zihan Yu, Sichen Zhao, Yalun Qi, Zhiming Xue"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2607.16230v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16230v1 Announce Type: new Abstract: Accurate pre-order shipping cost estimation is important in e-commerce because it affects price presentation, margin planning, and conversion. In practice, shipping cost is shaped not only by distance but also by destination demand mix, billable weight, dimensional pricing, surcharge triggers, and latent operational effects such as shipment consolidation. Static lookup methods therefore miss important sources of variation, while monolithic regressors may exploit strong but non-causal correlations. We propose RouteCost, a production-inspired multi-stage framework that decomposes the problem into time-aware demand forecasting, fee-card-informed baseline pricing, Stage 2 residual correction, and proxy-based box-consolidation inference. Route-level cost estimates are aggregated through a route-weighted expectation formulation to produce product-level shipping cost predictions. Across over 250,000 orders, 260 products, and 18 months of order history, the framework improves predictive quality and aggregate calibration while preserving route-level interpretability.
