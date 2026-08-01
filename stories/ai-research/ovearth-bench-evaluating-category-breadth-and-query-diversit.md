---
title: "OVEarth-Bench: Evaluating Category Breadth and Query Diversity for Open-Vocabulary Earth Observation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.27278"
authors: ["Kaiyu Li", "Zepeng Xin", "Zixuan Jiang", "Jing Fu", "Lanxuan Xue", "Lingyu Zhang", "Xiangyong Cao"]
date: "2026-07-28T20:00:00.000Z"
score: 70
guid: "2607.27278"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.27278.png"
generated: "2026-08-01T19:05:30+05:30"
---

Open-vocabulary Earth observation (EO) aims to localize geospatial concepts specified in natural language rather than a fixed label set. Existing benchmarks, however, usually cover narrow category vocabularies or limited query forms. To fill this gap, we introduce OVEarth-Bench, which extends existing evaluation in two directions: category breadth, through broad hierarchical category coverage with positive and negative expressions, and query diversity, through vocabulary, referring, and reasoning queries. The benchmark supports mask and box localization under a unified zero-shot protocol. We evaluate a broad set of general and EO-specific methods. The evaluation reveals that: (1) the performance of current methods remains limited, while broader category coverage yields more stable model rankings; (2) MLLM-based methods achieve the strongest overall performance; and (3) EO-specific methods generally underperform general models and rarely match the strongest methods. These findings provide guidance for future open-vocabulary EO method design and highlight the importance of developing more realistic, diverse, high-quality, and large-scale benchmarks for reliable evaluation. Our data and evaluation package are released at https://earth-insights.github.io/OVEarth-bench.
