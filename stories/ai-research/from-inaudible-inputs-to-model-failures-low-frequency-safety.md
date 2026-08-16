---
title: "From Inaudible Inputs to Model Failures: Low-Frequency Safety Risks in LALMs"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.09158"
authors: ["Yuanhe Zhang", "Weiliu Wang", "Jie Ren", "Liang Lin", "Zhenhong Zhou", "Haoran Gao", "Kun Wang", "Chen Li", "Li Sun", "Sen Su"]
date: "2026-08-09T20:00:00.000Z"
score: 75
guid: "2608.09158"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.09158.png"
generated: "2026-08-16T19:04:55+05:30"
---

Researchers identified a security vulnerability in audio-language models: inaudible low-frequency waveforms cause model failures. The black-box red-teaming method uses these inaudible attacks without requiring model internals. Researchers also developed a defense that detects distribution shifts and requests a second recording to recover accuracy. This matters because audio-language models are deployed in sensitive applications like voice assistants and medical transcription. The low-frequency attack is particularly concerning because users cannot hear it, making detection difficult and highlighting the need for robust audio processing in safety-critical systems.
