---
title: "When2What: A Timing-Conditioned Framework for Long-Horizon Forecasting of Continuous Cardiovascular Waveforms"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08993"
authors: ["Chaoqi Zhang, Shujie Yan, Zhao Zhang, Yanhua Sun, Yu Wang, Li Li, Lingzhong Meng, Xiaoyi Chen, Haixu Tang"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08993v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Long-horizon forecasting of quasi-periodic cardiovascular waveforms, such as the electrocardiogram (ECG), arterial blood pressure (ABP), and photoplethysmogram (PPG), requires predicting both when future cardiac events will occur (beat timing) and what the local structural pattern looks like around each event (beat morphology). However, standard sequence forecasters trained with pointwise mean squared error (MSE) average across uncertain future heartbeat phases, flattening sharp R peaks and pulse upstrokes into featureless baselines. Our analysis of intraoperative ECG reveals a clear temporal asymmetry: beat-time predictability from history decays within seconds due to stochastic heart-rate variability, whereas local beat morphology aligned at true beat times remains stable over several minutes. Guided by this insight, we introduce When2What, a timing-conditioned framework comprising three stages: Predict, Commit, and Generate. Given a 120-s history, When2What predicts a dense 60-s timing map, selects and sharpens discrete beat events into unit-height Gaussian impulses, and conditions a neural waveform generator on both these committed events and the observed history. Across intraoperative ECG, When2What substantially outperforms existing time-series and physiological forecasters, achieving a near-term waveform event skill of 0.644 and reproducing 95.62% of its predicted heartbeats in the generated waveform where direct long-horizon forecasters collapse into flat baselines. Furthermore, When2What transfers zero-shot to external hospital and atrial fibrillation cohorts, extends effectively to ABP and PPG pulse waveforms, and is supported by ablations and synthetic analyses that establish explicit timing conditioning as an effective paradigm for quasi-periodic long-horizon waveform forecasting.
