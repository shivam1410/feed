---
title: "Not All Objectives Are Born Equal: Priority-Constrained Descent for Hierarchical Multi-Objective Optimization"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.29521"
authors: ["Dara Varam", "Mohamed I. Alhajri"]
date: "2026-09-20T20:00:00.000Z"
score: 58
guid: "2606.29521"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.29521.png"
generated: "2026-09-29T19:09:35+05:30"
---

Deep learning problems rarely involve objectives that are equal in importance. A primary objective defines the goal, whilst secondary objectives, such as sparsity, compression, or robustness constrain the solution. While existing multi-objective methods have proven effective in practice, they have a clear symmetry problem and neglect the inherent objective hierarchy built into these objective spaces. We introduce Priority-Constrained Descent (PCD), a gradient-based optimization framework designed to explicitly exploit hierarchical objective structures. PCD preserves the direction of primary descent whilst allowing for the minimal distortion necessary to guarantee progress on secondary objectives, controlled by a single τin [0, 1] that dictates the strength of the distortion. The resulting formulation is invariant to objective scaling and admits exact closed-form solutions for problems with two and three objectives. We evaluate PCD within structured network compression settings, unstructured sparsity and low-rankness, and across a variety of synthetic experiments, showing Pareto dominance and better per-objective performance with secondary progress guarantees over existing methods, further exhibiting the interpretable trade-off that τ provides.
