---
title: "Diagnosing and Repairing Shape-Prior Shortcuts in Long-Range Single-Shot Fringe Projection Profilometry"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17093"
authors: ["Adam Haroon, Anush Lakshman, Cody Fleming, Beiwen Li"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.17093v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17093v1 Announce Type: new Abstract: Learning-based single-shot fringe projection profilometry (FPP) has been studied mostly at close range. The long-range regime (standoff beyond 1 m) remains largely unaddressed: inverse-square intensity falloff lowers fringe signal-to-noise ratio and degrades physical ground truth, the single-shot problem is ill-posed because fringe-order information is absent from one image, and these architectures have not been studied mechanistically. We present a diagnose-repair-verify study using mechanistic interpretability (MI) and conformal uncertainty quantification (UQ) as convergent diagnostics: they agree on one physical failure locus, driving and verifying an architectural repair. On a photorealistic synthetic benchmark (15,600 fringe images, 50 objects at 1.5-2.1 m), a best UNet baseline reaches 14.54 mm object mean absolute error (MAE). Three probes (linear probing, Grad-CAM, flat-plane out-of-distribution test) converge: the baseline solves the task via object-boundary shape priors rather than fringe-phase decoding. We repair this with PhiCalNet, which outputs wrapped phase rather than depth and applies a fixed differentiable calibration layer mapping phase to depth, removing the shape-prior solution from the hypothesis space architecturally rather than by a loss penalty. A physics-informed loss that enforces the same physics as a soft penalty on a depth-regressing network yields no measurable gain, isolating the architecture as the operative factor. PhiCalNet reduces object MAE 3.3x to 4.46 mm; the residual is carried by 0.103% of pixels at the +/-pi wrap discontinuity. Pixel-wise conformal UQ confirms the diagnosis: rejecting the top 5% of object pixels by snapshot disagreement cuts PhiCalNet RMSE by 64% (20.6->7.4 mm) versus 3.5% for the baseline. MI and UQ converge on the same failure locus.
