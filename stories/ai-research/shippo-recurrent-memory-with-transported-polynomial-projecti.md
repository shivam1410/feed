---
title: "SHiPPO: Recurrent Memory with Transported Polynomial Projections"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.03055"
authors: ["Tomoya Mizuguchi, Bum Jun Kim"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.03055v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.03055v1 Announce Type: new Abstract: HiPPO gives recurrent states memory semantics as coefficients of online polynomial projections, but in fixed channel coordinates. Modern selective SSMs, by contrast, rely on token-dependent control and channel interaction. We introduce SHiPPO (Sylvester HiPPO), a transported projection-memory prior that lifts HiPPO coefficient memories into a moving channel frame. For any fixed or realized right-transport path, SHiPPO transports the approximation family and channel metric together; conditional on that path, the state is ordinary HiPPO in a tied moving frame and follows Sylvester coefficient dynamics, preserving the left online-memory operator while adding right-action transport. For selective-SSM execution, we derive a restricted group-local realization with controller-compatible right actions, exponential-adjusted updates, exact block-affine scan, and recurrent decoding. We also give a simultaneous-reducibility criterion identifying when right transports collapse to static mixing plus independent scalar or blockwise banks. Controlled diagnostics show that larger current-token write rank improves ordinary prediction error but cannot recover order-sensitive changes to already-written memory; transported-memory variants recover this signal, which disappears when the transport pathway is removed. A finite-field associative-recall diagnostic with interleaved bindings, operations, and queries provides complementary autoregressive evidence while leaving the preferred right-action realization open. Taken together, these results support SHiPPO as a mechanistically grounded transported-memory prior, with evidence focused on memory mechanisms rather than broad sequence-modeling dominance.
