---
title: "SheetSage2: Coherent Lead-Sheet Transcription with Synthetic Supervision"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.05336"
authors: ["Junyan Jiang", "Ruibin Yuan", "Jiahao Pan", "Wei Xue", "Yike Guo", "Gus Xia", "Yann LeCun"]
date: "2026-10-03T20:00:00.000Z"
score: 52
guid: "2610.05336"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.05336.png"
generated: "2026-10-08T19:08:02+05:30"
---

Transcribing music into a human-readable score requires a coherent understanding of rhythm, harmony, melody, and form. Two obstacles limit this goal: annotated recordings are scarce, and accurate local predictions can still produce inconsistent musical sequences. We present SheetSage2, a unified music transcription framework that combines synthetic data, task-specific structured decoding, and autoregressive distillation. Automatically annotated MIDI, rendered into audio, provides scalable supervision across music understanding tasks. Task-specific structured decoders integrate complementary musical cues and their temporal dependencies to produce musically coherent scores. Autoregressive distillation further retains transcription accuracy without task-specific dynamic programming at inference. Across eight benchmark collections, a single SheetSage2-AR model exceeds the listed prior systems on 12 of 15 benchmark--metric pairs in our evaluation, substantially improving over SheetSage1 and surpassing task-specific models on several benchmarks. Model weights and inference code are publicly available.
