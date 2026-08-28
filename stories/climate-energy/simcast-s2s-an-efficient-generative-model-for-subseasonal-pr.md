---
title: "SimCast-S2S: An Efficient Generative Model for Subseasonal Precipitation Forecasting via Transfer Learning from Climate Simulations"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26594"
authors: ["Hiep V. Dang, Antonios Mamalakis"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.26594v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26594v1 Announce Type: new Abstract: Subseasonal-to-seasonal (S2S) precipitation forecasting has substantial financial and societal impact, yet remains challenging because of weak predictive signals, high associated uncertainty, and the computational cost of operational systems, which constrains simulation fidelity. We introduce SimCast-S2S, a generative latent-diffusion framework for probabilistic S2S precipitation forecasting that addresses three major bottlenecks in data-driven prediction. First, because S2S prediction requires uncertainty quantification rather than only deterministic point forecasts, SimCast-S2S is the first data-driven system that uses a diffusion-based generative pipeline for S2S prediction, enabling effective sampling from the underlying conditional distribution. Second, since generating large probabilistic ensembles is computationally costly in physical space, SimCast-S2S instead operates in a compact latent space learned by variational autoencoders, enabling efficient large-ensemble generation. Third, diffusion models typically require large training datasets; SimCast-S2S overcomes this via transfer learning with low-rank adaptation (LoRA), pretraining on large ensembles of climate simulations before fine-tuning on limited reanalysis data. On reanalysis data, SimCast-S2S outperforms deep learning baselines, including convolutional neural networks and U-Net architectures. Notably, despite using only a subset of atmospheric input variables and no post-processing, bias correction, or calibration, SimCast-S2S remains competitive with, and in many cases outperforms, state-of-the-art operational systems such as the ECMWF-S2S baseline. These results indicate that latent generative modeling combined with simulation-to-reanalysis transfer learning offers an efficient and scalable path toward data-driven probabilistic S2S precipitation forecasting.
