---
title: "MODE: Modality-Decomposed Expert-Level Mixed-Precision Quantization for MoE Multimodal LLMs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17118"
authors: ["Yuanteng Chen, Peisong Wang, Zhilei Liu, Nanxin Zeng, Yuantian Shao, Shiqiang Lang, Tao Liu, Chuangyi Li, Qinghao Hu, Gang Li, Jing Liu, Jian Cheng"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.17118v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17118v1 Announce Type: new Abstract: Mixture-of-Experts Multimodal Large Language Models (MoE-MLLMs) offer remarkable performance but incur prohibitive GPU memory costs, making compression essential. Among PTQ methods, expert-level mixed-precision quantization has proven effective for MoE-LLMs, yet suffers notable degradation on MoE-MLLMs due to two overlooked biases in expert importance estimation. (1) At the cross-modal level, the numerical dominance of vision tokens causes expert selection frequency to be dominated by vision tokens, masking experts that are critical to the text modality; (2) at the intra-vision level, the large proportion of redundant vision tokens further skew frequency statistics, obscuring experts critical for informative visual content. To bridge gaps, we propose MODE, a modality-decomposed expert-level mixed-precision quantization framework for MoE-MLLMs that decomposes expert selection frequency by modality, filters redundant vision tokens to obtain denoised visual frequency, and further evaluates quantization sensitivity per modality as a complementary signal to frequency-based estimation. These signals are integrated into an Integer Linear Programming formulation to assign per-expert bit-widths under a given budget. Extensive experiments show that MODE is particularly well-suited for MoE-MLLMs, limiting average performance loss to within 2.9% at W3A16, with larger gains at the extreme 2-bit setting.
