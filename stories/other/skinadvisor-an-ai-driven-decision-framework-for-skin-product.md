---
title: "SkinAdvisor: An AI-Driven Decision Framework for Skin Production Planning via Multi-Modal Transformer Sales Forecasting"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15023"
authors: ["Ge Fan, Kai Wang, Chaoyun Zhang, Yingjie Li, Yuze Liu, Junyang Chen"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15023v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Skins, cosmetic in-game items, are a primary revenue stream for modern online games, yet production decisions (which skins to make, when to release, how to price) remain driven by intuition and retrospective analytics. We present SkinAdvisor, an AI-driven decision framework for skin production planning, powered by SkinCast, a deployed multi-modal Transformer forecasting 180-day per-day sales trajectories for unreleased skins. SkinCast couples four encoders: a pretrained Informer for player-preference time series, a pretrained Player-Hero-Skin graph embedder for relational priors, and two lightweight Transformers for skin attributes and release context, fused through a shared backbone with a local-plus-global day-x positional encoding and decoded by an N-layer Informer in a single non-autoregressive pass. SkinAdvisor plugs these forecasts into a serving pipeline (Select -> Fill -> Infer -> Sales -> ROI -> Ranking) that ranks candidate skins by forecast-based ROI and supports multi-candidate comparison. The system has been in production for a full release cycle. Offline experiments show SkinCast reduces RMSE by ~20% over the strongest baseline (Informer) and ~60% over classical methods; stress tests on a 16-core CPU server confirm p99 latency under 8ms and peak throughput above 1100 rps. We report two deployment lessons: order-of-magnitude accuracy suffices for production decisions, and pretrained embeddings can leak temporal information, requiring season-based splitting to prevent.
