---
title: "DEFINE: Exemplar-Guided Accent Control for Zero-Shot TTS"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.32777"
authors: ["Ambuj Mehrish", "Abhinaba Roy", "Alex Ivanov", "Tawsif Ahmed", "Dorien Herremans"]
date: "2026-09-29T20:00:00.000Z"
score: 48
guid: "2609.32777"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.32777.png"
generated: "2026-10-05T19:10:08+05:30"
---

Zero-shot text-to-speech (TTS) can reproduce an unseen speaker from a short reference recording, but typically entangles speaker identity and accent within the same reference. We introduce DEFINE, an end-to-end framework that decouples these factors by conditioning speaker identity and target accent on separate audio exemplars. A single inference-time guidance weight continuously controls accent strength without retraining. Built on F5-TTS with parameter-efficient LoRA adaptation, DEFINE maps short accent exemplars into a conditioning space using an exemplar encoder supervised through learned accent prototypes, requiring neither accent labels at inference time nor post-synthesis waveform conversion. On seen accents, increasing accent guidance improves accent-probe accuracy from 6.5% to 19.6%. More importantly, a single DEFINE model generalizes accent control beyond its training accent set: on seen and out-of-domain accents, though not on held-out accents, it matches the accent transfer performance of a two-model TTS-voice-conversion cascade while achieving higher speaker similarity and comparable predicted speech quality. These results demonstrate that speaker identity and accent can be independently controlled from audio exemplars within a single zero-shot TTS model, including for accents unseen during training.
