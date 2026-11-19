---
title: "Implementing Binary Transformers with Approximate Memories with Permutation Invariance Enabled Selective (PIES) Protection"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23358"
authors: ["Zhen Gao, Xiao Yin, Kexin Liang, Pedro Reviriego, Shanshan Liu, Fabrizio Lombardi"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23358v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Quantization is an effective technique to reduce memory storage, computation complexity and power for Transformers, and the binarization of the weights is important for meeting these requirements. Approximate memory can further reduce the power for memory, but it also introduces errors. Current research for binary Transformers focuses on task performance, but the model dependable operation against errors on the memory has not been well studied. In this paper, we first evaluate the dependability of binary Transformers with the Bidirectional Encoder Representations from Transformers (BERT) as a case study. A large accuracy loss occurs only at high Bit Error Rates (e.g. BER = 5% or 10%). Then we propose a novel Permutation Invariance Enabled Selective (PIES) scheme to protect the binary weights at very low overhead. This scheme exploits the invariance of Transformers to permutations in the rows and columns to group the critical weights and perform selective protection on those weights. Simulation results show that PIES can recover most of the performance loss caused by bit errors at BERs as high as 10%, at an overhead significantly lower than traditional error correction schemes. These results confirm the feasibility of running binary Transformers using approximate memory with aggressive voltage scaling on resource-limited low power edge devices. The code for PIES is released on github (https://github.com/YangZhutian/binary-transformer-prefix-repair).
