---
title: "Physics-informed generative AI for semiconductor manufacturing: Enforcing hard physical constraints in generative models by construction"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11247"
authors: ["Yaser Mike Banad, Sarah Sharif"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.11247v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11247v1 Announce Type: new Abstract: Generative models are increasingly used to propose designs, data, and control actions for physical systems, yet many such systems are governed by hard physical constraints rather than by perceptual plausibility. Semiconductor manufacturing provides a demanding test case: generated masks, layouts, synthetic defect data, and process recipes must obey lithography, transport, reaction, and device-physics constraints, because physically invalid samples are not merely low quality but unusable. This Perspective argues that semiconductor manufacturing exposes a broader computational-science challenge, namely that generative AI for constrained physical domains must be physics-informed by construction, not corrected only through post-hoc filtering. We survey the emerging architectural toolkit, including physics-informed diffusion, PDE-constrained variational models, neural-operator priors, and conservation-law-respecting generative networks, and show how it connects to differentiable lithography, TCAD, process simulation, and autonomous experimentation. We identify four integration patterns between generative models and physics-based simulators, and we propose a research agenda centered on physics-fidelity benchmarks, differentiable simulator infrastructure, and multimodal foundation models for physical design and manufacturing. The central claim is analytical rather than rhetorical: where physical validity is the binding criterion of success, architectures that enforce it by construction should be expected to outperform those that filter for it after the fact, and the fab is the setting where this distinction is sharpest.
