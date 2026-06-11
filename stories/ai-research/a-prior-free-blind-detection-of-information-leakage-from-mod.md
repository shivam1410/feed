---
title: "A prior-free blind detection of information leakage from model predictions"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11267"
authors: ["Laurence A. Jacobs"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.11267v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11267v1 Announce Type: new Abstract: Data leakage -- contamination of a model with information unavailable at baseline -- is the dominant reproducibility failure in machine-learning-based science, yet detection tools require training code, external data, or domain expertise. None operates on the artifact an auditor most often holds: the model's output. We ask what can be decided about leakage from predictions and outcomes alone. We give a decision-theoretic framework in which leakage diagnostics are functionals of the predicted-risk/outcome law, parameterized by a threshold-weighting linked to proper scoring rules and decision-curve analysis. We prove a sharp impossibility: a recalibrated leak matching an honest model's calibration and discrimination is indistinguishable from honest performance by \emph{any} function of the predictions, so the broad class is detectable only against an externally supplied ceiling on achievable discrimination. We then prove what leakage cannot hide: a near-deterministic subgroup -- the signature of a near-label leak -- produces a sustained unit-purity head that no legitimate predictor of a non-deterministic outcome can manufacture, yielding a prior-free test. These results organize leakage into a trichotomy -- miscalibrated, broad-calibrated, and deterministic -- each with a matched detector and failure mode. We validate on UK Biobank using time-windowed comorbidity leakage with known, graded severity, measuring a detection floor of $\Delta\cstar \approx 0.007$ on this endpoint, below which residual leakage is undetectable from output and too small to alter conclusions. The numerical floor is cohort- and endpoint-specific; the structural lesson is general: output-only detection fails where residual leakage is indistinguishable from an honestly stronger predictor. The test returns a verdict on a prediction vector in under a second on commodity hardware.
