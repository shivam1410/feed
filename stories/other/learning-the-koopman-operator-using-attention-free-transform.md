---
title: "Learning the Koopman Operator using Attention Free Transformers"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.23957"
authors: ["Mohammed Nagdi, Evangelos-Marios Nikolados, Alexey Yermakov, Mars Gao, Nathan Kutz, Filippo Menolascina"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.23957v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.23957v1 Announce Type: new Abstract: Learning Koopman operators with autoencoders enables linear prediction in a latent space, but long-horizon rollouts often drift off the learned manifold, leading to phase and amplitude errors on systems with switching, continuous spectra, or strong transients. We introduce two complementary components that make Koopman predictors more robust. First, we add an attention-free latent memory (AFT) block that aggregates a short window of past latents to produce a corrected latent before each Koopman update. Unlike multi-head attention, AFT operates in linear time and adds only $\approx$30k parameters ($3d^2 + T^2$, fewer than matched multi-head attention), yet captures the local temporal context needed to suppress error divergence. Second, we propose dynamic re-encoding: lightweight, online change-point triggers (EWMA, CUSUM, and sequential two-sample tests) that detect latent drift and project predictions back onto the autoencoder manifold. Across three benchmark systems -- Duffing oscillator, Repressilator, IRMA -- our model consistently reduces error accumulation compared to a Koopman autoencoder and matched-capacity multi-head attention. We also compare against GRU and Transformer autoencoders, evaluated both from initial conditions and with a 50-step context, and find that Koopman+AFT (with optional re-encoding) attains markedly lower long-horizon error while maintaining lower inference latency. We report improvements over horizons up to 1000 steps, together with ablations over trigger policies. The result is a fast, compact predictor that stays on the learned manifold over long horizons.
