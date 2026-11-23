---
title: "A Stationarity-Based Regret Framework for Time-Varying Nonconvex Composite Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.27218"
authors: ["Nadav Hallak"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 18
guid: "oai:arXiv.org:2611.27218v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

This paper studies time-varying nonconvex composite optimization, where decisions are made sequentially and classical value-based regret notions are generally ill-posed. We introduce a stationarity-based performance framework defined through local regret measures built from first-order optimality conditions, and identify minimal structural requirements under which such measures constitute sound performance criteria. This abstraction encompasses canonical optimality measures, including the proximal-gradient residual, and collapses to classical dynamic regret in convex settings. We then focus on the proximal-gradient residual as a concrete and algorithmically meaningful instantiation for general composite problems. In convex problems, we show that the resulting local regret is equivalent to standard dynamic regret. In nonconvex settings, we establish that sublinear stationarity-based regret is unattainable without temporal regularity, and introduce a gradient-variation budget that captures this necessity. Under this model, we analyze online proximal-gradient methods and prove sublinear regret guarantees in both nested multi-call and fully incremental single-call oracle regimes, highlighting the tradeoff between per-round computational effort and achievable performance. Finally, we demonstrate how the proposed framework extends to nonconvex multiplayer games by interpreting equilibrium-seeking dynamics through stationarity-based regret, and corroborate the theoretical findings with numerical experiments.
