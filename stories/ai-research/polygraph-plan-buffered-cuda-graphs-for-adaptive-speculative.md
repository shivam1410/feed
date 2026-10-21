---
title: "PolyGraph: Plan-Buffered CUDA Graphs for Adaptive Speculative Decoding"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.23861"
authors: ["Junchao Yang"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.23861v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Adaptive speculative decoding changes the active batch size B and draft length d from one decode step to the next, whereas a CUDA Graph replays a fixed launch configuration. The resulting verification width M = B d forces serving systems to pre-capture many shapes, capture new ones on the serving path, or pad every step to the largest draft. We present PolyGraph, a plan-buffer mechanism for custom Triton kernels that avoids this choice. PolyGraph captures one maximum-grid graph and writes the active shape to GPU memory before each replay. Kernels skip tiles beyond that shape, while graph topology, allocations, layouts, pointers, and launch grids remain fixed; the update transfers only 28 bytes. On one NVIDIA H800, a trace-driven prototype with Qwen2.5-3B dimensions replaces 64 shape-specific graphs with one, matches the warmed baseline in observed step latency (17.7 vs. 17.8 ms P50), and reduces measured pre-serving graph-build time from 3,915 to 93 ms. Fixed-draft controls show that the benefit comes from avoiding padded payload: the P99 difference from MaxPad is negligible at zero padding waste but reaches an 18.7% reduction at 100% waste. Our evidence establishes a bounded work-shape mechanism for custom kernels, not a production serving system, and is limited to synthetic traces on one GPU.
