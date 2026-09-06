---
title: "LLaDA-Image: Building Strong Image Generators with Fully Open Training Recipes"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.03796"
authors: ["Chuyan Chen", "Haoxing Chen", "Kun Chen", "Zhenglin Cheng", "Long Cui", "Ruishan Fang", "Zhangxuan Gu", "Zhicheng Huang", "Zhenzhong Lan", "Yuanting Lei", "Haoquan Li", "Jianguo Li", "Rongchuan Li", "Sidu Li", "Tao Lin", "Deyuan Liu", "Jiacheng Liu", "Lin Liu", "Yuxuan Lou", "Zhisheng Lu", "Yuxin Ma", "Shuheng Shen", "Peng Sun", "Chaoyang Wang", "Hongjun Wang", "Xiaomei Wang", "Yongxin Wang", "Chengzhang Wu", "Hongru Wu", "Jun Xie"]
date: "2026-09-02T20:00:00.000Z"
score: 80
guid: "2609.03796"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.03796.png"
generated: "2026-09-06T19:06:55+05:30"
---

LLaDA-Image unifies a 6-billion-parameter diffusion transformer with a frozen vision-language module for photorealistic image generation using image-only pre-training and a Muon optimizer. The architecture generates high-quality images with precise editing control from text prompts. To enable fast inference, researchers distilled the full model into a 2-4 step variant achieving state-of-the-art results in open-source image generation. This distillation maintains quality while reducing computational requirements for real-time applications. The combination of architectural choices—frozen language modules and diffusion transformers—with optimized training and inference pipelines establishes new accessibility benchmarks for generative AI, making advanced capabilities available beyond proprietary platforms.
