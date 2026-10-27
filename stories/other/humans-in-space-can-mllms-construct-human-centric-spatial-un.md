---
title: "Humans in Space: Can MLLMs Construct Human-Centric Spatial Understanding via Active Exocentric Exploration?"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.34149"
authors: ["Tianchen Guo", "Tengyue Zhang", "Chen Liu", "Ling Chen", "Xin Yu"]
date: "2026-10-24T20:00:00.000Z"
score: ""
guid: "2610.34149"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.34149.png"
generated: "2026-10-27T20:42:10+05:30"
---

While Multimodal Large Language Models (MLLMs) excel at zero-shot reasoning, their spatial capabilities are primarily evaluated through static, passive observation. In complex, human-centric scenes, occlusion often hides crucial geometric evidence, and passive benchmarks force models to guess rather than recognize their own visual uncertainty. To bridge this gap, we introduce SATE-Bench, a novel interactive benchmark comprising 316 real-world scenes and 2,525 multi-turn QA pairs to evaluate visual self-awareness and active exocentric view-exploration. It combines a Passive multi-view control with an Active exploration setting, where models start from a severely occluded view and must iteratively query adjacent viewpoints until they gather enough evidence to fully ``sate'' the question, scored by a step-penalized efficiency reward. Evaluating state-of-the-art MLLMs reveals that they terminate exploration prematurely while reporting high confidence, and struggle with fine-grained 3D geometric tasks; matched-view controls further attribute the Active--Passive gap primarily to insufficient evidence acquisition. Moreover, fine-tuning with Group Relative Policy Optimization (GRPO) shows that rewarding view-seeking increases active exploration but lowers overall accuracy, as models over-explore and fail to fuse expanding multi-view contexts across turns. These findings indicate that scaling passive multi-view perception does not intrinsically yield active spatial reasoning, highlighting the need for models that know where to look, how to integrate what they see, and when to stop. Code and data are available at https://gtc-gh.github.io/SATE-Bench/
