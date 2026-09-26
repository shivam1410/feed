---
title: "Your Transformer Can Hold Two Thoughts at Once: Evidence of Linear Superposition in LLMs"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.29845"
authors: ["Pavel Tikhonov", "Anton Korznikov", "Matvey Mikhalchuk", "Nikita Dragunov", "Temurbek Rahmatullaev", "Polina Druzhinina", "Anton Razzhigaev", "Ivan Oseledets", "Elena Tutubalina"]
date: "2026-09-23T20:00:00.000Z"
score: 78
guid: "2609.29845"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.29845.png"
generated: "2026-09-26T20:37:01+05:30"
---

While Large Language Models (LLMs) rely on highly non-linear components, in this work we demonstrate that they exhibit fundamental linearity: when inputs from distinct text streams are linearly combined, the model outputs a superposition of the individual next-token distributions. We term this the Superposition Linearity Hypothesis. We provide evidence that superposition is an intrinsic property of the Transformer architecture rather than an emergent consequence of training; in fact, we observe that it tends to diminish as pretraining progresses. However, we demonstrate that linearity can be substantially restored through lightweight fine-tuning, significantly reducing the divergence between the predicted next-token distribution and the average of the individual next-token distributions. Finally, we introduce a guided decoding procedure that disentangles superposed outputs, enabling the simultaneous generation of two coherent continuations from a single forward pass.
