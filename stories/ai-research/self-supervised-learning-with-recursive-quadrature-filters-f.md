---
title: "Self-Supervised Learning with Recursive Quadrature Filters for Neural Time Series"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.26856"
authors: ["Mirko Morello, Shivang Rawat, David J. Heeger"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2611.26856v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

We develop self-supervised methods for training Recursive Quadrature Filter (RQF) encoders on unlabeled time series. RQFs are biologically motivated, complex-valued temporal filters that form a special class of diagonal state-space models (SSMs). Each RQF acts as a band-pass filter whose selectivity is determined by two learnable parameters: its tuning frequency and bandwidth. We separately introduce a self-supervised learning objective based on prediction error; the encoder is trained so that its current state predicts its own future activity. In the windowed mode, the summary of the current window predicts the summary of a later window; in the dense mode, the state at the current timestep predicts future log-power. Each RQF encoder is pretrained on a dataset and then a readout (e.g., a task-specific classifier) is trained on the output of the RQF encoder, with the encoder either frozen or fully fine-tuned. For multichannel EEG and intracranial recordings, a shared encoder processes each channel separately, and a spatial readout combines the channel representations using electrode locations. Across four neural benchmarks using scalp or intracranial EEG, the pretrained RQF system performs close to the state of the art while using a small fraction of the parameters of the competing models. For example, a 110k-parameter RQF system achieves 0.9247 +/- 0.0022 test AUROC on 100-s TUAB segments, above SAMBA (0.9054) at the same context with 9 times as many parameters, and 0.9040 +/- 0.0019 on 10-s segments, comparable to EEG foundation models with 3.2M-369M parameters.
