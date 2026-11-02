---
title: "SPT-Flow: One Integration, Many Futures in Continuous-Time World Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.41273"
authors: ["Mingyang Lyu, Yinqian Sun, Gongce Cao, Yuhao Zhang, Lu Jia, Qian Zhang, Bo Wang, Pin Lyu"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2610.41273v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Continuous-time world models generate a latent trajectory through a single ODE integration, but adding stochastic conditioning does not ensure that the model uses it. In our teacher-forced baseline, posterior means vary by only about 1% of the prior scale, and matched and swapped latents yield indistinguishable reconstruction PSNR at the reported precision. We study a supervision-shortcut hypothesis: ground-truth intermediate states can reduce the need for trajectory-associated latent information. We introduce SPT-Flow, which samples one latent per trajectory and matches a free-running ODE rollout to demonstration states at multiple readout times. Re-anchoring experiments support the proposed mechanism. On LIBERO, with both models trained for 30k optimizer steps, SPT-Flow improves best-of-10 PSNR over our retrained ODEWorld baseline by 2.0 and 2.4 dB at the mid-trajectory and final frames and reduces mean LPIPS by 23%, with comparable per-sample inference cost. The rollout control recovers most of the accuracy gain; learned latent conditioning adds diversity and best-of-K gains while reducing mean sample accuracy relative to this control. The diagnostics support trajectory-associated latent utilization; semantic mode coverage under matched conditions in the robotic setting remains unverified.
