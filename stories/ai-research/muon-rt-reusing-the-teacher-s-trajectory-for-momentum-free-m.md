---
title: "MUON-RT Reusing the Teacher's Trajectory for Momentum-Free Muon for LLM Self-Distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.41104"
authors: ["Aryan Das, Vinay Kumar Verma, Aakansha Mishra"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 35
guid: "oai:arXiv.org:2610.41104v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Self-distillation methods for large language models with an exponential moving average (EMA) teacher already retain a history of student updates. Muon nevertheless stores a separate momentum buffer, increasing persistent training memory. We propose Muon with Reused Teacher (Muon-RT), which reuses the teacher-student displacement to eliminate momentum buffers for hidden weight matrices. We show that this displacement encodes an exponentially weighted history of applied updates and smooths temporally uncorrelated noise under a local model. Muon-RT removes its radial component, normalizes it spectrally, and mixes it with the current gradient after Newton-Schulz (NS) orthogonalization. Under explicit regularity and alignment assumptions, we establish linear contraction of an expected objective-gap bound toward a residual error level. With Self-Distillation Fine-Tuning (SDFT) on Qwen2.5-7B-Instruct, Muon-RT improves average accuracy over AdamW by 2.6 points with 42% less persistent memory, and over momentum Muon by 5.4 points with 27% less persistent memory. With Self-Distillation Policy Optimization (SDPO) on Olmo-3-7B-Instruct, it improves average accuracy over AdamW by 2.0 points.
