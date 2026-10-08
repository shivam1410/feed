---
title: "BeatFlow-ECG: Rectified Flow for ECG Reconstruction from Indirect Wearable Signals"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09052"
authors: ["Mohamed Kamel, Sahar Selim, Walaa Medhat, Tamer Nadeem"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 32
guid: "oai:arXiv.org:2610.09052v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Continuous cardiac monitoring outside clinical settings requires signals that are both informative and practical to collect during daily life. Electrocardiography (ECG) provides rich information about cardiac rhythm and waveform morphology, while wearable photoplethysmography (PPG) is easier to acquire continuously but is only an indirect cardiovascular measurement and is highly sensitive to motion. We present BeatFlow-ECG, a conditional rectified-flow model for reconstructing single-channel ECG from synchronized PPG and inertial measurements. BeatFlow-ECG models reconstruction as conditional transport from noise to ECG using a convolutional encoder-decoder with a transformer bottleneck and explicit flow-time conditioning. Motion information is incorporated through IMU-derived conditioning features, motion-dependent loss weighting, and an easy-to-hard training curriculum. We evaluate the model under leave-one-subject-out protocols on PPG-DaLiA and WESAD. BeatFlow-ECG achieves the best results among the evaluated deterministic, adversarial, and diffusion-based baselines across all reported waveform and beat-timing metrics, with Pearson correlations of 0.983 and 0.986 and R-peak F1 scores of 0.946 and 0.955, respectively. Compared with Conditional DDPM-1D, L1 error decreases from 0.085 to 0.062 on PPG-DaLiA and from 0.074 to 0.055 on WESAD. Additional analyses on PPG-DaLiA show higher correlation in fixed R-peak-relative waveform regions and lower reconstruction error across low-, medium-, and high-motion subsets.
