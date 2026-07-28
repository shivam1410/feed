---
title: "Scaling Native Multimodal Pre-Training From Scratch"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.22043"
authors: ["Haoyuan Wu", "Aoqi Wu", "Hai Wang", "Jiajia Wu", "Jinxiang Ou", "Bei Yu"]
date: "2026-07-23T20:00:00.000Z"
score: 80
guid: "2607.22043"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.22043.png"
generated: "2026-07-28T19:07:22+05:30"
---

Researchers investigated optimal model size and token count for vision-language transformers trained from scratch under fixed computational budgets. Minimal objective loss follows predictable compute laws; compute-optimal sizes and tokens scale as power laws. Language and multimodal objectives exhibit distinct scaling: language allocation law is largely invariant to data composition, while multimodal allocation is highly sensitive to it. Text-heavy mixtures become compute-efficient only at larger scales, shifting optimal allocation toward greater model capacity. By modeling data composition influence on compute laws and allocation exponents, researchers derive an efficiency frontier specifying precise configurations for resource allocation decisions.
