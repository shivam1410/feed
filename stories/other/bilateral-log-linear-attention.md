---
title: "Bilateral Log-Linear Attention"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18974"
authors: ["Kazi Ashik Islam, Guojing Cong"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18974v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Sequence models represent past context at different resolutions, using token-level keys and values, fixed-size recurrent states, or hierarchies of compressed summaries. Full attention supports strong associative recall but requires quadratic work during training and prefill and a linearly growing key-value cache during inference. Linear attention and state-space models reduce these costs through fixed-size recurrent memory, but this compression can limit recall. Log-linear attention offers a middle ground by maintaining logarithmically many state matrices. However, its hierarchy favors finer resolution near the current query while compressing earlier context into coarser summaries. To complement this allocation of resolution, we introduce bilateral log-linear attention, which pairs the existing hierarchy with a second hierarchy anchored at the sequence origin. By combining their reads, the two branches provide finer access to both early and recent context while remaining causal. We derive recurrent and chunkwise parallel formulations for the added branch, preserving log-linear training and prefill work, logarithmic decoding work per token, and logarithmic persistent state storage at fixed feature dimensions and chunk size. In multi-query associative recall, this design raises mean overall test accuracy from 76.37% to 96.12% over forward log-linear attention across multiple training seeds. For pretrained language models under approximate parameter matching, it raises the mean score on six selected RULER needle-in-a-haystack tasks from 26.97% to 50.03% at a context length of 6144 tokens. In the same setting, bilateral attention also outperforms forward log-linear attention on seven of eight downstream retrieval tasks, including question answering and information extraction.
