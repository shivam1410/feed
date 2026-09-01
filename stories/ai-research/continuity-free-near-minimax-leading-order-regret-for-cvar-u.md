---
title: "Continuity-Free Near-Minimax Leading-Order Regret for CVaR-UCBVI"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.28960"
authors: ["Yuanlong Chen"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.28960v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.28960v1 Announce Type: new Abstract: For finite-horizon tabular CVaR reinforcement learning, prior work proves a $\widetilde{O}(\tau^{-1}\sqrt{SAK})$ leading regret bound for arbitrary normalized return laws and the sharper $\widetilde{O}(\sqrt{SAK/\tau})$ rate under a density lower bound. We show that the same Bernstein CVaR-UCBVI algorithm attains the sharper rate without continuity assumptions. The key is a selected-budget self-bound: the conditional variance of the episode shortfall is at most $\tau$ plus the value-estimation width. Substitution into the original Bernstein decomposition yields, with high probability, $\widetilde{O}(\sqrt{SAK/\tau}+(SAHK^{1/4}+S^2AH)/\tau)$ regret for arbitrary normalized return laws, including atomic, mixed, and continuous laws. The $\tau^{-1/2}$ leading term matches the expected-regret minimax lower bound up to logarithmic factors. Thus Bernstein CVaR-UCBVI is minimax-optimal over the full return-law class in the leading-order regime; the lower-order terms retain their $\tau^{-1}$ dependence.
