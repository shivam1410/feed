---
title: "Porting the Moebius 0.2B image inpainting model to run in the browser with Claude Code"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/22/porting-moebius/#atom-everything"
authors: []
date: "2026-06-22T23:43:51+00:00"
score: 78
guid: "https://simonwillison.net/2026/Jun/22/porting-moebius/#atom-everything"
image: ""
generated: "2026-06-28T19:19:18+05:30"
---

Ported Moebius 0.2B image inpainting model (originally PyTorch/CUDA) to run entirely in browser using WebGPU. Users load any image, highlight regions to remove, and model regenerates filled-in content. Demo live at simonw.github.io/moebius-web/. Model required architectural translation from server-based CUDA inference to client-side WebGPU. Full inference runs on-device with no server required, eliminating server costs and data upload privacy concerns.
