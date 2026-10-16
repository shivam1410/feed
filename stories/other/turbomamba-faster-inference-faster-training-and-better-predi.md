---
title: "TurboMamba: Faster Inference, Faster Training, and Better Prediction with Lexical Memory"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.20682"
authors: ["Hanxin Zhang"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.20682v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

We introduce TurboMamba, a language-model architecture for faster inference, faster training, and better token prediction. A global Mamba-3 model runs once per completed token block. A small Transformer uses this global context and earlier tokens within the block to predict the next token. Three lightweight additions improve local predictions: direct access to the previous block's last token, a small correction to next-token scores, and a learned mixture with recent-token frequencies. We compare twelve small-scale implementations on public FineWeb-Edu, with comparable parameter counts and shared training-budget caps. The baselines include Transformer, Mamba-3, Jamba, and Zamba. The Jamba and Zamba versions use Mamba-3 in place of their original Mamba modules. TurboMamba achieves the lowest mean test prediction loss (negative log-likelihood, NLL) among all twelve models. Its mean NLL is 9.4% lower than that of Mamba-3, 7.3% lower than that of the Jamba version, and 18.3% lower than that of the Zamba version. End-to-end training throughput is 2.60x that of Mamba-3, 2.81x that of the Jamba version, and 4.82x that of the Zamba version. We measure end-to-end batch latency for a batch of 32 sequences, each with a 256-token prompt and 128 generated tokens. On this workload, TurboMamba achieves a 3.12x speedup over Mamba-3, a 3.53x speedup over the Jamba version, and a 6.21x speedup over the Zamba version.
