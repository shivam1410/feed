---
title: "Serving-Aligned Entire-Space Conversion Modeling via Click-Through Rate Knowledge Distillation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15137"
authors: ["Pavel Dolin, Xun Zou, Jiatian Wu, Deguang Kong"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15137v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Recommendation systems may use predicted click-through conversion rate (pCTCVR), the product of predicted click-through rate (pCTR) and post-click conversion rate (pCVR), to guide ranking decisions. Many pCVR models build on the Entire Space Multi-Task Model (ESMM), which jointly trains pCVR and auxiliary pCTR towers using pCTR and pCTCVR losses, but deploys only the pCVR tower. At serving time, this tower may be paired with a separately trained pCTR model, creating a training-serving mismatch in pCTCVR when its predictions differ from those of the auxiliary pCTR tower. In this paper, we use knowledge distillation (KD) from logged serving pCTR scores to supervise ESMM's auxiliary pCTR tower and improve training-serving pCTCVR alignment. We denote variants by KD-$\alpha$, where $\alpha$ controls the hard-label loss weight. On the Ali-CCP dataset, KD-0.3, the best variant on serving pCTCVR, increases ROC-AUC not only for serving pCTCVR but also for pCVR by 2.1% and 1.6%, respectively, and PR-AUC by 9.9% and 8.8%, respectively, relative to the ESMM baseline. We also test negative downsampling with 5% nonclick retention. Downsampled KD-0.3 increases mean AUC for serving pCTCVR and pCVR by 1.2% and 0.9%, respectively, -and PR-AUC by 8.5% and 4.5%, respectively, relative to downsampled ESMM.
