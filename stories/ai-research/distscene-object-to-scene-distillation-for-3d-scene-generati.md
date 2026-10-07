---
title: "DistScene: Object-to-Scene Distillation for 3D Scene Generation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.06960"
authors: ["Kunming Luo", "Hongyu Yan", "Ken Deng", "Chengcheng Zhou", "Tianyu Liu", "Haipeng Li", "Haibin Huang", "Xuelong Li", "Ping Tan"]
date: "2026-10-02T20:00:00.000Z"
score: 45
guid: "2610.06960"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.06960.png"
generated: "2026-10-07T19:11:01+05:30"
---

We present DistScene, a framework for single-image compositional 3D scene generation by jointly modeling the environment and individual objects. Unlike existing methods that represent scenes primarily as collections of objects, we model the environment as an explicit scene component to provide geometric context for object placement. Specifically, we introduce Scene-Frame Generation, which jointly generates separate environment and object components in a shared coordinate frame, allowing their geometry and relative placement to be learned together. Then we introduce Object-Centric Refinement to refine each object in a local frame with scene context. Finally, we develop Object-to-Scene Distillation to transfer pretrained object-generation priors to scene generation through automatically composed and rendered synthetic scenes. Evaluations on indoor and outdoor benchmarks demonstrate improved scene-level spatial coherence over the evaluated baselines. Project page: https://coolbeam.github.io/DistScene/
