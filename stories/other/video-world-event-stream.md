---
title: "Video = World + Event Stream"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.15038"
authors: ["Lianghua Huang", "Zhi-Fan Wu", "Yupeng Shi", "Wei Wang", "Mengyang Feng", "Cheng Yu", "Chen Liang", "Junjie He", "Chen-Wei Xie", "Yu Liu", "Jingren Zhou", "Ang Wang", "Bang Zhang", "Baole Ai", "Chongyang Zhong", "Jinwei Qi", "Kai Zhu", "Pandeng Li", "Peng Zhang", "Wenyuan Zhang", "Xinhua Cheng", "Yitong Huang", "Yun Zheng", "Yuxiang Bao", "Yuzheng Wang", "Zhiwei Lin", "Zoubin Bi"]
date: "2026-07-15T20:00:00.000Z"
score: ""
guid: "2607.15038"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.15038.png"
generated: "2026-07-19T19:52:10+05:30"
---

We present Wan-Streamer v0.3, which reframes our native-streaming interaction model under a single organizing view: a video is a world plus an event stream. The world is the persistent context in which a video unfolds, including the environment, scene, subjects, ambient acoustic conditions, voice characteristics, and other relatively stable conditions. The event stream is everything that changes over time within that world, including scene or environmental changes, subject behavior, speech, and other sounds. This yields a general-purpose pretraining task over large amounts of real video: given a world and incoming input, predict how the world moves, changes, and responds in real time. The resulting competence can be specialized to a broad family of real-time downstream tasks. We instantiate it on real-time full-duplex audio-visual interaction, where the event stream is the agent's speech together with free-form behavior. Functionally, the model's multimodal understanding process is vision-language-action-like: it maps multimodal user input to language-form speech and behavior actions. Wan-Streamer v0.3 preserves the v0.2 operating point: 640x368 video at 25 FPS, a 160 ms streaming unit, approximately 200 ms model-side response latency, and approximately 550 ms total interaction latency under a 350 ms bidirectional network budget.
