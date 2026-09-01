---
title: "Behavioral Latency as Weak Event-Time Supervision for EEG Reaction-Time Decoding"
category: "Neuroscience & Mind"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.29428"
authors: ["Anuar Aimoldin, Ayana Mussabayeva, Yedige Mussabayev, Xue Liu, Kun Zhang"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.29428v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.29428v1 Announce Type: new Abstract: Single-trial EEG analyses are often organized around events and latencies, yet EEG-based reaction-time (RT) prediction is posed as scalar regression on a fixed stimulus-locked window. RT is treated as a window-level label rather than timing evidence about response-relevant dynamics. Here we reformulate trial-wise RT decoding as event-time posterior modeling. Instead of predicting RT directly, the model estimates a posterior over response-relevant event times, $p(t_{\mathrm{event}}\mid X)$, and uses its mean as the RT estimate. This treats behavioral latency as a weak observation of latent response-relevant timing. We evaluate this formulation on the Healthy Brain Network contrast change detection EEG task under a subject-disjoint, release-separated protocol. Across five seeds, distributional event-time supervision consistently improves held-out RT prediction relative to scalar regression and temporal-readout controls. Controlled objective comparisons isolate supervision of the event-time distribution, rather than expectation-based readout alone, as the source of this gain. Architecture controls show that the effect persists across four temporal backbones and is not explained by model scale. Beyond point prediction, posterior geometry characterizes concentration, target alignment, and interval behavior, while observation-noise calibration separates latent concentration from predictive uncertainty over RT. Shifted-crop inference probes shortcut use versus temporal localization. Matched shift-jitter improves robustness, increases mean sensitivity, and moves predictions more often in the expected crop-relative direction. Sensitivity remains below ideal crop-relative localization, leaving a clear equivariance gap. Together, these results establish event-time posterior modeling as a probabilistic and interpretable formulation for linking single-trial EEG dynamics to behavioral timing.
