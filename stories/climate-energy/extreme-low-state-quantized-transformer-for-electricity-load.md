---
title: "Extreme Low-State Quantized Transformer for Electricity-Load Forecasting"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.28784"
authors: ["Muhammad Sabbir Alam, Harindra Sandun Mavikumbure, Victor Cobilean, Milos Manic, Jayasimha Atulasimha"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.28784v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

Aggressive low-state weight quantization can substantially reduce neural-network representational flexibility, making predictive performance difficult to preserve when only a few discrete weight states are available. We investigate this regime for Transformer-based electricity-load forecasting using 3-, 5-, 7-, and 16-state weight quantization across feed-forward-only and attention-plus-feed-forward quantization. Two tasks predict either the next hour or the next 24 hours from the preceding 48 hours across two co-primary electricity-consumption datasets. Direct post-training quantization (PTQ) increased mean normalized root-mean-square error (NRMSE) relative to full precision by 6.25 and 7.04 percentage points in Datasets A and B, whereas quantization-aware fine-tuning (QAT-FT) recovered approximately 90.2% and 94.5% of these penalties. Quantization-aware training from random initialization (Scratch-QAT) also produced competitive low-state solutions, with particularly favorable behavior at three states. We further introduce accumulated-update thresholding, which accumulates optimizer-proposed weight changes before commitment. Relative to paired Scratch-QAT controls, this reduced committed shadow-weight updates by approximately 99.7% and discrete state transitions by approximately 77--80%, while mean NRMSE changed by only +0.042 and +0.197 percentage points. These results show that useful Transformer forecasting can be retained under highly discrete weight representations while strongly suppressing target-state activity, supporting a prospective route toward compact, low-activity edge forecasting using multilevel synaptic devices.
