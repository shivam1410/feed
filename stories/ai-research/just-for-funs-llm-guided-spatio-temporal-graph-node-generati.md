---
title: "Just for FUNS: LLM-Guided Spatio-Temporal Graph Node Generation for Forecasting Unobserved Node States"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.08818"
authors: ["Shuhao Li, Weidong Yang, Changan Liu, Wei Zhuo, Yingbo Zhou, Fan Zhang, Siqiang Luo"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2610.08818v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Spatio-temporal forecasting is a cornerstone of logistics, urban planning, and intelligent transportation systems. However, constrained by deployment costs and maintenance resources, sensor networks often lack comprehensive spatial coverage, rendering Forecast Unobserved Node States (FUNS) a critical yet formidable challenge. Conventional models rely on historical observations and typically falter when encountering nodes without prior records. To address this, we redefine the problem as a conditional generation task on spatio-temporal graphs and propose GenST, a framework that introduces Large Language Models (LLMs) as a semantic bridge, leveraging a pre-trained LLM fine-tuned to extract rich semantic features from node descriptions, such as functional zones and road network structures, to compensate for missing spatio-temporal signals. Specifically, we design a two-stage generative architecture: a Spatio-Temporal VAE first compresses spatio-temporal dynamics into a latent space, followed by a Generative Transformer (GenT) that reconstructs the future states of unobserved nodes from noise, guided by multi-modal conditions including semantics, geographic coordinates, and neighborhood contexts. Experiments on six traffic and two non-traffic datasets show GenST significantly outperforms existing baselines in zero-shot prediction tasks, demonstrating the practical potential of semantic-guided generation for mitigating spatio-temporal data sparsity.
