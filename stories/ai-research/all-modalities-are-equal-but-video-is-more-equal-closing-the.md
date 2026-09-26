---
title: "All modalities are equal, but video is more equal: Closing the Cross-Attention Gap in Joint Video Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.27901"
authors: ["Ohad Rahamim", "Dvir Samuel", "Idan Schwartz", "Gal Chechik"]
date: "2026-09-22T20:00:00.000Z"
score: 48
guid: "2609.27901"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.27901.png"
generated: "2026-09-26T22:52:50+05:30"
---

Video is a rich representation of a physical event, capturing appearance, geometry, motion, and temporal evolution. Other modalities, such as 3D body motion or audio, encode narrower aspects of the same event. We find that joint multimodal diffusion transformers exhibit a corresponding asymmetry in cross-modal correspondence: companion modalities develop strong correspondences to video, but the reciprocal correspondences through which they constrain video remain substantially weaker. We express both directions as comparable correspondence distributions over video tokens and define their disagreement as the reciprocal correspondence gap. We introduce RecCAR, standing for Reciprocal Cross-modal Attention Regularization, a KL regularizer that uses the well-established video-to-modality correspondence as a fixed reference and aligns the weaker modality-to-video correspondence toward it. Across joint video-motion and video-audio generation, RecCAR improves the Human Anatomy score from 0.69 to 0.75 and reduces audio-video desynchronization from 0.804 to 0.752, while improving overall generation
