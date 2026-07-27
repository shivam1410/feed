---
title: "Multimodal Speaker Verification as a Threat to Speaker Anonymization"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.19636"
authors: ["Ashi Garg", "Cristina Aggazzotti", "Leibny Paola García-Perera", "Nicholas Andrews"]
date: "2026-07-21T20:00:00.000Z"
score: 74
guid: "2607.19636"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.19636.png"
generated: "2026-07-27T19:07:27+05:30"
---

Most automatic speaker verification (ASV) systems operate on individual utterances, despite real-world interactions typically consisting of multiple utterances. As speech accumulates, increasingly rich speaker information becomes available through acoustic, prosodic, and linguistic cues, potentially challenging speaker anonymization methods that primarily target vocal characteristics. We investigate ASV in a multi-utterance, multimodal setting and examine whether aggregating information across anonymized speech impacts privacy. We first study audio-only aggregation across multiple anonymized utterances and observe consistent performance improvements as more speech becomes available. We then incorporate prosodic and linguistic information, showing that multimodal systems outperform unimodal approaches. Finally, we compare aggregation strategies and find that frame-level aggregation yields the lowest EERs. Even with only five anonymized utterances, combining audio and text reduces EER by over 15% relative to audio-only aggregation, demonstrating that substantial speaker-discriminative information remains accessible despite anonymization.
