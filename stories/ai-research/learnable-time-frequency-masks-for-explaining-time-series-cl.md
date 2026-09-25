---
title: "Learnable Time-Frequency Masks for Explaining Time-Series Classifiers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.29270"
authors: ["Theresa Dahl Frehr, Francisco Pelayo, Lukas Raad, Alicia Garc\\'ia Sanz, Thea Br\\\"usch, Tommy Sonne Alstr{\\o}m"]
date: "Fri, 25 Sep 2026 00:00:00 -0400"
score: 42
guid: "oai:arXiv.org:2609.29270v1"
image: ""
generated: "2026-09-25T23:24:50+05:30"
---

Time-series explainability remains challenging because discriminative information is often encoded in latent frequency or time-frequency features rather than in the raw signal itself. Existing attribution methods typically operate either in the time domain or in a fixed transform domain, limiting their ability to capture salient information across different representations. We propose XACT, a general framework that learns sparse attribution masks over coefficients from arbitrary invertible time-frequency transforms. We evaluate the framework on the STFT, the continuous wavelet transform, and the discrete wavelet transform. In addition, we extend the virtual inspection layer approach from the STFT to both wavelet transforms, enabling LRP to generate explanations in these representations. On a synthetic dataset, XACT produces precise explanations and is less prone to highlighting spurious features than the tested baselines. Across two real-world datasets, XACT produces sparse and structured explanations, although no method performs best across all quantitative evaluation criteria. These results demonstrate that learning explanations directly in time-frequency representations offers a flexible approach to interpreting deep-learning models for time series data.
