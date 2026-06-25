---
title: "Conformal Orbit-Valid Trust Horizons for Equivariant World Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24946"
authors: ["Hongbo Wang"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.24946v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24946v1 Announce Type: new Abstract: Learned world models are useful only over horizons on which their rollout error remains controlled. We study trust-horizon certification for latent world models with known group symmetries. Given a one-step latent residual and a finite-time expansion estimate, we form a raw horizon curve and calibrate it with a split-conformal multiplicative factor. On the reproducible audit set, the conformal factor is $\gamma_\alpha=1.0$: the raw certificate is already conservative under the audit protocol. Across 50 stable audits, we observe zero anti-conservative violations, corresponding to an exact-binomial 95% upper bound of 5.8% on the violation rate. Our main structural result is that exact equivariance transports a calibrated trust-horizon curve over the group orbit: when the environment dynamics, encoder, predictor, action transform, and latent metric satisfy the stated equivariance/invariance conditions, rollout errors and trust horizons are orbit-constant. Empirically, the implemented models exhibit small orbit-transport residuals, with median 1.1% and maximum 4.1% over 14 orbit audits. The certificate is also non-vacuous (median certified-to-measured horizon ratio 0.67). A certificate-level calibration-cost study shows two complementary regimes. On a symmetric 2D substrate, equivariant, plain, and augmented models are all orbit-valid from a single calibration sector -- no separation, because the substrate already makes non-equivariant baselines approximately orbit-robust. A 3D yaw audit shows the other regime: the equivariant model obtains a one-sector safe and non-vacuous orbit-valid certificate, while healthy non-equivariant baselines pay violation, slack, sharpness, or additional-sector cost. The certificate is a conservative, distributional audit rather than a global reachability guarantee, and certificate-guided subgoal spacing is not confirmed in the current 3D CEM-MPC behavior layer.
