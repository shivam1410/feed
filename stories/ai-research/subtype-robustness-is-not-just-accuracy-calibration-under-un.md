---
title: "Subtype Robustness Is Not Just Accuracy: Calibration Under Unseen Subtype Shift"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00928"
authors: ["Hanyu Su, Carlota Julbe i Juanola, Yibo Hu"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.00928v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00928v1 Announce Type: new Abstract: Subtype robustness asks whether a model keeps the correct coarse prediction when test examples come from fine-grained subtypes absent from training but still inside a known coarse category. Prior work studies this almost entirely through accuracy. We ask whether the model also stays calibrated. We present the first systematic study of the question across ImageNet, BREEDS, iNaturalist and CIFAR-100 with five architectures. Calibration breaks down on unseen subtypes, where accuracy drops while confidence barely follows, leaving the model systematically overconfident exactly where it has become less accurate. At matched accuracy loss, generic image corruption causes a much larger drop in confidence, so the effect is not a general consequence of losing accuracy. The model reacts to visible degradation but not to in-taxonomy novelty. Recalibration tuned on seen subtypes narrows the gap but does not close it, and out-of-distribution scores flag the affected inputs only weakly. Subtype robustness should therefore be evaluated through calibration, not accuracy alone.
