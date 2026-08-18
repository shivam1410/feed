---
title: "RouteTS: Frequency-Time Routing for Time Series Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14682"
authors: ["Gaofeng Lin, Lei Duan"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2608.14682v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14682v1 Announce Type: new Abstract: Real-world time series inherently intertwine global periodic structures with localized non-stationary variations. Existing approaches process these heterogeneous dynamics within a single computational domain, incurring fundamental limitations: time-domain models suffer from periodic misalignment over long horizons, while frequency-domain models over-smooth transient spikes. We argue that the optimal computational domain is not a property of the model, but of the data itself. Based on this principle, we propose RouteTS, a unified forecasting framework that partitions the frequency spectrum via amplitude routing and delegates components to their mathematically optimal domains. Dominant frequencies are processed by a complex-valued linear predictor in the frequency domain to preserve periodic structure, while residual spectral energy is reverted to the time domain and modeled by a lightweight MLP for local variations. Extensive experiments demonstrate that RouteTS achieves competitive prediction accuracy across diverse real-world datasets, with routing decisions guided by the underlying spectral signature. Furthermore, the lightweight design of RouteTS provides significant computational efficiency advantages, offering a principled solution to the longstanding dilemma between global periodicity and local transience.
