---
title: "SevDiff: Severity-Conditioned Diffusion for Long-Tail Conflict Trajectory Generation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20549"
authors: ["Eni Solomon Laughter"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2607.20549v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20549v1 Announce Type: new Abstract: Trajectory datasets used in ADAS evaluation are heavily biased toward routine driving; genuine vehicle-to-vehicle conflict events are rare, and the rarer the event, the higher the cost when an ADAS system fails to handle it. Existing generative approaches address this imbalance by conditioning on scene-level properties - spatial goals, agent structure, or natural-language adversarial objectives - but none can accept a target Time-to-Collision (TTC) value as input and be held to producing it within a measurable error. This paper introduces SevDiff, a severity-conditioned denoising diffusion probabilistic model (DDPM) that accepts a requested minimum TTC value as a scalar conditioning signal and generates paired vehicle interaction trajectories whose realized conflict severity matches the request, evaluated through a hit-rate metric. Trained on 468 interaction windows extracted from the UTE SQM-W-1 expressway weaving-section dataset (1,041 vehicles, 822,691 observations after smoothing), SevDiff achieves 100% hit-rate within +/-0.5 s for TTC targets of 0.5-1.5 s and 97-99% at 2.0-2.5 s, with graceful degradation to 39% at TTC = 5.0 s. Generated kinematic features are physically plausible, with a maximum out-of-range rate of 4.7% across 12 features and no negative speed or gap values in more than 96.5% of samples. The hit-rate degradation pattern is physically interpretable as the strength of the conditioning signal relative to the training prior, making it a precision characterization of the generator rather than a pass/fail result.
