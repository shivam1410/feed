---
title: "Train the Model, Not the Reader: Decodability Supervision for Verifiable Activation Explanations"
category: "Neuroscience & Mind"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.20379"
authors: ["Hiskias Dingeto"]
date: "2026-07-21T20:00:00.000Z"
score: 70
guid: "2607.20379"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.20379.png"
generated: "2026-07-27T19:07:27+05:30"
---

Explainability tests for neural networks are unreliable: they can pass while individual claims remain unfaithful. Testing Qwen-2.5-7B showed only ~2% of specific claims actually influenced reconstruction. The authors introduce RECAP, which co-trains linear probes to keep designated content decodable. On Pythia-160M, this approach achieved truth scores of 0.44–0.46 where controls scored near zero, demonstrating that high reconstruction scores do not verify individual facts—a critical gap for AI safety verification.
