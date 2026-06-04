---
title: "Stationarity-Aware Retrieval-Augmented Time Series Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04135"
authors: ["Shiqiao Zhou, Holger Sch\\\"oner, Zipeng Wu, Edouard Fouch\\'e, IAG Wilson, Shuo Wang"]
date: "Thu, 04 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.04135v1"
image: ""
generated: "2026-06-05T02:55:12+05:30"
---

arXiv:2606.04135v1 Announce Type: new Abstract: Time series forecasting relies on historical patterns, but real-world series often exhibit non-stationarity and regime shifts that challenge fully parametric forecasters. Inspired by Retrieval-Augmented Generation (RAG), recent work augments forecasters by retrieving relevant historical segments and using them as external evidence at inference time. However, due to the intrinsic non-stationarity of real-world time series, a highly similar past segment does not necessarily imply a similar future, rendering similarity-only retrieval brittle and prone to redundancy. We propose Stationarity-Aware Retrieval-Augmented Time Series Forecasting (SARAF), a framework that adaptively balances relevance and diversity in retrieval. SARAF first forms a candidate pool via temporal similarity with time-aligned enhancement, then applies a diversity-aware selection strategy to cover heterogeneous historical regimes, with the diversification strength automatically modulated by dataset-level stationarity. Moreover, SARAF uses stationarity-aware aggregation to fuse the retrieved futures. Extensive experiments on eight real-world datasets show that SARAF achieves competitive forecasting performance and improves average accuracy and robustness over strong baselines, with particularly clear benefits under challenging non-stationary settings. Code: https://github.com/ShiqiaoZhou/SARAF.
