---
title: "VIEScore2: Unified Image Evaluation with Spatially Grounded Explanations"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.00994"
authors: ["Xianda Du", "Max Ku", "Weiming Ren", "Zhi Rui Tam", "Chunlin Ren", "Ping Nie", "Min-Hung Chen", "Wenhu Chen"]
date: "2026-09-30T20:00:00.000Z"
score: 67
guid: "2610.00994"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.00994.png"
generated: "2026-10-08T19:08:02+05:30"
---

Existing synthetic image evaluators typically provide only a scalar quality score and do not identify the image regions that support it. We introduce VIEScore2, a unified evaluator for image generation and editing tasks with optional conditioning images. VIEScore2 represents an image as an N x N grid and jointly predicts quality scores and defect locations in a single model pass. Its text-native grid representation provides a common interface for heterogeneous spatial supervision and enables directly verifiable post-training objectives. We train on 38K examples spanning score-only, localization-only, and joint supervision across generation and editing tasks. Starting from supervised fine-tuning, we further apply GRPO to improve defect localization using rewards that combine cell-level Dice overlap, score accuracy, and output-format validity. A parameter-free parser converts the structured predictions into readable explanations. On the primary suite, VIEScore2 achieves an overall-score SRCC of 0.601, compared with 0.491 for Gemini-3-Flash, the strongest zero-shot general-purpose VLM baseline under matched inputs. For defect localization, VIEScore2 outperforms both general-purpose VLMs and specialized spatial evaluators on three of six benchmarks in per-image grid IoU and ranks among the top three on five, including datasets beyond its training sources.
