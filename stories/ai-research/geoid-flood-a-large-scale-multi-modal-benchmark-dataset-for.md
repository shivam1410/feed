---
title: "GEOID-Flood: A Large-Scale Multi-Modal Benchmark Dataset for Flood Segmentation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.02315"
authors: ["Gaetano Chiriaco", "Luca Barco", "Andrea Bragagnolo", "Claudio Rossi", "Edoardo Arnaudo"]
date: "2026-08-02T20:00:00.000Z"
score: 62
guid: "2608.02315"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.02315.png"
generated: "2026-08-05T20:00:21+05:30"
---

Geospatial foundation models aim to learn representations that transfer across regions and sensors, yet evaluating them on specific tasks requires large, high-quality, multi-modal benchmarks that measure how well such models extract value from data. Concerning flood mapping, existing datasets rarely combine bi-temporal SAR and co-registered optical imagery at scale, leaving the value of foundation models for this downstream task largely untested. We introduce GEOID-Flood, a large-scale multi-modal flood segmentation benchmark, derived from Copernicus Emergency Management Service activations, spanning 219 events across 65 countries over ten years. The dataset provides more than 14,000 tiles with co-registered pre- and post-event Sentinel-1, in GRD and RTC format, pre-event Sentinel-2 composite, and DEM, including manually validated labels that separate background from permanent water and flooded water. Using this benchmark, we evaluate foundation models against conventional encoders across single-image, multi-temporal, and multi-modal protocols. We report three main findings: foundation models offer a consistent but modest advantage; optical-SAR fusion with finetuning best resolves transient flooding; and models trained on GEOID-Flood transfer to unseen events better than those trained on existing datasets. Dataset and code available at https://github.com/links-ads/geoid-flood.
