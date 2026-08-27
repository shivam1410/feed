---
title: "Rollout-Decoded Reconstruction for Long-Horizon Prediction in Latent World Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.25017"
authors: ["Rishi Shah, Rishav Shrestha"]
date: "Thu, 27 Aug 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2608.25017v1"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

arXiv:2608.25017v1 Announce Type: new Abstract: A latent world model trains its decoder on latents anchored to observations, then deploys it on the model's own free-running rollout, hundreds of steps past the last observation. Rollout-Decoded Reconstruction (RDR) closes this gap with a single loss term that free-runs the model during training exactly as evaluation will, decodes every rollout latent, and penalizes reconstruction error against ground truth. The term adds no parameters, costs training-time compute only, and reduces to the standard objective at weight zero, so every comparison in this paper is a one-flag A/B. On the chaotic Kuramoto-Sivashinsky equation, RDR raises valid prediction time (the time to first crossing of normalized error 0.5) from $3.87 \pm 0.23$ to $6.97 \pm 0.42$ time units at an identical 193,568 parameters, a $1.80\times$ improvement confirmed on seeds never used in selection and holding in 10 of 10 preregistered configurations at ratios of 1.71-2.50$\times$. The results come from a single system; a sweep in which the advantage grows with latent width is descriptive, and control experiments on two classic tasks are preliminary.
