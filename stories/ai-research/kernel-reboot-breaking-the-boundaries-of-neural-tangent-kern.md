---
title: "Kernel Reboot: Breaking the Boundaries of Neural Tangent Kernels for Neural Fields"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.03117"
authors: ["Amir Mallak, Alaa Maalouf, Lior Wolf, Daniela Rus, Dan Rosenbaum"]
date: "Fri, 04 Sep 2026 00:00:00 -0400"
score: 66
guid: "oai:arXiv.org:2609.03117v1"
image: ""
generated: "2026-09-04T23:32:20+05:30"
---

arXiv:2609.03117v1 Announce Type: new Abstract: Neural fields (NFs) map continuous coordinates to signals such as color or density, but fast high-quality reconstruction from sparse observations remains difficult. Classical Neural Tangent Kernel (NTK) regression gives closed-form fits, yet it is fundamentally linear and cannot accumulate reusable task priors. We develop three algorithms that address these gaps. NTK-KIP learns a distilled support set of coordinates (and optional labels) so that a finite NTK can inpaint large missing regions from little observed data, yielding a compact non-linear representation instead of a raw kernel solve. MetaQuill meta-learns a shared initialization for an INR so that new scenes can be adapted by updating only a small task-specific weight offset, which provides true feature learning and a reusable prior. Finally, MetaQuill-KIP fuses both ideas: it seeds the task with a KIP-style non-linear warm start, then refines only that small offset around the meta-learned initialization. MetaQuill-KIP achieves high-PSNR reconstructions and semantically plausible inpainting under very sparse observations, while requiring only lightweight per-instance adaptation, whereas diffusion-style baselines typically depend on large pretrained generative priors and costly per-image tuning. This shows that NTK-driven neural fields can be made both non-linear and meta-learnable, narrowing the gap between analytic kernels and practical few-shot reconstruction.
