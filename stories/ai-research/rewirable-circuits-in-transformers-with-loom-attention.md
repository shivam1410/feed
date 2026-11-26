---
title: "Rewirable Circuits in Transformers with Loom Attention"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.30634"
authors: ["Da Xiao", "Qingye Meng", "Shengping Li", "Xingyuan Yuan"]
date: "2026-11-22T19:00:00.000Z"
score: 35
guid: "2611.30634"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.30634.png"
generated: "2026-11-26T13:13:26+05:30"
---

We propose loom attention, which allows a Transformer to dynamically rewire its circuits at every token by interweaving a head's vertical attention over the outputs of earlier heads (to obtain its query, key and value) with its horizontal attention over tokens. We instantiate vertical attention efficiently with normalized and gated linear attention over a per-token matrix memory, which stores the compressed head outputs and serves as a second residual stream. This yields LoomFormer, a dual-stream architecture that splits control and content between the vector and matrix streams. Across model sizes and training token budgets in language modeling and downstream tasks, LoomFormer matches Transformers trained with over 3x compute and recent residual-stream baselines (HC/mHC, MUDDFormer, AttnRes) trained with ~1.7-2.8x. For example, trained on the same 300B tokens with only 2% extra FLOPs, LoomPythia-2.8B achieves ~1.6x the average downstream gain of mHC-Pythia-2.8B over Pythia-2.8B, and matches (0-shot) or surpasses (5-shot) Pythia-12B. Code is available at https://github.com/Caiyun-AI/LoomFormer
