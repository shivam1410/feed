---
title: "TurboVLA: Real-Time Vision-Language-Action Model at 32 Hz on an RTX 4090 with <1 GB VRAM"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.27205"
authors: ["Hengyi Xie", "Chenfei Yao", "Xianjin Wu", "Xuanyang Xi", "Yiping Tang", "Di Xu", "Yingying Zhu", "Dingkang Liang", "Xiang Bai", "Han Ding"]
date: "2026-07-28T20:00:00.000Z"
score: 72
guid: "2607.27205"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.27205.png"
generated: "2026-07-30T19:07:10+05:30"
---

TurboVLA achieves 97.7% task success on robot manipulation using remarkably lightweight architecture: only 0.2 billion parameters, 31.2 milliseconds inference latency, and 0.9 GB VRAM on a consumer-grade RTX 4090 GPU. This vision-language-action (VLA) model redesigns the conventional LLM-centric pipeline where large language models serve as the central interface between perception and action. Instead, TurboVLA directly maps visual observations and language instructions to robot actions through lightweight bidirectional vision-language interaction. This architectural shift bypasses the computational and memory bottleneck of large language models. Results on LIBERO robotics benchmark tasks show the direct vision-plus-language-to-action paradigm matches or outperforms substantially larger VLA policies while consuming far fewer resources. The approach demonstrates that efficient robot control does not require massive language models. TurboVLA offers a simpler, faster, and more practical alternative to LLM-centric designs for real-time robot manipulation applications.
