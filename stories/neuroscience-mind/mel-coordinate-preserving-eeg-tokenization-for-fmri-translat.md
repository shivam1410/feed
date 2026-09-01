---
title: "MEL: Coordinate-Preserving EEG Tokenization for fMRI Translation"
category: "Neuroscience & Mind"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.29304"
authors: ["Xiangyu Liu, Zeting Yan, Zhitong Yin, Boyang Li, Xi Zhang"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.29304v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.29304v1 Announce Type: new Abstract: Translating electroencephalography (EEG) into functional magnetic resonance imaging (fMRI) is important for medical neuroimaging, clinical brain-state monitoring, and multimodal neural decoding, because it aims to infer spatially organized hemodynamic activity from fast and accessible electrophysiological recordings. Existing EEG-to-fMRI studies mainly pursue stronger decoders, but the problem is also constrained by a representation-interface mismatch: fMRI responses are delayed, temporally integrated, and spatially distributed, whereas generic EEG encodings often entangle temporal lag, channel identity, and frequency-band structure. We propose Multi-band EEG Latent-state Tokenization (MEL), a coordinate-preserving EEG representation framework that anchors each target fMRI response to its preceding EEG history and organizes it into lag-channel-frequency neural-state tokens. By explicitly capturing hemodynamic latency and spectral-spatial dynamics, MEL aligns fMRI-pertinent EEG representations with capacity-controlled readouts without depending entirely on model scaling. Experiments on VU EEG-fMRI benchmarks and external Oddball data show that MEL improves prediction over strong NeuroBOLT baselines. Ablations and controls further indicate that the gains come from structured EEG representation rather than leakage, shortcut statistics, or decoder capacity.
