---
title: "STELLA: Efficient Sensor-to-LLM Translation for On-Device Human Activity Recognition"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.03089"
authors: ["Nirhoshan Sivaroopan, Albert Zomaya, Kanchana Thilakarathna"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.03089v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.03089v1 Announce Type: new Abstract: HAR is increasingly expected to run continuously on edge devices, yet recent LLM-based methods remain hard to deploy: raw sensor prompts are long, cloud inference adds latency and privacy risk, and fine-tuned LLM pipelines turn general-purpose models into task-specific classifiers. We present STELLA, an efficient sensor-to-LLM translation framework for on-device HAR that shifts the burden from LLM adaptation to sensor tokenization. A lightweight hierarchical tokenizer compresses an entire multi-channel inertial window into a fixed set of compact latent sensor tokens, which are projected into the embedding space of a frozen pretrained LLM and combined with a natural-language prompt for label scoring. This preserves activity-relevant temporal and cross-channel structure while keeping LLM-side computation predictable across sensor configurations. STELLA also supports on-device personalization, adapting only the lightweight tokenizer on small amounts of user-specific labelled data and augmenting inference with a local retrieval context, keeping the LLM, user data, and retrieval on device. Across seven public HAR datasets and eight benchmark settings, STELLA achieves new state-of-the-art performance, improving over prior methods by up to 11.83% F1; on-device personalization yields up to a further 21.91% F1 as user data accumulates after deployment. STELLA also outperforms representative time-series tokenizers under the same LLM pipeline and achieves real-time inference under practical mobile and edge budgets, showing that efficient sensor tokenization is a practical path toward accurate, private, and personalized LLM-based HAR on edge devices.
