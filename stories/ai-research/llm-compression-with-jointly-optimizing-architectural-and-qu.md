---
title: "LLM Compression with Jointly Optimizing Architectural and Quantization choices"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04063"
authors: ["Hoang-Loc La, Truong-Thanh Le, Amir Taherkordi, Phuong Hoai Ha"]
date: "Fri, 05 Jun 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2606.04063v1"
image: ""
generated: "2026-06-06T01:41:01+05:30"
---

arXiv:2606.04063v1 Announce Type: new Abstract: Deploying large language models (LLMs) is challenging due to their significant memory and computational requirements. While some methods address this by developing small or tiny language models from scratch, these approaches demand extensive GPU training. Compressing pre-trained LLMs for edge devices offers a compelling alternative. Beyond pruning and quantization, Neural Architecture Search (NAS) enables effective compression, yet prior NAS approaches often limit the search space and decouple architecture from quantization. We introduce a differentiable NAS framework that explores the entire space and jointly optimizes architectural configurations alongside mixed-precision quantization for linear layers of LLMs. Experiments demonstrate superior accuracy-latency trade-offs: our models achieve up to 1.4x faster inference than sequential NAS-then-quantization baselines at comparable accuracy, or up to 6% higher average accuracy across seven reasoning tasks at equivalent latency.
