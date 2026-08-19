---
title: "pico-type: A 1.5M-Parameter Byte-Level Multi-Head Content Classifier"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14658"
authors: ["Gautam Kishore"]
date: "Wed, 19 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.14658v1"
image: ""
generated: "2026-08-19T19:06:05+05:30"
---

arXiv:2608.14658v1 Announce Type: new Abstract: We introduce pico-type, a byte-level multi-head content classifier with approximately 1.5 million parameters that simultaneously predicts seven content properties from raw UTF-8 bytes in a single forward pass. Operating directly at the byte level -- no tokenizer, no subword vocabulary, no pretrained embeddings -- pico-type classifies coarse type (12 classes), modality (8), subtype (24), code language (62), text language (30), file MIME type (90), and risk flags (6-label multi-label: API keys, JWTs, passwords, emails, phone numbers, SSH keys). The architecture combines a learned byte embedding, three convolutional blocks with growing receptive fields, two bidirectional attention layers with rotary position encodings, and a statistical pooling layer feeding seven Matryoshka-style classification heads. Four tiered variants (tiny/small/base/pro) share the same trunk with sliced representations from 16 to 576 dimensions, yielding ONNX exports under 210 KB and CPU inference under 10 ms. Trained on a mixture of synthetic templates and real-world data (8709 GitHub code samples, 5000 Wikipedia articles), pico-type achieves 60.3 percent code language accuracy on The Heap benchmark (24 languages) and 98.2 percent text language accuracy on Wikipedia (30 languages) -- improvements of +57 and +79 percentage points respectively over the synthetic-only baseline. Format-based heads (coarse, modality, subtype, file_mime, risk) maintain 100 percent accuracy on synthetic benchmarks. The model, code, and pretrained weights are released under Apache 2.0.
