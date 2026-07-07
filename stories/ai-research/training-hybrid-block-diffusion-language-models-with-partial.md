---
title: "Training Hybrid Block Diffusion Language Models with Partial Bidirectionality"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.02805"
authors: ["Pranshu Chaturvedi, Parth Shroff, Tarun Suresh, Hangoo Kang, Kaiyue Wen"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2607.02805v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.02805v1 Announce Type: new Abstract: High-throughput long-context generation is one of the central challenges for large language models. Generation is typically memory-bandwidth-bound rather than compute-bound: each decoding step must stream the accumulated key/value (KV) cache from memory, so bandwidth demand grows with context length while only one token is emitted. Two parallel approaches have therefore emerged: reducing memory access with efficient attention variants and linear-time mixers such as Mamba, or increasing parallel computation by generating blocks of tokens at once. However, technical challenges arise when combining these two ideas. Earlier hybrid diffusion models such as DiffuMamba use bidirectional Mamba mixing, including a reverse-direction scan relative to causal generation. This reverse scan needs to scan the entire sequence, so its states are not prefix-only and cannot be precisely reused as a cache even when diffusion is performed block by block. We propose a BDLM Mamba--attention hybrid that addresses this challenge by restricting the reverse Mamba scan to the active denoising block, which enables exact caching across blocks. In an 87M-parameter DCLM sweep, BDLM Mamba-H achieves the best C4-en validation perplexity compared to BDLM attention and full-sequence baselines. At 350M parameters, it remains competitive with BDLM attention. For long-context inference, BDLM Mamba-H reaches 19.7x the throughput of full-sequence DiffuMamba-H at 65K tokens and 3.7x the throughput of BDLM attention at 262K, showing that Mamba hybrids are a potential long-context diffusion architecture.
