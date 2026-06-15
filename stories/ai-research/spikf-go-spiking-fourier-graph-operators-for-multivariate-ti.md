---
title: "SpikF-GO: Spiking Fourier Graph Operators for Multivariate Time Series Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.13901"
authors: ["Jafar Bakhshaliyev, Niels Landwehr"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.13901v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.13901v1 Announce Type: new Abstract: Spiking Neural Networks (SNNs) have emerged as an energy-efficient alternative to conventional neural networks, demonstrating strong performance in computer vision and robotics. More recently, SNNs have been applied to time series forecasting (TSF), with methods exploring spiking temporal backbones, spike-compatible positional encodings, Fourier-domain processing, and redesigned neuron dynamics. However, existing SNN forecasting approaches process variables independently, lacking explicit mechanisms for modeling inter-variable dependencies. This is a critical limitation in multivariate settings, where cross-variable correlations carry substantial predictive information. We propose Spiking Fourier Graph Operators (SpikF-GO), which addresses this gap by combining a hypervariate graph formulation in which every scalar observation becomes a graph node with spike-driven spectral processing. SpikF-GO introduces a Hard Concrete frequency gate for learnable sparse frequency selection and a Complex LIF gate that applies independent spiking neurons to real and imaginary Fourier components, preserving binary, event-driven computation throughout the spectral domain. We further present a variant incorporating Central Pattern Generator-based positional encodings for stronger long-range temporal modeling. Evaluated on eight benchmarks under a unified experimental protocol, SpikF-GO achieves the best average rank among all SNN methods and outperforms its ANN counterpart, FourierGNN, at reduced energy cost. SpikF-GO maintains competitive accuracy even at substantially smaller embedding dimensions, thereby achieving significant energy reductions. To our knowledge, this is among the first works to bring graph-based multivariate modeling into the spiking domain for TSF and the first to provide a unified comparison across SNN forecasting architectures under a common experimental protocol.
