---
title: "Optimizer Memory Schedules for Outscaling the Overtraining Axis"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04577"
authors: ["Katie Everett, Shikai Qiu"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.04577v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04577v1 Announce Type: new Abstract: We investigate how optimizers scale across the overtraining axis and show that relative optimizer performance and optimal hyperparameters change substantially with training horizon. In particular, we study how matrix-preconditioned methods (Muon and SOAP) and a momentum-scheduled method (ADANA) scale relative to AdamW. We compare these four optimizers across models from 51M to 253M parameters and overtraining (OT) factors from 1x to 256x, sweeping the base learning rate at every setting. The preferred learning rate schedule can reverse across the overtraining axis, the best weight decay coefficient scales approximately as sqrt(OT), and longer horizons generally favor longer fixed memory. ADANA's scaling advantage over AdamW persists after tuning AdamW's fixed memory separately at each horizon. Log-time weight decay and momentum cooldown provide substantial gains for ADANA that compound as training increases. With this treatment, ADANA outscales AdamW with an exponent advantage close to that predicted by DANA theory on power-law random features. Muon and SOAP instead provide roughly constant token-efficiency advantages over AdamW across most of the measured range, although SOAP may gain further at the highest overtraining factors. ADANA begins behind both matrix-preconditioned optimizers but closes the gaps as training increases, surpassing Muon and becoming competitive with SOAP at our highest OT factors. These results establish training horizon as an essential axis for optimizer evaluation and design.
