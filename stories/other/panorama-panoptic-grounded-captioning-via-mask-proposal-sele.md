---
title: "PANORAMA: Panoptic Grounded Captioning via Mask Proposal Selection"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.19143"
authors: ["Sara Pieri", "Evangelos Kazakos", "Shizhe Chen", "Josef Sivic", "Cordelia Schmid"]
date: "2026-09-15T20:00:00.000Z"
score: ""
guid: "2609.19143"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.19143.png"
generated: "2026-09-17T19:00:24+05:30"
---

Intelligent systems that act in the world require image understanding that is both comprehensive and spatially grounded. Current vision-language models (VLMs) can generate fluent and detailed image captions, but reliably associating them with image pixels remains challenging. Existing methods that combine dense captioning with pixel-level grounding often produce either incomplete descriptions or inaccurate segmentation masks. We study this problem through panoptic grounded captioning, a task that requires a VLM to describe both foreground objects and background regions while grounding each referring phrase with pixel-level masks. We make three contributions. First, we introduce PanoCaps, a human-annotated benchmark constructed from panoptic segmentation datasets. It provides dense captions with near-complete pixel coverage and image-text alignments at the entity level, supporting both training and evaluation. We further propose a phrase-mask matching protocol and a generalized Panoptic Quality (gPQ) metric that jointly evaluates textual and mask agreement. Second, we formulate phrase grounding as selection from a phrase-conditioned pool of mask proposals and introduce PANORAMA, a VLM that conditions a pretrained segmenter on contextualized phrase representations to obtain candidate masks and learns to select those corresponding to each phrase. Training this interface jointly with caption generation enables PANORAMA to produce high-quality masks while allowing each phrase to refer to a single region or multiple instances. Third, PANORAMA achieves the best overall grounding on PanoCaps and matches or exceeds specialized models across several pixel-level grounding tasks. Experiments show that our method produces precise entity-level segmentations while maintaining detailed, mask-consistent captions. Code, data and models are available at https://www.di.ens.fr/willow/research/panorama/.
