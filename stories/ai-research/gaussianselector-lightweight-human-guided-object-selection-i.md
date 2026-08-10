---
title: "GaussianSelector: Lightweight Human-Guided Object Selection in 3D Gaussian Splatting with Graph Optimization"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.01492"
authors: ["Baihan Yang", "Tiexin Li", "Yuheng Liu", "Xin Lin", "Xinke Li", "Xiaohui Xie", "Truong Nguyen"]
date: "2026-08-01T20:00:00.000Z"
score: 60
guid: "2608.01492"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.01492.png"
generated: "2026-08-10T19:05:52+05:30"
---

Selecting a complete 3D object from a reconstructed scene with minimal user effort is essential for practical scene editing and embodied interaction. Existing 3DGS-based methods either retrain the Gaussian representation to embed per-object labels, or build dense multi-view SAM observations, both requiring heavy computation and dense viewpoint coverage that is rarely available in practice. We present GaussianSelector, a training-free framework for interactive 3D object selection from sparse views and sparse scribble guidance. Operating directly on native Gaussian primitives, we coarsen dense Gaussians into geometrically coherent superpoints and construct a continuity-weighted graph using appearance and spatial cues. Sparse user scribbles are lifted into 3D via visibility-aware transmittance coverage, and selection is solved as a global graph-cut energy minimization that propagates sparse evidence to a complete 3D object. This design naturally supports multi-round refinement, where users iteratively correct the selection from additional viewpoints to progressively improve the result. Experiments demonstrate that GaussianSelector achieves competitive selection quality against state-of-the-art multi-view SAM-based methods, while requiring significantly fewer interaction views and substantially lower computational overhead. These properties make it well suited for human-in-the-loop 3D scene editing and 3D asset extraction in real-world deployment scenarios.
