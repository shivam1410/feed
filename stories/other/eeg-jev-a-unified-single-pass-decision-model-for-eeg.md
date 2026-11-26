---
title: "EEG-Jev: A Unified Single-Pass Decision Model for EEG"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31875"
authors: ["Zhifei Zhu, Hongtao Zhang, Yu Ren, Wei Zhou, Zeping Xie, Yi He"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.31875v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

EEG analysis spans choosing alternatives, judging statements, and rating ordered attributes, requiring calibratable probabilities with explicit meaning. We present EEG-Jev, a unified single-pass decision model for EEG. Given an EEG window, a question and an answer specification, one forward pass returns a typed readout: CHOICE gives a candidate distribution, NOUL a proposition probability, and SCORE an ordered-level distribution and expectation. One checkpoint is trained jointly and evaluated once on held-out splits of 35 public sources. Core raw outputs reach 54.08% balanced accuracy on Stieger2021 motor imagery, 70.45% on Sleep-EDF-SC sleep staging, 72.11% per window at threshold 0.5 on CHB-MIT seizure detection with 0.825 AUROC, and 1.700 MAE on 0-10 ds005292 pain ratings. Prior correction and temperature scaling lower negative log-likelihood from 0.766 to 0.606 on Sleep-EDF-SC and 0.166 to 0.019 on CHB-MIT, while direct readout cuts batch-1 latency from 122.43 to 63.11 ms (1.94-fold) against a matched-backbone generative comparator. Interactive demonstration and aggregate results: https://neuroimglab.github.io/EEG-Jev/.
