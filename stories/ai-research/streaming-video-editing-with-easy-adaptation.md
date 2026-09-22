---
title: "Streaming Video Editing with Easy Adaptation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.24788"
authors: ["Yujia Hu", "Jiajun Li", "Zihao He", "Songhua Liu"]
date: "2026-09-20T20:00:00.000Z"
score: 68
guid: "2609.24788"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.24788.png"
generated: "2026-09-22T19:08:22+05:30"
---

In this paper, we propose SVEET, a framework that requires merely training on a pretrained bidirectional video diffusion model but supports high-quality streaming video editing in an auto-regressive fashion. To tackle this problem, we first systematically revisit existing video-to-video diffusion approaches and identify two key principles for such streaming adaptation: backbone feature disentanglement and conditional frame independence. Building on these insights, we develop a novel paradigm for controllable video generation. At its core, an auxiliary model branch encodes source video inputs with temporally independent self-attention, and the intermediate features are injected into the corresponding backbone blocks for streaming-compatible control. Moreover, to bridge the discrepancy between the feature spaces of bidirectional and streaming models, we propose a decoupled training scheme that explicitly enforces the orthogonality between the optimization directions of video controllability and model causality. Such disentanglement ensures compatibility between the two objectives at inference and facilitates smooth zero-shot knowledge transfer across heterogeneous backbone architectures. Extensive experiments demonstrate that SVEET achieves superior editing quality while maintaining real-time performance, attaining 15 FPS on a single H100 GPU 17 without any auxiliary acceleration techniques. Codes are available at https://github.com/YujiaHu1109/SVEET.
