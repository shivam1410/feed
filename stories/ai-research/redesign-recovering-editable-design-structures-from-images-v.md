---
title: "ReDesign: Recovering Editable Design Structures from Images via Agentic Decomposition"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.25565"
authors: ["Jooyeol Yun", "Jintae Park", "Hyesu Lim", "Junha Hyung", "Hyungjin Chung", "Jaegul Choo"]
date: "2026-07-27T20:00:00.000Z"
score: 68
guid: "2607.25565"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.25565.png"
generated: "2026-07-30T19:07:10+05:30"
---

Recovering an editable design file from a raster image is a common and costly bottleneck in modern design workflows, yet remains challenging since editability depends on recovering multi-modal attributes, such as typography, vector geometry, colors, grouping, and layer ordering. We present ReDesign, an agentic framework that grows an editable layer hierarchy by selecting and composing specialized tools across modalities. To keep this long decision process reliable despite imperfect tool outputs, we introduce graceful verification at each expansion, which provides local accept, prune, or retry feedback that prevents error accumulation and avoids large scale reruns. To evaluate editability at scale, we introduce the Figma Edit Replay Benchmark, consisting of 909 raw Figma files and 14,796 controlled edit instructions that replay edits on reconstructed outputs. Across this benchmark and standard reconstruction metrics, ReDesign achieves strong visual fidelity while delivering the highest editability across layout, color, and text edits, outperforming layered decomposition baselines and serial tool use pipelines.
