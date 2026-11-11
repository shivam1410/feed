---
title: "FaST: Factored Synthesis of Transitions for Offline Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13013"
authors: ["Daniel Campa, Spandan Das, Srinjoy Das"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13013v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Synthetic data augmentation promises to scale offline reinforcement learning beyond fixed logged datasets, but leading diffusion-based generators model the transition tuple (state, action, next state, reward, terminal) as a monolith: no single factor can be natively redrawn in isolation. We present FaST (Factored Synthesis of Transitions), which factors transitions via the chain rule into state, action, dynamics, reward, and terminal stages, fitting each with an estimator matched to its statistical properties. Across twelve D4RL locomotion and maze benchmarks, TD3+BC and IQL agents trained on FaST transitions match the SynthER diffusion baseline while generating transitions over 90x faster. The explicit action-given-state conditional can also be re-queried for a fixed state, enabling targeted action synthesis: drawing N candidate actions per generated state and keeping the highest-advantage one under a value function fit to the same data, thereby synthesizing improved behavior during generation rather than filtering for it post-hoc. Best-of-10 synthesis beats training on real data on 11 of 12 medium and medium-replay settings (+8.9 D4RL points on average, up to +28.4), and is competitive with advantage-filtered SynthER at a fraction of its generation cost. On expert mixtures both mechanisms degrade identically, tracing the failure to the advantage estimate itself rather than to either targeting mechanism.
