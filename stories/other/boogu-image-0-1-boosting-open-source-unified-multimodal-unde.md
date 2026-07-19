---
title: "Boogu-Image-0.1: Boosting Open-Source Unified Multimodal Understanding and Generation"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.13125"
authors: ["Guoxuan Chen", "Chufeng Xiao", "Haoran Yang", "Siyue Xie", "Binxiao Huang", "Ming Zhang", "Cheuk Him Chau", "Xinyu Fu", "Yingzhao Lian", "Tom S. Y. Li", "Jintao Lin", "Bowen Dong", "Zian Qian", "Yuhao Liu", "Yuxuan Hu", "Weikang Shi", "Bin Zou", "Bowen Zheng", "Haoxuan Che", "Chang Chen", "Yuyang He", "Heyang Sun", "Tianyu Huang", "Chong Hou Choi", "Cheng Gong", "Han Shi", "Haoli Bai", "Xihui Liu", "Hongsheng Li", "Qifeng Chen", "Chao Huang", "Rui Liu", "Chenyang Lei"]
date: "2026-07-13T20:00:00.000Z"
score: ""
guid: "2607.13125"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.13125.png"
generated: "2026-07-19T19:52:10+05:30"
---

We introduce Boogu-Image-0.1, an open-source unified multimodal understanding and generation model family, comprising Base, Turbo, Edit, and Edit-Turbo variants. It delivers competitive performance in high-quality text-to-image generation, fast inference, instruction-based editing, and bilingual (Chinese-English) text rendering. Closed-source multimodal systems like Nano-Banana-Pro and GPT-Image-2 achieve strong performance through system-level integration rather than a single model, yet their internal practices remain largely undisclosed. In this work, we demonstrate that targeted improvements in model understanding, data quality, and training pipelines, coupled with agentic inference-time scaling, can substantially enhance generation and editing performance even under highly constrained compute budgets. Comprehensive evaluations show that Boogu-Image-0.1 consistently matches or surpasses other open-source models across standard benchmarks, and achieves results approaching leading closed-source systems. Notably, this is accomplished with only 208.62 million unique images. The base model's theoretical training cost is only approximately \$400K. We share practical discussions that we believe are valuable to the broader research community, and release weights, code, and recipes under Apache 2.0 to advance the open ecosystem for unified multimodal understanding and generation. Our code is available here: https://github.com/Boogu-Project/Boogu-Image.
