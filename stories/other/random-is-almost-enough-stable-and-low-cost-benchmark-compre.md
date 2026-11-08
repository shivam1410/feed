---
title: "Random Is Almost Enough? Stable and Low-Cost Benchmark Compression via BestRand"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.00883"
authors: ["George Ling", "Shanshan Zhong", "Lijin Yang", "Hao Yang", "Nanxiang Li", "Zhongzhan Huang"]
date: "2026-10-30T20:00:00.000Z"
score: ""
guid: "2611.00883"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.00883.png"
generated: "2026-11-08T21:41:26+05:30"
---

Benchmark compression reduces the often prohibitive time and cost of model evaluation by evaluating models on a small benchmark subset that closely matches full-benchmark results. To quantify estimation error, we derive an accurate analytical approximation to the error distribution when estimating full-benchmark scores from a subset, showing that most subsets yield small errors, while a few produce much larger errors, resulting in a long-tailed distribution. This means random sampling alone can achieve surprisingly strong performance with high probability, but remains unstable due to rare large errors. We further show that this instability is inherent to modern foundation models and persists even as more models are evaluated. Based on these findings, we introduce BestRand, a stable and low-cost benchmark compression method that preserves the efficiency of random sampling while substantially reducing its high-error tail. We validate BestRand on 70+ text, multimodal, and agent benchmarks, and further extend it to VLA evaluation. Compared with competitive methods, BestRand reduces high-error risk by 50.2% and estimation error by 16.4% on average, while requiring only 51.3% of the construction cost. It further reduces OOD estimation error by 21.8% on average across score-range, model-family, and temporal shifts. Together, our theory provides practical guidance for understanding and predicting the accuracy and reliability of benchmark compression, while BestRand enables stable and accurate compression at low cost. The code and data are publicly available onhttps://github.com/George-Ling3/BestRand.
