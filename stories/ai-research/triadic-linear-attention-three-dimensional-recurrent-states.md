---
title: "Triadic Linear Attention: Three-Dimensional Recurrent States for Long-Context Sequence Modeling"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.36529"
authors: ["Oliver Sieberling", "Bharat Runwal", "David Jin", "Ryan Chin", "Rameswar Panda", "Yoon Kim"]
date: "2026-09-28T20:00:00.000Z"
score: 58
guid: "2609.36529"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.36529.png"
generated: "2026-10-05T19:10:08+05:30"
---

Recurrent neural networks (RNNs) compress the historical context into a memory state of fixed size, thus allowing for constant-time inference. The memory state size is a crucial factor in their performance, as exemplified by the strong performance and resurgence of linear attention, which extends the vector-valued hidden states of ordinary RNNs to matrix-valued hidden states. Crucially, linear attention does so in a parameter-efficient way, in particular by using an outer product of the key and value vectors to write to the matrix-valued hidden state. We generalize this construction and propose triadic linear attention, which writes the triadic outer product of a key, a second key, and a value, into a third-order (i.e., 3D) tensor state, and reads from it by contracting both key axes with two queries. An E-dimensional second key thus yields an E-fold increase in state size while adding only two projections. Triadic linear attention is compatible with data-dependent forgetting, the delta rule, and chunkwise-parallel training. Applied to Gated DeltaNet and scalar-gated linear attention, triadic linear attention substantially improves long-context language modeling and recall, outperforming alternatives that enlarge the state.
