---
title: "MovieRoll: A Systematic Framework for Rolling Out Long-Form Videos"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.21339"
authors: ["Yunyang Ge", "Weijie Kong", "Ryan Xu", "Yue Wu", "Qi Tian", "Jiangfeng Xiong", "Bin Lin", "Mingzhe Zheng", "Shenghai Yuan", "Zheyuan Liu", "Jianwei Zhang", "Li Yuan"]
date: "2026-11-15T19:00:00.000Z"
score: ""
guid: "2611.21339"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.21339.png"
generated: "2026-11-17T19:45:07+05:30"
---

Streaming video generation must sustain quality beyond the training horizon while handling self-generated history and growing cache costs. To address these challenges, we present MovieRoll, a base-to-distilled framework that connects streaming fine-tuning, long-rollout distillation, and long-horizon inference. We first establish a robust multi-step base through Window-wise Teacher Forcing (WinTF), which jointly denoises chunks at progressive noise levels with bidirectional attention within each window and causal access to preceding history. To retain historical context efficiently, hierarchical KV-cache compression (HieraKV) exploits layer-wise attention patterns, retaining full history in shallow layers and sink--recent history in deeper layers. This reduces cache memory by up to 78% while improving generation quality. Building on this base, cumulative long tuning with distribution matching distillation (CuLT-DMD) holds parameters fixed throughout each long self-rollout and averages local gradients before updating. Each update therefore combines supervision across temporal positions while retaining only one local computation graph, enabling efficient long-rollout training of a few-step generator. To extend generation beyond the training horizon, KV recomputation bounds context for both models, while guidance annealing (AnnealCFG) reduces guidance toward the clean endpoint to stabilize MovieRoll-Base. Complementing these modeling advances, FBCA attention and PS-VAE decoding support efficient training and streaming output. On HeliosBench, MovieRoll-Base remains competitive at 30s after training on videos of up to 15s, and MovieRoll-Distilled achieves the highest total scores among the compared methods across single- and multi-event evaluations up to 60s, combining sustained naturalness with active motion.
