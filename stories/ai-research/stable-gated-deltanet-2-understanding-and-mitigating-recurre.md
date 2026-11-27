---
title: "Stable Gated DeltaNet-2: Understanding and Mitigating Recurrent State Instability"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.34051"
authors: ["Xichong Zhang", "Xixuan Hao", "Zhichen Liu", "Le Zhou", "Zeyu Zhang", "Boyu Chen", "Mingfei Lu", "Zehao Lin", "Bo Tang", "Yonggang Zhang", "Linyun Liu", "Feiyu Xiong", "Jianlin Su", "Zhiyu Li"]
date: "2026-11-24T19:00:00.000Z"
score: 35
guid: "2611.34051"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.34051.png"
generated: "2026-11-27T19:03:37+05:30"
---

Linear attention offers an efficient solution for long-sequence modeling via linear complexity and fixed-size recurrent states. Gated DeltaNet-2 (GDN-2) introduces independent channel-wise control over erasure and writing, enhancing state-update expressiveness and in-context retrieval, yet it suffers from training failures during long-context training. We trace these failures to the asymmetry between reading and modification directions during erasure, which yields non-normal erase operators whose directional gains accumulate across tokens, triggering exponential state growth even without new writes. To resolve this, we propose , employing symmetric erasure to ensure non-expansive state propagation and decay-regulated residual writing to preserve writing flexibility. Theoretically, we establish an O(T) upper bound on recurrent state growth while retaining chunkwise parallel computation. Experiments on ~1.6B parameter models show that  achieves stable training alongside improved long-context retrieval. Compared to GDN-2, it boosts the 128K average RULER score by 6.80 points in the recurrent setting and average accuracy across nine downstream tasks by 0.62 points in the hybrid setting.
