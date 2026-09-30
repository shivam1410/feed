---
title: "3-D Emissions Mapping and Social Cost Estimation for US Domestic Aviation at West Coast Hubs"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31686"
authors: ["Hesam Shafiei Nia, Don MacKenzie"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2609.31686v1"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

Existing aviation emissions inventories lack accurate trajectory data for high-resolution social cost and health impact assessment. This paper develops a 3-D emissions map by reconstructing flight trajectories for US west coast hubs to estimate regional environmental and near-airport health impacts. A physics-informed autoencoder (AE) is applied to ADS-B trajectory records for January 2025 covering US west coast hubs. The encoder combines a Convolutional Neural Network (CNN), a Bi-GRU, and a 3-D CNN with skip connection; the decoder is a Temporal Convolutional Network (TCN). It is benchmarked against a baseline-AE and cubic spline interpolation. Emissions are mapped via EUROCONTROL Base of Aircraft Data (BADA) performance tables and ICAO Engine Emissions Databank (EEDB) emission indices, with altitude corrections via Boeing Fuel Flow Method 2 (BFFM2). Social costs are quantified for all flight phases, with health impacts assessed for Landing and Takeoff cycles within 50 km of each hub. The proposed AE model outperforms both a TCN-AE and cubic spline interpolation across 5% to 50% missing rates. Monetizing the emissions inventory shows NOx produces a small net cooling effect in direct climate forcing, while accounting for 99.7% of monetized air-quality and health cost despite being under 0.4% of CO2 by mass, making it the dominant health-cost driver. To our knowledge, this is among the first studies combining AE-based trajectory reconstruction with separate spatial-temporal feature encoding and altitude-based emissions modeling to produce a regional aviation emissions inventory for air quality, climate impact and population exposure. The resulting emissions map and social cost estimates provide quantitative context for environmental impact assessment and near-airport health policy evaluation for US domestic aviation.
