---
title: "ProLand: A New Infeasible Manifold Optimization Method for LoRA Fine-Tuning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00236"
authors: ["Chenyu Zhou, Yuxuan Zeng, Qi Deng, Dongdong Ge, Yinyu Ye"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 45
guid: "oai:arXiv.org:2611.00236v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Low-rank adaptation (LoRA) enables parameter-efficient fine-tuning but can suffer from redundant basis directions. Constraining the basis factor to the Stiefel manifold addresses this redundancy through orthonormality. Landing methods allow temporarily infeasible iterates to explore a neighborhood of the manifold while progressively restoring orthogonality without per-step retractions. To improve optimization efficiency while retaining this flexibility, we introduce ProLand (Product-space Landing), a retraction-free optimizer that combines coordinated factor updates with Muon-style spectral directions. By designing the updates in the space of the represented weight increment, ProLand separates objective optimization from orthogonality restoration, supporting efficient feasibility recovery. This coordinated construction also enables Muon-style directions to guide objective optimization while preserving that separation. Experiments cover four GLUE validation tasks on DeBERTa-v3-base and seven language benchmarks on Qwen2.5-3B, Llama-3.2-3B, and Moonlight-16B-A3B across multiple adapter ranks. Across these 11 tasks, ProLand achieves the highest average score among the compared methods in every tested encoder and decoder model-rank configuration.
