---
title: "Transformers Stop Thinking Too Early, and a Tiny LoRA Fixes It"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.36585"
authors: ["Zehao Jin", "Ruixuan Deng", "Junran Wang"]
date: "2026-09-28T20:00:00.000Z"
score: 72
guid: "2609.36585"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.36585.png"
generated: "2026-10-05T19:10:08+05:30"
---

Pretrained transformers use little of their depth to follow references in context. Thirteen base models reliably follow only 1.4-3.6 lines, and extra pretrained loops add little. A task-trained rank-8 LoRA at one early layer extends this computation with all model weights frozen. Qwen3-8B improves from 15.5% to 99% exact accuracy on 24-line chains; a longer-trained LoRA reaches 50 lines. Ouro-1.4B reaches 60 lines after four loops and at least 160 after eight. The LoRA starts a relay: program lines pass on their chain identity through a short range of middle layers. Frozen heads read progressively further up the chain, and removing parent-line attention stops the relay. A frozen-model measurement locates the last useful intervention layer within tolerance in three of four held-out models. Task-specific LoRAs also improve MuSiQue. Default answers therefore understate the computation accessible through a tiny edit. Code and an interactive demo are available at https://lunamos.github.io/stop-thinking-too-early/
