---
title: "CEDAR: Causal Edge Discovery for Autoregressive Processes"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20696"
authors: ["Mohammad Fesanghary"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2607.20696v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20696v1 Announce Type: new Abstract: We propose CEDAR (Causal Edge Discovery for Autoregressive Processes), a constraint-based method for lagged causal edge discovery in sparse autoregressive time series. CEDAR screens candidate cross-variable lags using AR(1)-residualized, U-centered distance correlation, then applies two targeted conditional-independence tests per significant cross-variable lag candidate and accepts at most one lag per ordered pair. A stable MCI pruning step removes indirect edges, and optional deterministic C-nodes adjust for specified trend-like nonstationarity. In sparse regimes where few lags survive screening, CEDAR requires $O(d^2)$ CI tests after screening while retaining edge-level interpretability. CEDAR is most effective when data are scarce and variables exhibit lag-1 self-dynamics; methods with richer conditioning sets become preferable as $T$ grows or when higher-order autoregressive or simultaneous multi-lag effects are common.
