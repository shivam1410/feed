---
title: "X-Planner: Event-Structured Task Planning for Embodied Intelligence"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.25187"
authors: ["Howard Lu", "Shalfun Li", "Porter Pan", "Cris", "Lumen", "Cyril", "Eric Hu", "Lily Li", "Maeve Zhang", "Robert Wang", "KZ Zheng", "Viggo Chen", "Tim Ding", "Regsis Cheng", "YJ Xiao", "Kian", "Hai Lin", "Alan Song", "Elise Ma", "Gody Li", "Victor Yao", "Yohann Tang", "Ingrid Yu", "Jason He", "James Wang", "Ryan Yu", "Ping Yang", "Chris Pan", "Vincent Chen", "Roy Gan", "Hao Wang", "Qian Wang"]
date: "2026-09-20T20:00:00.000Z"
score: 70
guid: "2609.25187"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.25187.png"
generated: "2026-09-25T19:08:22+05:30"
---

Task planning bridges high-level instructions and executable behavior in long-horizon manipulation, yet modern Vision-Language-Action (VLA) systems often leave this intermediate structure implicit. Existing chain-of-thought (CoT) planners also tend to rely on coarse task-level annotations or serialize long reasoning traces token by token. We present X-Planner, a planning front-end that addresses both the supervision and representation of embodied reasoning. Our planning data combine Ego, UMI, and teleoperation under a hierarchy granularity with source-dependent annotation depth. Takeover-time annotations and human-designed failures supervise ongoing error recognition. On the model side, a shared VLM backbone exposes two event-structured plan forms: a discrete interface that emits interpretable event states and a latent interface that relays continuous CoT states across staggered Transformer depths through Staircase Decoding. A frozen latent-to-text reconstruction objective provides a semantic anchor for the latent representation. Offline two-step planning evaluation places X-Planner second among four evaluated models on both BERTScore-F1 and a judge-based Overall score. In real-robot experiments, respectively, outperforming the evaluated baselines. These results characterize planning-text quality and downstream execution.
