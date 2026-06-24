---
title: "NeuroSonic: Conditional Flow Matching for EEG-to-Speech Reconstruction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24087"
authors: ["Wenhao Gao, Yifan Wang, Yijia Ma, Carl Yang, Wen Li, Chenyu You"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.24087v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.24087v1 Announce Type: new Abstract: Reconstructing continuous speech from scalp electroencephalography (EEG) remains fundamentally challenging. EEG provides a weak, spatially diffuse, and highly variable measurement of distributed cortical activity, whereas speech is organized as a coherent acoustic trajectory with strong harmonic and temporal structure. The resulting mismatch makes waveform regression unstable and causes stochastic multi-step generation to be sensitive to artifact-dependent conditioning and subject variability. We introduce NeuroSonic, a conditional flow-matching framework for EEG-to-speech reconstruction. Instead of predicting waveforms directly or refining them through stochastic denoising, NeuroSonic learns a deterministic probability-flow velocity field that transports a noise-corrupted acoustic state toward clean speech under EEG conditioning. EEG and audio are embedded into a shared token space and processed by a time-conditioned gated Transformer that parameterizes the transport ordinary differential equation. This formulation models trajectory evolution explicitly while avoiding iterative stochastic sampling. We evaluate NeuroSonic on the CineBrain and EAV benchmarks under cross-subject evaluation. Across both datasets, the proposed method improves distributional realism, spectral fidelity, and perceptual quality over representative GAN-, diffusion-, and mean-flow baselines, with up to a 26.3\% gain in overall perceptual quality. The performance gap is most evident in artifact-heavy segments, where conditioning variability is strongest. These findings indicate that deterministic conditional transport provides a stable and effective formulation for EEG-driven speech reconstruction. Code is available at https://github.com/Y-Research-SBU/NeuroSonic/ .
