---
title: "Understanding Reasoning from Pretraining to Post-Training"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.16097"
authors: ["Jingyan Shen", "Ang Li", "Salman Rahman", "Yifan Sun", "Micah Goldblum", "Matus Telgarsky", "Pavel Izmailov"]
date: "2026-07-16T20:00:00.000Z"
score: 80
guid: "2607.16097"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.16097.png"
generated: "2026-07-20T19:05:49+05:30"
---

This controlled study uses chess to understand how pretraining influences RL post-training performance. Researchers trained language models (5M to 1B parameters) on human chess games, added supervised fine-tuning with synthetic reasoning traces, then applied RL on chess puzzles with verifiable rewards. Key findings: post-RL performance at a given RL compute level is predictable from pretraining loss, and RL reward curve slopes improve approximately linearly with pretraining tokens. Unlike expected, RL doesn't simply sharpen the SFT policy. On easy puzzles it amplifies moves the SFT already preferred, but on hard puzzles it surfaces correct moves that were nearly absent after SFT alone. This matters because it reveals how pretraining investments compound returns on downstream reasoning tasks.
