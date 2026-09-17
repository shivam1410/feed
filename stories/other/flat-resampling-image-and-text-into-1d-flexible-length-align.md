---
title: "FLAT: Resampling Image and Text into 1D Flexible-Length Aligned Transmodal Tokens for Retrieval and Generation"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.16591"
authors: ["Guangyu Sun", "Shlok Kumar Mishra", "Wentao Bao", "Robert Zhenheng Yang", "Xiao Wang", "Xiyuan Wang", "Yujunrong Ma", "Chen Yuan", "Max Xiangjun Fan", "Jun Xiao", "Jianpeng Cheng"]
date: "2026-09-14T20:00:00.000Z"
score: ""
guid: "2609.16591"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.16591.png"
generated: "2026-09-17T19:00:24+05:30"
---

Traditional multimodal representation learning and generation are two stages: a contrastive or self-supervised visual encoder is trained first, followed by a separate downstream generative model. This setup bottlenecks generative performance behind frozen embeddings. To bridge this gap, we revisit joint multimodal representation learning and generation to produce linearly interpolatable embeddings that are directly consumable by generative decoders. We present FLAT (Flexible-Length Aligned Transmodal representations), a representation pre-training framework that jointly optimizes a shared multimodal encoder alongside downstream text-to-image (T2I) and image-to-text (I2T) decoders. By combining contrastive alignment with bidirectional cross-modal generative objectives, FLAT ensures its representations function as both discriminative semantic descriptors and generative conditions. Architecturally, FLAT maps visual and textual inputs into a unified continuous 1D sequence space, applying nested dropout over prefix-K tokens to enable dynamic output lengths. A single pre-training stage allows FLAT to perform cross-modal retrieval and generation across variable prefix K, achieving a T2I GenEval score of 71.1. Task-specific fine-tuning aligns model performance with state-of-the-art baselines: 83.1 GenEval on T2I generation; 40.5 BLEU-4 and 138.6 CIDEr on MS-COCO image captioning; and Recall@5 scores of 86.8 (I2T) / 75.8 (T2I) on MS-COCO alongside 98.3 (I2T) / 93.6 (T2I) on Flickr30K. Finally, qualitative evaluations demonstrate that FLAT representations natively support linear interpolation, latent space arithmetic, and zero-shot composed retrieval.
