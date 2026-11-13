---
title: "Mask-Pattern Position Augmentation: Training-Free Long-Context Extrapolation for Diffusion LLMs"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15029"
authors: ["Gaurav Sarkar (International Institute of Information Technology, Hyderabad), Syed Affan Daimi (International Institute of Information Technology, Hyderabad)"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15029v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Diffusion large language models (dLLMs) generate by iteratively unmasking tokens with bidirectional attention, but rotary position embeddings (RoPE) still confine them to a fixed pretraining window. Existing training-free extrapolation, notably LongLLaDA, copies NTK-based RoPE scaling from autoregressive (AR) models and applies one static, length-only transform at every position and denoising step. That transplant ignores a signal unique to dLLMs: the evolving mask pattern of the partially decoded sequence. We propose Mask-Pattern Position Augmentation (MPPA). MPPA linearly interpolates indices into the pretrained window, then adds a per-position, per-step offset from cumulative mask density. The offset restores rotary phase resolution that interpolation collapses, and it shrinks as tokens are committed, so late steps see near-clean interpolated geometry. On LLaDA-8B-Instruct at twice its 4096-token window, MPPA reduces perplexity from 19.51 under standard decoding to 3.12 at 8192 tokens, below the in-window figure, with 100% passkey retrieval and unchanged needle-in-a-haystack accuracy. These preliminary $2\times$ results motivate mask-conditioned position engineering as a diffusion-native path to long-context generation.
