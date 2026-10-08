---
title: "REFIT: Recognize, Fix, and Test Wearable Sensor Placement Shifts without Labels"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.08991"
authors: ["Bangxun Tang"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 38
guid: "oai:arXiv.org:2610.08991v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

We present REFIT, an input calibration for frozen activity-recognition models whose inertial sensors are worn differently at deployment than in training. When users move a watch to the other wrist or put a strap sensor back on turned, the model sees the same motion on changed axes. REFIT undoes such shifts without labels or retraining. It describes them by families of axis transforms, such as reflections and rotations, and fits each family to the user's data so that simple statistics match those of the training data. The family that removes most of the mismatch names the shift. REFIT fixes the shift by applying the best member of that family before the frozen model and re-estimating its normalization statistics. It tests the fixed model with a label-free accuracy estimate and asks the user to re-wear the sensor when it is low. Experiments on real left/right sensor pairs and on real and simulated re-attachment show that REFIT outperforms label-free test-time adaptation methods on every dataset and restores most of the accuracy lost to re-attachment. It names injected shifts far more reliably than a confidence-based selector. After a correction over all signed permutations of the axes, the estimate separates successful from failed corrections.
