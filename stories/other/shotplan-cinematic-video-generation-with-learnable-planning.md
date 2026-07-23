---
title: "ShotPlan: Cinematic Video Generation with Learnable Planning Token"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.17675"
authors: ["Su Guo", "Guangce Liu", "Haosen Yang", "Jiepeng Wang", "Cong Liu", "Junqi Liu", "Haibin Huang", "Hongxun Yao", "Chi Zhang", "Xuelong Li"]
date: "2026-07-19T20:00:00.000Z"
score: ""
guid: "2607.17675"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.17675.png"
generated: "2026-07-23T04:03:36+05:30"
---

Current video generation models achieve impressive results in single-shot generation, yet remain limited in cinematic video generation, where coherent narratives and effective multi-shot composition require explicit shot planning. To address this challenge, we propose ShotPlan, a framework for explicit multi-shot cinematic video generation built upon a video diffusion foundation model. Our method introduces learnable planning tokens that capture shot-level transition cues and can be seamlessly integrated with the original video generation tokens to control transition timestamps. Unlike standard video generation tokens, the proposed planning tokens are equipped with Fractional Temporal Rotary Position Embedding (FRoPE), enabling shot transitions to be modeled at the frame level. Experiments demonstrate that ShotPlan significantly outperforms existing cinematic video generation methods, offering more flexible shot management and stronger inter-shot consistency.
