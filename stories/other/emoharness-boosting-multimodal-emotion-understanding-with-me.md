---
title: "EmoHarness: Boosting Multimodal Emotion Understanding with Meta-Harness Evolving"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.11994"
authors: ["Fenghai Li", "Bingxuan Li", "Jiawen Zhang", "Yifan Shen", "Jiateng Liu", "Yutong Zhang", "Yue Guo"]
date: "2026-11-08T19:00:00.000Z"
score: ""
guid: "2611.11994"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.11994.png"
generated: "2026-11-11T19:00:38+05:30"
---

Small multimodal models can misjudge emotion when words, voice, and visual cues conflict. We present EmoHarness, which runs such a model, the frozen student, inside a harness: the prompts, settings, and verification code around its calls. A human-written starting harness, the scaffold, numbers the student's visual observations, transcript, and prosody descriptions as citable evidence and has the student weigh candidate emotions against it. In Meta-Harness Evolving (MHE), a stronger LLM, the Builder, reads the student's errors and execution traces offline and edits the harness; static checks and validation gates decide which edits are kept, and the Builder never sees evaluation items. On 5,507 MME-Emotion items, EmoHarness raises task-macro Recognition by 7.6-13.4 points over a single video-only call for all four students and both Builders. Transcripts and prosody descriptions supply most of this boost (+5.38 to +10.71); the scaffold changes the audio-augmented call by -0.79 to +2.54, partly through extra multi-label predictions, and evolved edits add at most +0.95, although no evolved increment survives Holm correction. The harness's emotion context also transfers to IntentQA, with small gains for three of four students, none of which survives correction. EmoHarness thus boosts small multimodal students chiefly by supplying and organizing audio-derived evidence.
