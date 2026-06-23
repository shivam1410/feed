---
title: "B[FM]$^2$: Brain Foundation Model via Flow Matching with SplitUNet"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.20812"
authors: ["Jaedong Hwang, Kathleen Zhang, Wei Dai, Konstantinos Kontras, Maarten Vanmarcke, Maarten De Vos, Ila Fiete, Paul Pu Liang"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.20812v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.20812v1 Announce Type: new Abstract: EEG foundation models can learn generalizable representations from large-scale EEG corpora to enable single-backbone transfer across diverse clinical and brain-computer interface tasks. Existing models typically discretize the continuous multi-channel EEG waveform into patches or codebook tokens and train a transformer with masked self-supervision. Recognizing that this discretization fragments continuous brain rhythms and obscures fine-grained temporal dynamics, we present B[FM]$^2$(Brain Foundation Model via Flow Matching), whose inductive bias aligns with the data by pretraining directly on the raw signal using continuous-time flow matching without patches, tokenization, or masking. However, multi-channel EEG signals pose an architectural challenge for flow matching: time is densely sampled and highly autocorrelated (thousands of timepoints), while the electrode axis is short (tens of channels) at distinct scalp positions. To address this time-electrode asymmetry, we introduce SplitUNet, a velocity network that factorizes each block into separate 1D temporal and 1D electrode convolutions and downsamples only along time, preserving electrode topology throughout the hierarchy. B[FM]$^2$ sets a new state of the art on 7 of 9 standard downstream EEG classification tasks, using a pretraining budget of only 36,895 segments ($\approx$ 307h), 1-2 orders of magnitude ($\approx$ 30x) less than required by existing EEG foundation models. Further, it generates synthetic EEGs that two board-certified neurologists cannot distinguish from brain data (Cohen's $\kappa =$ -0.096). https://jd730.github.io/projects/BFM2
