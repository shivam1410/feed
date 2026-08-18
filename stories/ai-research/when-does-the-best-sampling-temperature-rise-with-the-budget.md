---
title: "When Does the Best Sampling Temperature Rise with the Budget? Sufficient Conditions for Pass@k"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14665"
authors: ["Changsu Jeong (Independent Researcher)"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.14665v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14665v1 Announce Type: new Abstract: The temperature that maximizes pass@$k$ is often low for a small sampling budget and higher for a large budget. This pattern has been reported from Codex through recent multi-sample inference studies. It is not an algebraic property of pass@$k$: as Slocum et al. (ICLR 2025) observe, for one fixed task the maximizing temperature is independent of $k$. Building on that fixed-task observation and the hard/easy-task explanation, we give a formal population-level sufficient condition for the aggregate pattern. For task $X$, let $p_t(X)$ be one-sample success probability at temperature $t$, and define the conditional log-success response $m_t(u)=\mathbb{E}[\dot p_t(X)\mid p_t(X)=u]/u$. If $m_t(u)$ is nonincreasing in current success probability, then the normalized temperature derivative of aggregate pass@$k$ is nondecreasing in $k$. Consequently, derivative signs are nested across budgets; if each temperature-performance curve is strictly single-peaked, its unique maximizer is nondecreasing in $k$. The proof identifies the mechanism as a monotone-likelihood-ratio power tilt toward lower-success tasks. We derive a closed-form two-stratum phase diagram, including upward and downward regimes, and show that the marginal temperature derivative admits an exact $\mathrm{Beta}(2,k)$ kernel representation whose kernel concentrates at one-sample success of order $1/k$. Interpreting that scale as task-level localization additionally requires a regular, nonvanishing density-response factor near zero. A signed-moment representation yields diagnostic shape restrictions, while a short appendix records exact discrete refinements of the existing multi-configuration allocation formulation. No language model is trained, and no model query is used as an experimental measurement: the contribution is a conditional theory of an established empirical phenomenon, with assumptions that can be tested in future work.
