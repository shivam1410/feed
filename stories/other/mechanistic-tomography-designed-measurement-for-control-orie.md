---
title: "Mechanistic Tomography: Designed Measurement for Control-Oriented Interpretability"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.19338"
authors: ["Vijay Erramilli"]
date: "Fri, 21 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.19338v1"
image: ""
generated: "2026-08-21T19:00:17+05:30"
---

arXiv:2608.19338v1 Announce Type: new Abstract: Mechanistic interpretability seeks quantities that models do not expose directly: represented states, component effects, interactions, and responses to interventions. Patching, gradients, Hessian-vector products, and subset interventions provide different measurements under different access assumptions and may target different quantities. We formulate their shared measurement structure as mechanistic tomography: designed measurement for recovering internal mechanisms and intervention effects. For a chosen basis and intervention family, measurements take the form y = Ax + w, where A describes the interventions, x is the target map, and w contains nonlinear response, sampling error, and basis misspecification. This language gives a practical procedure: start with the least costly measurements, test on held-out interventions at the intended scale, calibrate simple mismatch, and expand the measurement family when structured residuals remain. Control provides a demanding validation setting because an estimate that guides an intervention acts as an observer. In a two-HMM model, control error rises with observer error, while target improvement can hide nuisance-state movement. Under forward-only access, sparse aggregate measurements recover a finite-effect map with fewer interventions than coordinate patching. With gradient access, finite probes improve a local attribution map. Lifted measurements and Hessian-vector products recover interactions missed by first-order maps, while Tracr shows that the required family depends on the basis. On GPT-2-small IOI, the Name Mover-Negative Name Mover interaction is the largest held-out predictive term among three tested cross-group pairs. On Qwen-2.5-7B, finite calibration makes an additive refusal-response map adequate, so held-out error does not support pairwise lifting.
