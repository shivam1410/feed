---
title: "MultiRef-Compass: Towards Comprehensive Evaluation of Multi-Reference-to-Audio-Video Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.14189"
authors: ["Xiaohan Zhang", "Yuqing Wen", "Junlin Chen", "Yuqi Tang", "Yiting He", "Lizhuo Shao", "Weiming Zhu", "Tengfei Liu", "Yang Shi", "Jialu Chen", "Yuanxing Zhang", "Huaxiong Li"]
date: "2026-07-14T20:00:00.000Z"
score: 60
guid: "2607.14189"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.14189.png"
generated: "2026-07-20T19:05:49+05:30"
---

Multi-reference-to-audio-video (MR2AV) generation aims to generate coherent audio-video content conditioned on multiple references and textual instructions. Existing benchmarks mainly focus on text-driven generation, single-reference subject preservation, or isolated audio-video alignment, leaving the emerging MR2AV setting largely unexplored. Compared with these settings, MR2AV requires models to jointly reason over multiple references while generating synchronized visual and audio content. Models must not only preserve each reference faithfully but also correctly bind and compose multiple referenced entities into coherent audio-visual events. To address this gap, we introduce MultiRef-Compass, a unified benchmark for MR2AV generation. It comprises 350 carefully curated samples constructed through a scalable and controllable asset-composition pipeline, covering multi-view subject preservation, multi-entity binding, and human-object-scene composition. To provide interpretable assessment, MultiRef-Compass defines an evaluation protocol with four dimensions: Basic Quality, Reference Consistency, Audio-Visual Consistency, and Instruction Following, using 14 sub-metrics. MultiRef-Compass integrates automatic metrics with a rejudging-enhanced MLLM-as-a-Judge framework, enabling scalable and auditable evaluation of both perceptual fidelity and reference-conditioned composition. Extensive experiments on eight representative MR2AV systems reveal substantial room for improvement across multiple evaluation dimensions, underscoring the need for a comprehensive benchmark and positioning MultiRef-Compass as a foundation for future MR2AV research.
