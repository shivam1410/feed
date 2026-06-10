---
title: "Blurry Window Attention"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09862"
authors: ["Axel Laborieux, Christos Sourmpis, Juan Gabriel Kostelec, Qinghai Guo"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.09862v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09862v1 Announce Type: new Abstract: The Softmax Attention operation in Transformer language models has a quadratic complexity in the sequence length and a growing state size in the form of KV cache, which becomes a bottleneck in long context scenarios. To overcome this limitation, alternative architectures with linear complexity and finite state size have been introduced, such as State-Space Models (SSMs), Linear Attention (LA), and Attention with Bounded-memory Control (ABC). Though linear models achieve similar language perplexity as Transformers, they are still behind in tasks which require retrieval or recall of specific information. In this work, we introduce Blurry Window Attention (BLA) a novel ABC method inspired by SSMs. BLA stores a frequency window from which a blurry KV history is reconstructed via interpolation using Dirichlet kernels. BLA can be understood as a generalization of Sliding Window Attention (SWA) depending on the Dirichlet kernels resolution or as a special case of the Gated Slot Attention (GSA), where the decay factor is implemented with Dirichlet kernels. We describe in details the theory and efficient implementation of BLA. On the Multi-Query Associate Recall (MQAR) synthetic task, we show that the state efficiency of BLA is 8$\times$ better than SWA and is competitive with popular linear attention models, and in the RegBench synthetic task, only BLA and SWA improve their performance as the state size grows among the linear models we tested.
