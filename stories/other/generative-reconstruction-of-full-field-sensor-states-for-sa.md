---
title: "Generative Reconstruction of Full-Field Sensor States for Safety-Critical Digital Twins"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08499"
authors: ["Umme Mahbuba Nabila, Linyu Lin, Majdi I. Radaideh"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08499v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Accurate reconstruction of incomplete sensor fields is critical for state awareness in safety-critical digital twins (DTs). Thermocouples in high-temperature and radiation environments may drift, fail, or become intermittently unavailable, causing partial observability. This study develops a sparse-sensor reconstruction framework for Oregon State University's High Temperature Test Facility (HTTF) and evaluates six methods under intra- and inter-experiment protocols: three conditional generative models (i.e., a diffusion model [DM], variational autoencoder [VAE], and generative adversarial network [GAN]), two deterministic recurrent neural-network models, and ridge regression. For intra-experiment reconstruction within the PG{-}29 depressurized conduction cooldown (DCC) test, the models combine graph-based spatial encoding with gated recurrent units. The graph neural network (GNN)--gated recurrent unit (GRU) VAE achieves the lowest error, with a mean absolute error (MAE) of $11.73,^\circ$C, a root mean square error (RMSE) of $20.54,^\circ$C, and an $R^2$ of 0.98. The deterministic GNN--GRU and plain GRU obtain RMSE values of $25.26,^\circ$C and $35.22,^\circ$C, respectively, demonstrating the benefit of spatial modeling. All three generative models reduce RMSE by more than half compared with ridge regression. The DM maintains an $R^2$ of 0.94 when known sensors decrease from 91 to 45. For inter-experiment reconstruction, models trained on PG{-}27 pressurized conduction cooldown (PCC) are evaluated on PG{-}29 using section-context conditioning. The section-context DM achieves the best transfer performance, with an RMSE of $42.84,^\circ$C and an $R^2$ of 0.91. These results demonstrate the value of spatiotemporal generative modeling for missing-sensor reconstruction in safety-critical DT applications.
