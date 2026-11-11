---
title: "One Trajectory, Two Requirements: Accuracy and Local Stability in Euler Sampling for Flow Matching Policies"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13311"
authors: ["Mahindra Rautela"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13311v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Flow matching robot policies commonly use a fixed Euler step count selected from offline accuracy sweeps. At inference time, however, each policy input (visual observation, robot state, and language instruction) together with a source-noise draw defines a different ODE trajectory and sequence of local Jacobians. We ask whether a step count that accurately follows the nominal noise-to-action trajectory can still be too coarse for strongly contracting directions around it. An exact two-coordinate system and a controlled augmentation of six trained flow models show that trajectory accuracy and local Euler stability can impose different step requirements even when the original learned transport is unchanged. We then study a frozen $\pi_{0.5}$-LIBERO checkpoint without modifying its weights or action dynamics. Across 30 policy inputs from 10 LIBERO-10 tasks, the Jacobian exhibits strong contracting directions near the action endpoint, yet no sampled mode violates the Euler non-expansion condition. On five of those inputs, accuracy sweeps require 4--9 Euler steps at 5% terminal error and 87--112 at 1%. These five paired cases are therefore consistent with accuracy-limited rather than stability-limited sampling under this local criterion, while the controlled experiments show why endpoint accuracy alone cannot rule out a separate stability requirement.
