---
title: "APEX: A Network-Native Time-Series Foundation Model for Forecasting and Anomaly Detection for Wireless Edge Operations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11553"
authors: ["Swadhin Pradhan, Niloo Bahadori, Peiman Amini"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.11553v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11553v1 Announce Type: new Abstract: Generic time-series foundation models transfer poorly to wireless network telemetry whose signals are bursty, zero-inflated, and coupled across protocol layers. We present APEX, a network-native, decoder-only transformer for forecasting enterprise AP telemetry, and evaluate it on DHCP degradation as a representative network task. APEX is pre-trained on 10-channel multivariate telemetry from ~4,500 production wireless networks (~100K AP time series, 34 metrics per AP), and is available as APEX-Large (269M, cloud) and APEX-Edge (10.5M, edge). On a 192-step (4-day) DHCP degradation benchmark, APEX-Large reduces MAE by 18% over the strongest foundation-model baseline (Toto) and 38% over SARIMA, with anomaly-detection F1 = 0.93, while APEX-Edge enables sub-second, privacy-preserving inference on AP-class edge hardware. These results suggest network-native pre-training is a practical foundation for proactive wireless operations.
