---
title: "Robust Flow Matching under Target Corruption and Label Noise"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13324"
authors: ["Mert Can Kurucu, Erik Englesson, Hossein Azizpour"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13324v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Flow Matching (FM) is a strong framework for generative modeling due to its stable training and efficient sampling. However, FM assumes clean target data and labels, an assumption often violated in practice. We formulate FM training as a time-dependent regression problem over conditional vector fields and analyze how the two corruption types affect the objective: i) target corruption adds a time-dependent residual term that grows with time, ii) label noise causes updates to the wrong class-conditional vector field. Based on this analysis, we propose to improve FM robustness by mapping corruption-specific residual scores to sample weights. For target corruption, we propose the Temporal Residual Score (TRS), which emphasizes residual magnitudes at intermediate-to-late FM times, where clean and corrupted samples are more separable. For label noise, we propose the Comparative Conditional Score (CCS), which compares the residual of the observed class-conditional vector field against alternative class-conditional vector fields for the same trajectory and velocity target. Experiments across controlled corruption settings and real-world noisy labels show that the proposed methods improve robustness over standard FM and robust-training baselines, supporting corruption-specific residual structure as a practical basis for robust FM.
