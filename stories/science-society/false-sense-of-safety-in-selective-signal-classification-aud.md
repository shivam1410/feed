---
title: "False Sense of Safety in Selective Signal Classification: Auditing Bound Tightness and Exchangeability for Risk Control"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.15153"
authors: ["Jingwen Zhou, Mingzhe Wang"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.15153v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.15153v1 Announce Type: new Abstract: Selective prediction with distribution-free risk control promises that, with confidence 1-delta over the calibration draw, the error rate of accepted inputs stays below a user budget alpha. We audit this promise on signal-domain detectors -- machine anomalous-sound detection (ASD) and AI-generated-image forensics -- for four calibration rules: uncertified empirical thresholding (NAIVE) and certified Hoeffding, Clopper-Pearson (CP), and betting (WSR) upper confidence bounds. We report three findings. (i) NAIVE thresholding, common in practice, exceeds its declared budget in 49-73% of synthetic trials (n=200 calibration points) and in up to 68% of real-data splits: a false sense of safety rather than a broken theorem, since the rule never had a certificate. (ii) Tightness matters: CP and WSR certify substantial coverage where Hoeffding certifies none, with zero observed budget overruns under exchangeable splits. (iii) Under grouped deployment (unseen machine types or generators), certified rules overrun in 9-30% of trials -- far above delta -- showing the failure lies in the broken exchangeability premise, not in the bounds; a conservative per-group threshold restores validity at a severe coverage cost.
