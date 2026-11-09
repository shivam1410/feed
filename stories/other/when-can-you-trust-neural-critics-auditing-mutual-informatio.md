---
title: "When Can You Trust Neural Critics? Auditing Mutual Information Estimates of Higher-Order Epistasis in Protein Language Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.09046"
authors: ["Maryam Rahimimovassagh, Waldemar Karwowski, Niloofar Yousefi"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.09046v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Mutual information (MI) estimation is used to probe what neural representations encode, including in protein language models, but variational MI estimators have variance that scales at least exponentially in the true MI. We audit a prior neural-MI study of order-resolved epistasis in ESM-2 on the four-site GB1 landscape. Run-to-run differences show no systematic bias and a magnitude comparable to ordinary cross-seed retraining variability, and the evaluation-pairing scheme shifts scores substantially. At the original dimensionality, two of three alternative estimator families stabilize the estimate across seeds and one does not. In a synthetic calibration at the representation dimensionalities of two other protein language models (a Gaussian channel with known MI; no model representations), all three families recover materially less signal than required, despite correct signal ordering and stable seeds. A control critic given the true signal direction, which also reduces its input to one dimension, recovers 93.3% and 98.7% of the analytic MI at gain 1.5 (at 5,120 and 4,096 dimensions), so the signal is recoverable with privileged information, but the control does not identify why blind estimation fails. We package the checks into a reusable diagnostic protocol and conclude that even a stabilized estimator is not currently sufficient for order-resolved dependence claims made under blind search at this dimensionality and sample size.
