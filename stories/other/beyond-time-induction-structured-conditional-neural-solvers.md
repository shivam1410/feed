---
title: "Beyond Time Induction: Structured Conditional Neural Solvers for Parametric Stochastic-Volatility Pricing"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19254"
authors: ["Jose Miguel Lara Rangel, Mixtli Vazquez Mendoza"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19254v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

Physics-informed neural networks provide a flexible framework for learning parametric PDE solution families without labeled data, yet preserving accurate derivatives across heterogeneous regimes remains challenging. Structured neural solvers offer compact representations, but restrictive conditional parameterizations can limit adaptation across the solution family. We introduce BeTINN, a structured conditional architecture extending time-induced modulation through multi-directional time-parameter conditioning and a joint residual pathway. We evaluate BeTINN on the Heston stochastic-volatility PDE, a demanding parametric problem with mixed derivatives and economically relevant first- and second-order sensitivities. BeTINN improves joint accuracy across normalized option value and key sensitivity metrics relative to our baselines. Controlled ablations characterize the roles of its architectural components. We further find that validation physics loss is informative but does not fully determine differential fidelity, and that accurate solution values can coexist with localized derivative errors. These results support structured conditional adaptation and motivate derivative-aware evaluation when sensitivities are downstream quantities of interest.
