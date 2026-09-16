---
title: "LLM Inference in a Flash!"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16161"
authors: ["Sebastian Zhao, Minseo Kim, Coleman Hooper, Luca Manolache, Michael W. Mahoney, Yakun Sophia Shao, Kurt Keutzer, Amir Gholami"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16161v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16161v1 Announce Type: new Abstract: Large Language Models (LLMs) have shown impressive capabilities across a range of natural language processing tasks, and LLM inference has emerged as a critical workload for enabling downstream applications. The demands of serving LLM inference are becoming increasingly challenging as requests shift toward longer sequences and heavier inference, driven by retrieval-augmented generation, inference-time compute scaling, and long-context applications. Additionally, these challenges are compounded by hardware trends, as memory capacity and communication bandwidth are not scaling as fast as increases in workload complexity. Compute-in-Flash is a promising solution to address memory bandwidth limitations by moving computation close to memory, and to exploit the large capacity of SSD technologies. However, it is challenging to deploy LLMs on these systems as they lack support for high-precision floating point operations and have limited write endurance. In our work, we aim to address these challenges by designing inference algorithms to enable LLM inference on Flash compute-in-memory devices. We present an end-to-end integer-only quantization approach to eliminate expensive floating-point computations. To address the limited write endurance, we design a dictionary-based KV cache compression strategy based on sparse dictionary coding that represents each KV vector as a linear combination of static dictionary vectors. These algorithmic improvements enable us to exploit the benefits of Compute-in-Flash for both model weights and KV cache, and to minimize expensive data transfer operations. Across Llama-3.1-8B and Qwen-2.5-7B, our combined method exhibits limited accuracy degradation while reducing dynamic KV cache traffic by 15$\times$.
