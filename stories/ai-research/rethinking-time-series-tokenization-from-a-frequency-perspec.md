---
title: "Rethinking Time Series Tokenization from a Frequency Perspective"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.28997"
authors: ["Zelong Tian, Ming Jin, Bo Du, Shirui Pan"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.28997v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

Tokenization that partitions time series into subsequences has become a foundational paradigm in modern time series modeling. However, we find that current tokenization strategies inherently introduce spectral distortions, forcing the learned representations to diverge from the true underlying patterns such as trend, periodicity, and seasonality, thereby impairing model performance. Through theoretical analysis from a frequency perspective, we derive the boundary conditions under which such distortions occur. To overcome this distortion, we propose TimeFT, a nearly distortion-free frequency-based tokenizer for time series data. TimeFT obtains tokens through frequency-domain partitioning, frequency shifting, and Nyquist sampling. The method is parameter-free, incurs negligible computational complexity, and can serve as a drop-in replacement for existing tokenizers. Our extensive experiments on diverse tasks such as forecasting, classification, and anomaly detection demonstrate that TimeFT consistently and significantly improves performance.
