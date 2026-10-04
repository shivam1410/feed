---
title: "VTR-Bench: A Systematic Benchmark for Evaluating Visual Text Rendering in Video Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.01499"
authors: ["Yu Huang", "Jungang Li", "Zhiyuan Wang", "Yonghua Hei", "Song Dai", "Jiayu Yang", "Deyuan Liu", "Xiang Zheng", "Xiaoshuang Shi", "Hao Cheng", "Kaidi Xu"]
date: "2026-09-30T20:00:00.000Z"
score: 48
guid: "2610.01499"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.01499.png"
generated: "2026-10-04T19:07:43+05:30"
---

Recent video generation models can produce highly realistic videos from natural language instructions, with visual quality approaching cinematic standards. Existing evaluation benchmarks, however, predominantly assess visual quality, aesthetic appeal and physical plausibility, while paying limited attention to text, an essential medium for conveying information in everyday scenes. A generated video may appear visually compelling and feature lifelike subjects, yet still render the text within the scene incorrectly. To address this overlooked dimension, we introduce VTR-Bench, a systematic benchmark for evaluating the Visual Text Rendering capabilities of video generation models. VTR-Bench situates text within concrete application scenarios, such as advertisements and scientific videos, with 300 carefully constructed prompts spanning five scenario categories. We develop an automated evaluation pipeline with human alignments that separately assesses text fidelity through carrier-specific transcription and scene and motion requirements through a prompt-specific chain of query. Beyond evaluation, we introduce a Keyframe-Guided Agentic Framework in which a Director agent coordinates image and video generation with visual evaluation, guiding iterative refinement and candidate selection through visual feedback. Experiments on 11 state-of-the-art models reveal widespread difficulties in accurately rendering scene text, with the best-performing model recording an overall word error rate (WER) of 0.250. We further analyze text rendering failures to characterize the challenges faced by current video generation models. These findings highlight visual text rendering as a key challenge for video generation and demonstrate a practical path toward improvement. Code is available at https://github.com/hardenyu21/VTR-Bench.
