---
title: "Detecting Neural Network Failures through Spectral Analysis of Internal Activations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20590"
authors: ["Arunan J"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.20590v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20590v1 Announce Type: new Abstract: Neural network misclassifications exhibit characteristic spectral instability in internal activations that is invisible at the output layer. This phenomenon is identified and formalized as Spectral Drift -- the frequency-domain distance between consecutive layer activations -- with empirical validation showing that failures exhibit significantly higher drift than correct predictions (1.9% increase, p<0.001). This spectral signature emerges during internal processing but becomes masked in final outputs, explaining why confidence-based detection methods struggle. This work introduces Self-Detecting Neural Networks (SDNN), a framework that monitors spectral dynamics across network depth using Short-Time Fourier Transform, wavelet decomposition, and statistical moments to capture multi-scale spectral features. A lightweight detector network (5% parameter overhead) learns to identify failure-indicative patterns via curriculum learning on progressively challenging distributions: natural misclassifications, distribution shifts, and adversarial perturbations. Experiments on CIFAR-10 demonstrate that SDNN achieves 79.0 +/- 25.3% AUROC across three seeds, substantially outperforming confidence-based baselines including MaxSoftmax (50.5%) and Energy Score (52.9%) by approximately 25-30 percentage points. Ablation studies reveal that wavelet decomposition and statistical features make consistent contributions, while STFT's role remains unclear. This work establishes spectral analysis of internal activations as a promising direction for neural network reliability, revealing diagnostic information inaccessible to output-based approaches.
