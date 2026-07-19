---
title: "Concurrent Image Understanding and Generation: Self-Correcting Coupled Markov Jump Processes"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.13188"
authors: ["Minh-Quan Le", "Armand Comas", "Alexandros Lattas", "Stylianos Moschoglou", "Pedro Vélez", "Amit Raj", "Aaron Germuth", "Thabo Beeler", "Dimitris Samaras", "Di Qiu"]
date: "2026-07-13T20:00:00.000Z"
score: ""
guid: "2607.13188"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.13188.png"
generated: "2026-07-19T19:52:10+05:30"
---

Human cognition does not separate understanding and generation. A teacher at a whiteboard speaks and draws together, each modality reshapes the other. In this paper, we bring this coupled loop to artificial systems. Masked Diffusion Models (MDMs) are ideally suited to this task, yet existing samplers either decode text and image interleavedly or independently update them in parallel branches that share only previous-step history, but not the other modality's latest decisions within the same step; combined with MDMs' inability to remask, cross-modal contradictions are neither detected nor repaired. We introduce Self-Correcting Coupled Markov Jump Processes (SC-CMJP), a framework in which one modality's transition rates are functionals of the other modality's confidence score, as weighted by cross-modal attention. Furthermore, a remasking jump retracts commitments the moment cross-modal evidence turns against them. In conjunction with SC-CMJP, we introduce CO_2Jump (Self-text{CO}rrecting text{CO}upled text{Jump}), a novel training-free single-pass sampler for joint multimodal geneneration. For training and evaluation purposes, we have created and will release three large-scale joint multimodal generation corpora: JEdit-1M, JMaze-200K, JNono-200K, with matching in- and out-of-distribution benchmarks. CO_2Jump achieves best joint performance for image understanding and editing as well as visual reasoning (maze and nonogram solving). The performance of the sampler scales monotonically with the number of denoising steps, evidence that the benefits of cross-modal coupling compound across the trajectory. Project page: https://coupled-jump.github.io
