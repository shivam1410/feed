---
title: "ShieldVLA: Feasibility-Aware Safety Alignment for Vision-Language-Action Models"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.13231"
authors: ["Manan Tayal", "Akshay Nambi"]
date: "2026-09-01T20:00:00.000Z"
score: 60
guid: "2609.13231"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.13231.png"
generated: "2026-09-23T19:07:00+05:30"
---

Vision-Language-Action (VLA) models demonstrate strong generalization in robotic manipulation and navigation, but existing fine-tuning methods provide limited safety guarantees. Current approaches primarily rely on Lagrangian optimization that enforces safety through soft penalties on expected cumulative cost, often resulting in residual constraint violations or overly conservative behavior. Moreover, learning safety in visual domains is challenging due to the absence of dense per-step safety annotations. We propose ShieldVLA, a safety-aligned fine-tuning framework for VLA models based on Hamilton-Jacobi (HJ) reachability. ShieldVLA learns a model-free approximation of the HJ reachability value function directly from visual observations to estimate the safe operating region. The learned safety critic gates policy optimization by separating reward maximization within feasible regions from recovery near unsafe states, avoiding persistent reward-cost trade-offs. To enable scalable supervision in visual environments, we introduce rubric-based VLM safety scores that convert semantic safety feedback into structured critic targets without requiring manual cost labels. Across five navigation and manipulation benchmarks spanning multiple VLA backbones, ShieldVLA reduces cumulative safety cost by 57% on average and improves task success rate by +0.13 over SafeVLA.
