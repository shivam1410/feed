---
title: "Slow-Fast Multi-Teacher On-Policy Distillation for Capability Preservation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02324"
authors: ["Xiaofei Yin, Tong Chu, Jiyuan Fu, Jun Lan, Shuheng Zhou, Huijia Zhu"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2610.02324v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Foundation multimodal large language models are designed to support a broad spectrum of capabilities across diverse domains. Multi-teacher on-policy distillation (MOPD) provides an effective framework for consolidating domain-specific expertise into a single student model. However, MOPD training gradually drives the student away from its initialization model, and general capabilities decline as the displacement grows, resulting in capability interference. A direct remedy is constraining the student toward its initialization, but this suppresses the acquisition of domain expertise as well. We propose Slow-Fast Multi-Teacher On-Policy Distillation (SF-MOPD), which couples a fast model, the current student updated directly by each teacher, with a slow model, an exponential moving average of the student. The slow model absorbs the learning signal gradually, serving as a moving capability reference that fuses the general foundation with confirmed domain expertise. For each teacher, SF-MOPD computes the teacher-induced update in log-probability space and removes only the component that pushes the fast model further away from the slow model, while retaining aligned and orthogonal components. Experiments across multiple model scales demonstrate that SF-MOPD effectively mitigates capability interference, enhances specialized multimodal capabilities, and reduces the average degradation on general-capability benchmarks, consistently outperforming vanilla MOPD.
