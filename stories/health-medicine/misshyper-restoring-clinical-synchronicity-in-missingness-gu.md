---
title: "MissHyper: Restoring Clinical Synchronicity in Missingness-Guided Hypergraph Forecasting"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.21922"
authors: ["Mingyi Ma, Qingxiong Tan"]
date: "Mon, 27 Jul 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2607.21922v1"
image: ""
generated: "2026-07-27T19:07:27+05:30"
---

arXiv:2607.21922v1 Announce Type: new Abstract: Clinical irregular multivariate time series are shaped not only by physiological dynamics but also by the measurement process that determines when and what to observe. In event-centric models, however, co-timestamp structure can be flattened too early: measurements acquired at the same timestamp are embedded as isolated nodes, leaving local patient-state context unavailable until later message-passing layers. We study this pre-propagation representation bottleneck and address it by restoring co-timestamp context before message passing begins. We propose MissHyper, a missingness-guided hypergraph forecasting model with pre-propagation synchronicity restoration. MissHyper augments each event with a local support-density cue, aggregates co-timestamp records to recover patient-state context, and uses a missingness-guided gate to adaptively fuse node-specific evidence with the recovered context. Across PhysioNet 2012, MIMIC-III, and MIMIC-IV, MissHyper achieves consistent gains in multi-step forecasting and outperforms a strong hypergraph baseline. These results suggest that improving event initialization can benefit sparse clinical forecasting without requiring a redesigned downstream propagation architecture. Ablations indicate that snapshot restoration, adaptive fusion, and support-density encoding all contribute, pointing to event initialization as a critical design axis for sparse clinical forecasting.
