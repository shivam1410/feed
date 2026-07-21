---
title: "GigaAM Multilingual: Foundation Model for Underrepresented Languages"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.10371"
authors: ["Andrei Kuzmenko", "Alexandr Maximenko", "Aleksandr Kutsakov", "Georgii Gospodinov", "Dmitrii Bolotov", "Oleg Kutuzov", "Pavel Bogomolov", "Fyodor Minkin"]
date: "2026-07-10T20:00:00.000Z"
score: 70
guid: "2607.10371"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.10371.png"
generated: "2026-07-21T19:05:01+05:30"
---

Despite recent scaling successes, multilingual ASR performance remains highly uneven, with long-tail languages suffering from severe data scarcity. This work addresses the challenge of building robust foundation models for underrepresented Central Asian languages (Kazakh, Kyrgyz, Uzbek). We present GigaAM Multilingual, a Conformer encoder pre-trained on 2M hours of audio using a HuBERT-style objective. Crucially, we introduce a cluster-level data balancing strategy during pre-training and a domain-aware sampling method during fine-tuning to mitigate head-language dominance. In controlled comparisons, our approach outperforms strong open pretrained encoders (Whisper Large v3, Omnilingual-1B) on target languages, achieving significant gains on spontaneous speech while maintaining efficiency. We release the foundation encoder and ASR model, offering a proven recipe for effective multilingual adaptation under realistic data imbalance.
