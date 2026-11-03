---
title: "CLiS: Plug-and-Play Attention Acceleration for Video Diffusion on TPUs via Certified Stabilization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00444"
authors: ["Elisa Tsai, Shao-yu Huang, Daniel Mandragona, Wei-Yu Lin, WenXin Dong, Jevin Jiang, Chandra Devarakonda, Mehdy Bohlool, Yixin Shi"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 35
guid: "oai:arXiv.org:2611.00444v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

High-resolution video diffusion relies on attention over long token sequences, making attention efficiency critical to generation latency. Our analysis identifies repeated maximum reductions and accumulator rescaling in online softmax as a bottleneck in long-context TPU attention. We propose CLiS (Certified Loop-invariant Stabilization), a training-free, plug-and-play optimization for video diffusion inference. CLiS fixes per-row stabilizers before the KV loop and certifies numerical safety per head, falling back to online softmax when certification fails. It integrates into existing fused-attention kernels without changing model weights or architecture. On Wan 2.2 and LTX-2 across TPU v6e and TPU7x, CLiS reduces diffusion transformer (DiT) step latency by up to 19.6% relative to tuned online softmax without measurable quality loss. Controlled TPU adaptations of prior GPU stabilization methods show performance or numerical-safety limitations. Preliminary causal LLM experiments also show up to 13.5% higher training throughput in continued pretraining and 7.7% in supervised fine-tuning.
