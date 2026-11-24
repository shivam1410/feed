---
title: "Cross-Site Transformers Are Robust Heart Rate Estimators"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28366"
authors: ["Mason Kadem, Rong Zheng"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2611.28366v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Single-site heart-rate estimation from photoplethysmography (PPG) degrades sharply under real-world motion. Multi-site PPG provides a natural solution, but existing models fuse sites as generic sensor channels rather than exploiting their hemodynamic structure: each heartbeat propagates along the arterial tree, appearing across body sites as delayed and transformed copies of the same cardiac event. We propose the Cross-Site Transformer, which introduces a hemodynamically informed inductive bias by restricting multi-sensor fusion to cross-attention between PPG sites. On WildPPG, the largest in-the-wild benchmark available, our model establishes a new single-model state of the art, reducing error by 21% over the previous best and 35% over the best prior transformer. The same cross-site restriction makes the trained network directly auditable. Because each cross-attention head lies on one directed pathway between sites, causal resample ablation can isolate and test each direction of information flow. Ablating the chest-to-wrist pathway doubles error, whereas the reverse costs far less. Encoding hemodynamic structure into attention routing thus improves real-world sensing robustness and enables rigorous auditing of multi-sensor fusion.
