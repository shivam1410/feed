---
title: "Accent Analogy Guidance: More Speaker Similarity at Equal Accent in Cross-Lingual Voice Cloning"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.29123"
authors: ["Yoomee Cho", "Jisun Lee"]
date: "2026-09-23T20:00:00.000Z"
score: 30
guid: "2609.29123"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.29123.png"
generated: "2026-10-07T19:11:01+05:30"
---

In cross-lingual zero-shot text-to-speech, the accent of the reference leaks into the target speech. We propose accent analogy guidance (AAG), a training-free sampler term that subtracts an accent direction estimated from the model's own predictions for one synthetic voice rendered in both languages, so the voice cancels and only the accent remains. By a blind LLM accent judge on real dubbing data, reweighting classifier-free guidance between reference and text, and its variants, stay near one identity-accent trade-off curve; we score a method by its speaker similarity above that curve at equal accent (ΔSIM). Across four open TTS models AAG lies above the curve: on OmniVoice ΔSIM is +0.11 to +0.27 on three test sets (accent 3.51 to 4.28 on a 1-5 scale at speaker similarity 0.29, where reweighting keeps 0.02); MaskGCT and CosyVoice 2 also lie above their curves, and on F5-TTS it is more native than any reweighting setting. An LLM-free language-ID measure and a twelve-listener panel agree. A premise test and the reach of a model's own curve indicate in advance whether and roughly how much AAG can gain, predicting the one model where it gains nothing (X-Voice).
