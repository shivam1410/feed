---
title: "FATE: Frame-Level Audio-Visual Temporal Embedding"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.01310"
authors: ["Kaisi Guan", "Bingzi Zhang", "Xihua Wang", "Ying Ba", "Xin Cheng", "Yijing Chen", "Ruihua Song"]
date: "2026-08-01T20:00:00.000Z"
score: 65
guid: "2608.01310"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.01310.png"
generated: "2026-08-10T19:05:52+05:30"
---

When a dog opens its mouth and barks, humans naturally recognize what the sound is and when it occurs. Building audio-visual models with this same ability requires representations that capture both semantic and temporal alignment. Current approaches fall short on one side or the other: embedding models match semantic but lose temporal information; synchronization models capture temporal offsets but lack semantic understanding. To bridge this gap, we propose FATE, Frame-level Audio-visual Temporal Embedding. Unlike prior embedding models that pool each modality into a single embedding and discard temporal information, FATE retains frame-level sequences, aligns them on the physical timeline, and computes similarity over strictly aligned frame pairs. Unlike synchronization models that output only an offset prediction, FATE encodes synchronization in a reusable embedding space, trained with a joint objective combining cross-video semantic and within-video temporal contrastive learning to capture both what sounds and when it occurs. Across three tasks, FATE surpasses the strongest baseline on temporal and semantic retrieval by a large margin, matches fully supervised methods on event localization in a zero-shot setting, and achieves the best correlation with human judgments as a generation evaluation metric. The source code can be found at https://github.com/guankaisi/FATE.
