---
title: "Wavenumber-Aware Deep Learning for Robust Analysis of Raman Spectra"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30746"
authors: ["Jihwan Kim, Jaeseong Heo, Yujin Kim, Sang Bin Yoon, Chanjoong Kim, Kwang-Im Oh, Hyon Bin Na, Kyungwon Kwak, Myeongkee Park, Joonyoung F. Joung"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.30746v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Machine-learning models for spectroscopy usually treat a spectrum as a fixed-grid intensity vector, leaving the physical coordinate implicit in the array index. Such models are tied to a single sampling grid, spectral range and resolution, which limits their use when measurement conditions change. Here we represent each spectral point as a pair of intensity and wavenumber and compute Transformer positional encodings from the wavenumber itself. On Raman spectra of three bacterial species and their synthetic mixtures, this representation remained robust to noise, sparser sampling and partial spectral coverage across convolutional, residual and Transformer networks. In controlled comparisons, wavenumber-based encoding outperformed index-based and learned encodings under partial observation and retained its performance on sampling grids never seen during training, where index-based encoding degraded. These findings were reproduced on a public 30-isolate bacterial benchmark. Explicit physical coordinates offer a simple route to robust spectral analysis under variable measurement conditions.
