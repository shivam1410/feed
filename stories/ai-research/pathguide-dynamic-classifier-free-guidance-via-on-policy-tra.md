---
title: "PathGuide: Dynamic Classifier-Free Guidance via On-Policy Transport Alignment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.29107"
authors: ["Avishag Nevo, Tamir Hazan"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.29107v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.29107v1 Announce Type: new Abstract: While modern generative models excel at modeling complex data, precise inference-time control in conditional generation remains a critical challenge. Classifier-free guidance (CFG) is a primary mechanism for such control, yet it is typically treated as a static tuning parameter. In flow-based models, however, the guidance scale fundamentally dictates the velocity field and the resulting probability path, making guidance selection a dynamic path-optimization problem. We introduce PathGuide, a framework that reformulates scalar CFG selection as an on-policy transport problem. Leveraging the weak form of the continuity equation, we derive a selection criterion with a direct path-correctness interpretation: we prove that if the guided field is weakly equivalent to the exact conditional field along the generated rollout, the sampler's path coincides with the target conditional law. For scalar CFG, this criterion yields a strictly quadratic local objective with an efficient, closed-form selector for each solver interval. PathGuide enables optimal guidance scales to be computed and used online during generation or fitted offline as a reusable piecewise-constant schedule. We validate our method on low-resolution image manifolds and controlled settings across various continuous-time flow constructions, demonstrating that this transport-based selector improves path alignment and sample fidelity over both fixed and state-of-the-art adaptive guidance baselines.
