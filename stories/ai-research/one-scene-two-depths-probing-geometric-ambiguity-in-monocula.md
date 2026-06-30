---
title: "One Scene, Two Depths: Probing Geometric Ambiguity in Monocular Foundation Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.29600"
authors: ["Xiaohao Xu", "Feng Xue", "Xiang Li", "Haowei Li", "Shusheng Yang", "Tianyi Zhang", "Matthew Johnson-Roberson", "Xiaonan Huang"]
date: "2026-06-27T20:00:00.000Z"
score: 72
guid: "2606.29600"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.29600.png"
generated: "2026-06-30T19:06:59+05:30"
---

A faithful 3D world representation should account for layered geometry, where a single camera ray may contain multiple visible and geometrically valid surfaces. Monocular depth estimation, however, reduces this structure to one scalar depth per pixel. Transparent scenes make this ambiguity measurable: the same ray can pass through foreground glass and observe the background, turning the supervised target into a convention of annotation, data, and training rather than a scene-intrinsic truth. A learned predictor exposes this convention as its depth-layer preference. We introduce MultiDepth-3k (MD-3k), a sparse two-layer ordinal benchmark for measuring depth-layer preference and multi-layer spatial relationship accuracy (ML-SRA). On MD-3k, leading depth foundation models exhibit diverse layer preferences under standard RGB input, showing that the same layered geometry can be resolved differently across models. We further find that Laplacian Visual Prompting (LVP), a training-free spectral input transformation, can substantially change the reported layer for certain frozen models. The strongest RGB/LVP pair, DAv2-L, reaches 75.5% ML-SRA. These results suggest that depth foundation models may express complementary geometric hypotheses that standard RGB inference leaves unexpressed. We invite the community to rethink depth supervision and evaluation through an ambiguity-aware lens, where multiple valid 3D interpretations are treated as geometric structure to be measured, preserved, and expressed.
