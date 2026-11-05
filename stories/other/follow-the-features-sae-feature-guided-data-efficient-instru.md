---
title: "Follow the Features: SAE Feature-Guided Data-Efficient Instruction-Tuning of Large Language Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.04085"
authors: ["Ryan Swift, Konstantinos Psounis"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.04085v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Selecting small, effective instruction-tuning datasets requires identifying which aspects of the original data to retain. We introduce Follow the Features (FtF), a data-selection method that uses sparse autoencoder (SAE) features to characterize training data and guide subset construction. FtF ranks features using dataset-level activation statistics, scores samples by their expression of highly ranked features, and incorporates feature resampling to encourage diversity. The LLM-SAE pair used for selection is independent of the model being fine-tuned, enabling reuse across target models. We evaluate FtF on two model-dataset settings at a training budget of 100 samples with a fixed sequence length of 256 tokens. FtF achieves performance competitive with GRAPE and S2L, with relative rankings varying across settings. On Qwen 3 8B trained on Alpaca, FtF exceeds full-dataset training by 1.59 percentage points in the harmonic mean of an AlpacaEval-based win rate and Open LLM Leaderboard performance, although full-dataset training retains a higher Leaderboard score. These results support SAE feature statistics as a useful signal for data-efficient instruction tuning.
