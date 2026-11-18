---
title: "Communicate the Change: Efficient Expert Parallelism via Activation Compression"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.22215"
authors: ["Fengyuan Liu, Jay Gala, Siva Reddy, Dzmitry Bahdanau"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.22215v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

Scaling has driven the success of large language models (LLM), with sparse mixture-of-experts (MoE) architectures enabling greater parameter capacity without a proportional increase in computation. At large scales, MoE models rely on expert parallelism to distribute experts across devices. Each MoE layer requires two synchronous collective communication steps during inference: dispatching hidden states to the activated experts and combining the resulting expert outputs. As compute throughput has outpaced interconnect bandwidth, these synchronous collectives have become a major bottleneck to MoE scaling and efficiency. We address this challenge with EchoMoE, a lightweight architecture modification that retrofits existing MoE models, requiring approximately 8,500x fewer training tokens than full pretraining. Motivated by the observation that transformer blocks update the residual stream incrementally, we use a hidden state from an earlier layer as a reference and communicate only the compressed difference between it and the current state, rather than communicating each hidden state in full. EchoMoE periodically refreshes these reference states and transmits only the compressed differences synchronously, reducing the traffic on latency-critical paths without significant computational overhead. EchoMoE reduces inter-node communication volume by 58% and improves throughput by 22.6%, while preserving average performance within 3.8 percentage points across 18 benchmarks. EchoMoE further improves inference throughput by up to 2.38x over bandwidth-constrained Ethernet, paving the way for wide-area distributed inference. EchoMoE also tolerates quantization of the communicated representations without measurable quality loss. We release an efficient implementation for applying EchoMoE to pretrained MoE models, together with an inference integration for vLLM.
