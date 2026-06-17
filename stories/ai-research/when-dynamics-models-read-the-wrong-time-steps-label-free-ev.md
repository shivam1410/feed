---
title: "When Dynamics Models Read the Wrong Time Steps: Label-Free Event Credit Re-Anchoring for Robust Global Readouts"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17572"
authors: ["Yifan Wang"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.17572v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17572v1 Announce Type: new Abstract: Learned dynamics models often answer global physical questions, such as fault severity or impact stiffness, by pooling a per-step feature sequence into one readout vector. This sequence-to-global interface creates an under-studied temporal credit problem: with only trajectory-level supervision, a model can predict accurately in training conditions while reading from abundant smooth correlates rather than the brief physical events that determine the target. We call this failure temporal credit dilution. It is not exposed by the training loss and is not removed by standard physics-informed residuals, because the error lies in where the global readout assigns functional credit. We introduce Credit-in-Event, an interface-level probe for measuring how much pooled credit lands on event steps, and prove in closed form that a pooled linear reader routes credit to a spurious background channel as the event fraction shrinks. We then propose CREST, a training-free and label-free readout that estimates a transient event core from learned features and re-anchors the pooled representation through event-versus-rest contrast. Across simulated gear and impact systems, recurrent and attention encoders, and public bearing vibration data, CREST reduces out-of-distribution error while restoring event credit. Ablations show that stable-step selection and receptive-field shrinking fail, confirming that the gain comes from event-core credit re-anchoring rather than a generic locality or stability prior.
