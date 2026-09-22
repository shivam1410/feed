---
title: "Industrial Kinematic Trajectory Model (IKTM): Coordinate-Free Autoregressive Generator"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22173"
authors: ["Max Amiri, David Eyers"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.22173v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22173v1 Announce Type: new Abstract: Mobility simulation supports logistics, safety, and communications planning in industrial environments such as ports, mines, and airports. Existing trajectory models, however, rely on absolute coordinates, road-network tokens, or semantic zones: representations that are site-specific and not well suited to unstructured industrial terrain. We introduce the Industrial Kinematic Trajectory Model (IKTM), a coordinate-free trajectory generator that represents industrial vehicle motion through kinematic sequences (speed and heading change) with no absolute spatial reference. IKTM uses an autoregressive causal transformer with probabilistic mixture heads and extends our prior coordinate-free Markovian model with deep sequence modelling and an explicit duration-conditioning signal. Trained on one site and evaluated zero-shot on three unseen sites, it matches the small-turn shape of the empirical turn-rate distributions of held-out telematics; across all four sites, the per-site mean Jensen-Shannon divergence over 100 sampling seeds spans approximately 0.035-0.050 bits under an oracle-length duration-target protocol and approximately 0.032-0.042 bits under a fully zero-shot prior-length protocol, with similar ranges whether out-of-distribution (OOD) duration targets are drawn from each held-out site's empirical length distribution or from the Site A prior. Both protocols stay above the metric's sampling-noise floor (<=0.0049 bits). Paired by site, the oracle-length values are 5.3-6.0x lower than those of a re-implementation of our prior Markovian model under the same 1 Hz protocol. Termination is duration-conditioned rather than spatial: rollouts stop on 100% of trials with a length-tracking error of +0.0 +/- 0.0 s against the sampled target (100 of 100 exactly on target; N=100, T=0.2, untouched in-distribution test split).
