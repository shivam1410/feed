---
title: "Resilient Concurrent Causal Discovery for Topological Event Sequences"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21815"
authors: ["Jiyu Tian, Junhao Dong, Mingchu Li, Lingling Fang, Liming Chen, Andreas Holzinger, Zheng Yan, Yew Soon Ong"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.21815v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21815v1 Announce Type: new Abstract: Causal discovery on topological event sequences is crucial for ensuring the reliability of networks. However, existing methods struggle to capture the complex causal relationships arising from concurrent events and lack robustness to incomplete event sequences. To address these issues, we propose a resilient concurrent causal discovery method, termed RCCD, enabling robust learning of causal graphs from topological event sequences. Specifically, we first introduce an influence-aware hyperedge causal attention mechanism, which incorporates event duration into the embedding representation, aggregates concurrent event features via hyperedge causal convolution, and injects network prior knowledge to capture the complex many-to-one causal interactions. Furthermore, we design a masked-based alternating causal optimization framework, which forces the model to recover masked event types based on context through self-supervised mask reconstruction, thereby enhancing the resilience of the predictor to missing data. To validate the effectiveness of our method, we conduct extensive experiments on both simulated and real-world telecommunication network datasets. Experimental results demonstrate that the proposed method significantly outperforms existing state-of-the-art methods in both accuracy and robustness, making it more suitable for real-world telecommunication network environments.
