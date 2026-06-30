---
title: "On the Necessity of a Liquid Substrate for Mesh Intelligence"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28413"
authors: ["Hongwei Xu"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2606.28413v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28413v1 Announce Type: new Abstract: A mesh of sovereign agents has no center: no shared clock, no shared model, and no coordinator to gather data or retrain. Its competence rests on each agent folding the projections its peers emit into a single internal state, online, from observations that arrive at irregular, unscheduled times, on a substrate whose weights it cannot retrain. Any one of these constraints is tractable on its own; folding optimally under all three at once is not. We ask what such a substrate must be, and prove two necessary conditions from one model of a self-evolving latent observed at irregular, exogenous times. Because the latent changes, its optimal estimator is time-varying: an adaptive timescale is necessary, and every fixed-gain filter is strictly suboptimal. And because arrivals are clock-free, the optimal estimate depends on the elapsed gap between them, which no gap-blind network recovers at any width or depth. This second condition is capacity-independent: scale cannot substitute for the missing dependence. The two conditions intersect in the continuous-time liquid class. An LSTM satisfies the first, a fixed continuous-time filter the second, and a multi-timescale liquid network both. Synthetic experiments confirm each: the network attains the timescale, and the separation is computed exactly. The characterization is necessary, not sufficient, and binds fixed-weight substrates: a network free to retrain reaches the class by other means. Proved per agent, the necessity binds every agent of a mesh, a structural condition on mesh intelligence.
