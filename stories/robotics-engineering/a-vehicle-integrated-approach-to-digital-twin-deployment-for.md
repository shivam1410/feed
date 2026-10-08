---
title: "A Vehicle-Integrated Approach to Digital Twin Deployment for Bridges Through Drive-By Sensing"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.08822"
authors: ["Zihao Liu, Daigo Kawabe, Jiaji Wang, Chul-Woo Kim, Mehrisadat Makki Alamdari"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.08822v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Ageing bridge infrastructure is a growing global concern, yet conventional Structural Health Monitoring (SHM) systems are costly and difficult to scale, and routine visual inspections remain subjective. Drive-by, or indirect, bridge inspection, in which a sensorised vehicle recovers structural information from vehicle-bridge interaction (VBI) and vehicle-road interaction (VRI) responses, offers a scalable alternative. However, key challenges remain unresolved, including separating bridge responses from road roughness, detecting damage under normal traffic, and generalising across diverse bridge types. This paper presents a vehicle-integrated digital twin framework that unifies physics-based modelling and machine learning for continuous monitoring of bridge and road conditions. The framework comprises three pillars. First, surrogate models of VBI and VRI are constructed using a Fourier Neural Operator that learns function-to-function mappings from operating conditions to vehicle responses. Trained on both simulated and field data, these surrogates deliver millisecond-scale inference, replacing computationally intensive full-order analyses. Second, the design of a custom electric inspection vehicle, its sensor layout, and signal processing chain are optimised through Bayesian optimisation to maximise bridge information yield while suppressing road and vehicle noise. Unsupervised damage-assessment pipelines based on adversarial autoencoders, matrix profiles, and transformer architectures have been developed and validated to process the resulting vehicle data. Third, the complete workflow is validated through coordinated multi-site field trials in Australia and Japan, covering a range of bridge types, traffic conditions, and environmental settings.
