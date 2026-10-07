---
title: "S2PD: Serial-to-Parallel Diffusion for Physically and Logically Consistent Video Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.06847"
authors: ["Jeffrey Hu", "Daniel Olmeda Reino", "Ayush Tewari"]
date: "2026-10-04T20:00:00.000Z"
score: 50
guid: "2610.06847"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.06847.png"
generated: "2026-10-07T19:11:01+05:30"
---

Bidirectional video diffusion models denoise entire videos in parallel, yet when trained on effectively unlimited in-distribution data from procedural generators, continue to violate physical laws and simple symbolic rules. We introduce Serial-to-Parallel Diffusion (S2PD), which performs autoregressive diffusion at high noise before switching to parallel diffusion at low noise. The autoregressive phase provides the serial computation needed to coordinate interdependent events and produce valid state transitions while the parallel phase jointly refines the entire video and reduces sampling time relative to fully serial generation. We implement S2PD with two architectures: a pixel-space diffusion transformer trained from scratch and a pretrained video model adapted through LoRA fine-tuning with causal attention. Across games, physical simulations, and real video, S2PD follows rules more reliably than matched bidirectional baselines and generates videos with greater temporal stability and sampling efficiency than other serial methods.
