---
title: "Spectral Pre-Filtering for Context-Adaptive Sensor Fusion: A Four-Role FFT-GDCB Integration for High-Stakes Decision Systems"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.22023"
authors: ["Oleg Miroshnichenko"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.22023v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.22023v1 Announce Type: new Abstract: Context-adaptive Kalman filters calibrate their noise covariance matrices Q and R from innovation residuals via online regression. When the underlying sensor or signal carries periodic structure -- mechanical LiDAR rotation harmonics, engine vibration, ground multipath, weekly and annual demand cycles, dosing-interval rhythms, weekly media-buying cadence -- the regression input is contaminated and the fitted covariance models structural modes rather than genuine state uncertainty. We introduce a four-role FFT pre-filter that solves this problem at $O(N\log N)$ cost and serves three additional roles "for free": (i) it whitens coloured noise before the Kalman update, restoring the optimality assumption; (ii) it cleans innovations before covariance regression, preventing periodic contamination of $\hat{R}$ and $\hat{Q}$; (iii) it generates spectral context features that enrich the downstream bandit's regime-selection state; (iv) it deseasonalises the input feature vector before any supervised regression that produces a sensitivity coefficient (beta, dose offset, bid modifier). We position the algorithm inside the Gated Decoupled Compositional Bandits (GDCB) family, where it acts as a preprocessing layer for the supervised scaler. The single $O(N\log N)$ FFT call thereby serves four downstream consumers, fits in <0.1% of the sensor-fusion or pricing-pipeline compute budget, and is a drop-in addition with no changes to the Kalman filter, bandit, or runtime composition operator. We summarise empirical validation across six independent domains (rocket descent, autonomous-vehicle tracking, short-term rental pricing, clinical drug dosing, airline fare distribution, and ad-operations bid calibration), all returning a PROVES verdict under a pre-registered evaluation protocol.
