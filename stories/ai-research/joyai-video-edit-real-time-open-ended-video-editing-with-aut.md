---
title: "JoyAI-Video-Edit: Real-Time Open-Ended Video Editing with Autoregressive Diffusion"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.03974"
authors: ["Yicheng Xiao", "Wenxun Dai", "Xinran Qin", "Lin Song", "Maoquan Zhang", "Hang Xu", "Yukang Chen", "Yitong Li", "Guohui Zhang", "Yuan Zhang", "Xuying Zhang", "Tommy Zhang", "Jianlong Yuan", "Peihao Li", "Shuai Lu", "Siming Fu", "Chuyang Zhao", "Xin Han", "Jie Huang", "Wenbo Li", "Guoqing Ma", "Wei Huang", "Xiaojuan Qi", "Haoyang Huang", "Nan Duan"]
date: "2026-08-03T20:00:00.000Z"
score: 75
guid: "2608.03974"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.03974.png"
generated: "2026-08-05T20:00:21+05:30"
---

Real-time video editing requires low-latency causal generation with bounded computational resources while preserving source fidelity and long-term temporal consistency. We present JoyAI-Video-Edit, a 16B-parameter autoregressive diffusion framework for real-time, open-ended video editing without access to future frames or a predefined video duration. Our method combines chunk-wise autoregressive adaptation, Source-Anchored Distribution Matching Distillation (SA-DMD), and Long-Horizon Autoregressive Distillation to reduce train--inference mismatch, preserve source fidelity during two-step generation, and mitigate accumulated temporal drift. Extensive automatic and human evaluations show that JoyAI-Video-Edit substantially outperforms existing streaming editors and remains competitive with strong offline systems on both short and long videos. The complete system achieves end-to-end 720p video editing at approximately 30 FPS on a single Nvidia B200 GPU. Code is available at https://github.com/jd-opensource/JoyAI-Video-Edit.
