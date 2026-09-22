---
title: "Retention-Constrained Post-Training Quantization of Cellpose-SAM for Stem Cell Microscopy"
category: "Health & Medicine"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.21038"
authors: ["Sebastián A. Cruz Romero"]
date: "2026-09-16T20:00:00.000Z"
score: 78
guid: "2609.21038"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.21038.png"
generated: "2026-09-22T19:08:22+05:30"
---

Researchers evaluated lossy compression of the Cellpose-SAM foundation model for stem cell microscopy using a retention criterion: 95% confidence that performance degradation stays above a -0.02 margin across imaging modalities. Weight-only 8-bit quantization preserved performance across all 176 test fields. A mixed 4-bit/8-bit scheme achieved 6.76x compression with no catastrophic failures, whereas ternary quantization failed on 169 of 176 fields. Results show compression should be validated per imaging modality rather than by single-number accuracy metrics.
