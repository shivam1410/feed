---
title: "Lift Out, Kick In: Decoupling Event Effects for Time Series Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.27191"
authors: ["Yunying Zhu, Zichun Cao, Siwei Sun, Xiaocen Guo, Shengsheng Lin, Jing Hu, Enyun Yu, Zhichao Zou"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 22
guid: "oai:arXiv.org:2611.27191v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

Real-world time series are often shaped by exogenous events whose effects are superimposed on the system's underlying temporal dynamics. Historical observations therefore entangle persistent dynamics with event-induced deviations, making it difficult to determine which patterns should be extrapolated and which should be attributed to specific event contexts. Existing event-aware forecasting methods can incorporate event information or model event-related variation, but typically treat historical event attribution and future event generation separately. We propose Loki (Lift Out, Kick In), a general event-aware forecasting framework built on a shared Event Response Function (ERF). The ERF models event effects according to event type and relative temporal position and is shared across the historical and forecast windows. Loki lifts out estimated event-induced deviations from historical observations before forecasting, then uses the same ERF to kick in responses to known future events. This formulation separates event-response modeling from temporal forecasting while coupling historical attribution and future generation through a shared mechanism. Across five forecasting benchmarks, Loki achieves the best standardized MAE on all five datasets, reducing error by approximately 2.2%-11.7% over the strongest non-Loki baseline. Ablations and controlled analyses further support the roles of Lift Out, Kick In, shared response modeling, and compatibility across forecasting backbones.
