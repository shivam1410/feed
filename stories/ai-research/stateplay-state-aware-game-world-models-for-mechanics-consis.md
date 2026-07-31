---
title: "StatePlay: State-Aware Game World Models for Mechanics-Consistent Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.26754"
authors: ["Zijun Lin", "Zeqing Wang", "Cheston Tan", "Bihan Wen", "Yeying Jin"]
date: "2026-07-28T20:00:00.000Z"
score: 80
guid: "2607.26754"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.26754.png"
generated: "2026-07-31T19:06:14+05:30"
---

StatePlay models game worlds by jointly predicting visual frames and internal game states (health, skill meters, timers) that govern mechanics. Using mixture-of-transformers architecture, it achieves state prediction L1 distance below 0.06 and improves mechanics fidelity 18.6% versus pixel-only models. Traditional game world models generate visually plausible but mechanically incorrect rollouts because they ignore state dynamics. StatePlay ensures generated environments follow actual game rules by grounding visual generation in precise state predictions, advancing beyond pixel-level realism to complete rule-consistent gameplay.
