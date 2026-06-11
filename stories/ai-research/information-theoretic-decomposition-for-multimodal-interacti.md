---
title: "Information-Theoretic Decomposition for Multimodal Interaction Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11614"
authors: ["Zequn Yang, Yake Wei, Haotian Ni, Zhihao Xu, Di Hu"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.11614v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11614v1 Announce Type: new Abstract: Multimodal learning hinges on capturing redundant, unique, and synergistic information across modalities, which collectively constitute multimodal interactions. A critical yet underexplored challenge is that these implicit interactions vary dynamically across samples. In this work, we present the first systematic, information-theoretic analysis highlighting why learning these dynamic, sample-specific interactions is critical for effective multimodal learning. Our analysis further reveals deficits in conventional paradigms at learning these distinct interaction types: modality ensemble approaches struggle to capture synergy, while joint learning paradigms often under-utilize redundant information. This highlights the need for an approach that can adaptively learn from different interaction types on a per-sample basis. To this end, we propose Decomposition-based Multimodal Interaction Learning (DMIL), a novel paradigm that explicitly models and learns from sample-specific interactions. First, we design a variational decomposition architecture to isolate the constituent interaction components. Second, we employ a new learning strategy that leverages these explicit interaction components in a fine-tuning process to achieve comprehensive interaction learning. Extensive experiments across diverse tasks and architectures demonstrate that DMIL consistently achieves superior performance by adapting to holistic sample-specific interactions. Our framework is flexible and broadly applicable, establishing an interaction-centric paradigm for multimodal learning. The code is available at https://github.com/GeWu-Lab/DMIL.
