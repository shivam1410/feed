---
title: "State of Mind: Learning and Evaluating World Models of Naturalistic Brain Dynamics"
category: "Neuroscience & Mind"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28508"
authors: ["Yuxiang Wei, Zundong Wu, Weiyu Sun, Qizhen Lan, Yanteng Zhang, Vince D. Calhoun"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2611.28508v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Understanding naturalistic brain activity requires going beyond the stimulus alone, as external inputs continuously interact with an individual's evolving brain state. A world model captures such dynamics in a latent state by inferring it from neural observations, predicting stimulus-driven evolution, and updating with new observations. However, existing brain world models fail to maintain a persistent latent state over time, and standard metrics of neural prediction accuracy cannot tell whether a model tracks an individual's brain state or relies solely on the stimulus. To directly test state inference, prediction, and updating, we introduce BrainStateBench, which evaluates a model's latent state through a frozen linear probe on whole-cortex, movie-driven fMRI. Its State task tests whether a model captures trial-to-trial variability in an individual's responses to repeated stimuli, while Forecast and Updating evaluate future activity predictions without and with new observations, respectively. To track individual brain state across time, we propose Spectator, a linear latent world model trained with a joint-embedding predictive objective. Spectator encodes short- and long-horizon observation histories into a two-timescale latent state and predicts state transitions linearly from the current state and stimulus. Stimulus-only encoders reach 0.320 in fMRI prediction correlation without observing the brain (0% on State), while prior deep brain world models reach 0.239 yet score at most 0.4% on State. In contrast, Spectator achieves 0.349 correlation alongside 5.5% on State, 16.0% on Forecast, and 20.3% on Updating, outperforming all baselines while forecasting over 20x faster than deep forecasting models.
