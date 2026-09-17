---
title: "Colla-Q: Toward Collaborative Experts in MoE Quantization via Minimax Precision Balancing"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.18131"
authors: ["Eunju Shin, Jongbin Ryu"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.18131v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.18131v1 Announce Type: new Abstract: In this paper, we present a Mixture-of-Experts (MoE) quantization method based on activation entropy. Although quantization reduces memory and computational costs, it can substantially degrade performance. In particular, performance decline is pronounced in quantized MoE models, where individual experts have a small number of parameters that are sensitive to low-bit representation. Considering that MoE operates as an ensemble model with collaborative contributions from routed experts, a significant performance decline of a particular expert due to quantization can harm model performance. Therefore, we propose Colla-Q, a bit-allocation framework to maintain balanced performance across experts through an activation-entropy-based bit-width allocation algorithm. This approach encourages each expert to operate collaboratively in the quantized model, thereby 1) improving the overall MoE performance and 2) reducing the dependence on the calibration dataset. Since uniformly adjusting each expert's performance facilitates robustness and stability of the MoE model, the proposed MoE quantization method can generalize more consistently across different calibration datasets. Our code is available at: https://github.com/mmai-laboratory/Colla_Q
