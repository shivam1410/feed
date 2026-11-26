---
title: "Is 4 Bits Enough for EEG Sleep Staging? A Subject-Level Benchmark of MXFP4, NVFP4 and FP8"
category: "Neuroscience & Mind"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31436"
authors: ["Emese Batizi, Hossein Valavi"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: 35
guid: "oai:arXiv.org:2611.31436v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Can a sleep-staging model run in 4-bit precision and stay accurate? Yes, if the first and last layers stay in 8-bit. The researchers tested 13 quantization setups on Sleep-EDF-78, with 78 subjects. Plain 4-bit versions lost 1.98 to 3.04 points of Macro-F1 in one CNN. Keeping the first and last layers in 8-bit brought both 4-bit formats within 0.48 points of full precision. The fix adds at most 2.1 percent weight storage and needs no retraining.
