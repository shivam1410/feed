---
title: "Cross-Material Support Transfer for Core-Loss Prediction Under Waveform Covariate Shift"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31659"
authors: ["Cong Yao, Chunye Gong"]
date: "Tue, 29 Sep 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2609.31659v1"
image: ""
generated: "2026-09-29T19:09:35+05:30"
---

Power magnetic materials are characterized on the sinusoidal and triangular waveforms that excitation hardware conveniently produces, whereas deployed converters expose cores to trapezoidal, PWM-shaped flux trajectories, so loss models must predict exactly where their training data are thinnest. The final test of the MagNet Challenge embeds a deliberately extreme instance of this characterization-deployment mismatch: for material D, trapezoids form 16.4% of the test set but only 1.4% of the training set. The 95th-percentile relative error, hereafter p95, of the best submission, built on sequential transfer learning, stalled at 15.9%, the worst among the five materials. This paper shows that the obstacle is missing information under covariate shift rather than class imbalance, and that the missing support can be borrowed from sibling materials instead of being extrapolated. Controlled experiments first refute the imbalance reading: four standard remedies fail, and raising the trapezoidal share to the test-set level degrades accuracy further. The proposed material-identity support transfer, MIST, then trains one 2784-parameter predictor jointly on all five challenge materials. Material identity enters through feature-wise linear modulation, or FiLM, the scarce material's true-label loss is reweighted, and material D receives no fine-tuning, so that the bias of its trapezoid-free training set is never re-installed. MIST lowers the five-seed material-D p95 from 20.39+/-2.03% to 12.38+/-0.92% and the trapezoidal-class p95 from 37.4+/-8.8% to 15.16+/-1.69%, surpassing the best submission with one-sixth of its parameters and no fine-tuning stage; removing material identity at matched capacity inflates the error by an order of magnitude. These results argue that scarce materials should be characterized jointly with their siblings.
