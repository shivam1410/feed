---
title: "Are We Really Benchmarking Forecasting Models? The Impact of Preprocessing on Time Series Performance"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09096"
authors: ["Guilherme Afonso Galindo Padilha, Paulo Salgado Gomes de Mattos Neto, Rafael Menelau Oliveira e Cruz"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2610.09096v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

While established literature underscores the pivotal role of preprocessing in forecasting accuracy, this stage remains largely overlooked in current research. Modern benchmarks typically resort to simple scaling, failing to account for critical transformations required to address nonstationarity, such as differencing. This omission creates a significant structural preprocessing bias that favors models with built-in data treatments while obscuring the true potential of simpler architectures. We study this effect through a preprocessing-aware benchmark that evaluates 11 forecasting models across 16 reversible preprocessing pipelines on 29,000 M4 time series. Our results identify preprocessing as a key driver of forecasting performance. Optimizing preprocessing per series yields gains of approximately 27\% to 87\% across all evaluated models, with architectures lacking internalized preprocessing experiencing the most substantial improvements. This allows simpler architectures to become highly competitive with complex, state-of-the-art models in modern forecasting benchmarks. All resources and experimental results from this benchmark are stored in a comprehensive metadataset to support future metalearning tasks.
