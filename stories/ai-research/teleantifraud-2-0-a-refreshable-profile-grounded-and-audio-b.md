---
title: "TeleAntiFraud 2.0: A Refreshable, Profile-Grounded, and Audio-Based Benchmark for Telecom Fraud Detection"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.18748"
authors: ["Huiyuan Liu", "Zhiming Ma", "Yanxing Liu", "Shun Zhang", "Qifan Wang", "Di Liu", "Yifan Wang", "Yuyang Deng", "Haoyang Meng", "Yijin Zhou", "Yuxi Zhao", "Chengxian Hu", "Peidong Wang", "Peng Chen"]
date: "2026-09-16T20:00:00.000Z"
score: 72
guid: "2609.18748"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.18748.png"
generated: "2026-09-22T19:08:22+05:30"
---

Telecom fraud scripts evolve rapidly and are often designed to resemble routine service conversations, creating two key requirements for audio-based telecom-fraud evaluation. First, benchmarks must incorporate newly observed scam patterns without overwriting previously established test sets. Second, they must distinguish fraud from lawful, near-domain calls rather than relying on topic-separated negative examples. We present TeleAntiFraud 2.0, constructed with our Mixed-Tree Anti-Fraud Generation Pipeline and evaluated under a monthly frozen evaluation protocol. The pipeline transforms online fraud-case abstracts into profile-grounded scenarios, expands them through mixed-tree generation, realizes fraud and non-fraud dialogue paths under shared contexts, renders validated dialogues as role-matched speech, and freezes the resulting audio, labels, prompts, manifests, and provenance records for each monthly evaluation set. Each frozen set contains 900 Chinese calls, comprising 600 fraud and 300 near-domain non-fraud cases. Controlled text experiments show that three classifiers achieve perfect macro-averaged F1 (Macro-F1) when evaluated against unrelated or ordinary negatives, but drop to 0.65-0.68 with near-domain sibling negatives. Full-set audio and automatic-speech-recognition plus large-language-model (ASR+LLM) evaluations further reveal class-prior shortcuts, prediction collapse, and snapshot sensitivity. Together, these findings establish near-domain construction and collapse-aware reporting as core requirements for evaluating audio-based telecom-fraud models under realistic confusable conditions. The accompanying research artifact includes the construction code, evaluation scripts, manifests, and documentation. Our dataset and code are available at https://anonymous.4open.science/r/TeleAntiFraud-2_0-EEB2/.
