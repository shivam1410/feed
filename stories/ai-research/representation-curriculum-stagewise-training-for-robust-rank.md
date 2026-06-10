---
title: "Representation Curriculum: Stagewise Training for Robust Ranking and Allocation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09891"
authors: ["Ehsan Ebrahimzadeh, Sina Baharlouei, Abraham Bagherjeiran"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 66
guid: "oai:arXiv.org:2606.09891v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09891v1 Announce Type: new Abstract: Ranking in digital marketplaces is a dynamic exposure-allocation mechanism: displayed items shape discovery trajectories and success events logged by the platform to update future allocation policies. Modern ranking systems rely heavily on exposure-confounded signals (e.g. popularity estimates, CTR/CVR aggregates, and ID-based representation), because they are highly predictive under stationary demand. Yet this predictive power can become a learning shortcut: early access to exposure-dependent belief signals steers optimization toward over-reliance on them and away from exposure-independent merit signals (e.g., content-based competitiveness and semantic affinity). Consequently, the learned policy tends to entrench incumbents and degrade cold-start generalization and robustness under distribution shift. We propose Representation Curriculum (RC), a training-time intervention that temporally stages feature utilization. RC foregrounds content-based merit signals initially, then introduces exposure-dependent belief signals while anchoring the content pathway near the learned merit representation, curbing shortcut reliance on historical signals and mitigating gradient starvation on content signals. We formalize RC independently of task and hypothesis class and provide ranking-specific instantiations. In a Gaussian linear ridge setting, we derive closed-form solutions and sufficient conditions under which RC strictly reduces population risk on a cold-start target distribution, with a quantified Pareto tradeoff against source performance. Experiments on public learning-to-rank and recommendation benchmarks, and randomized online experiments in a large-scale e-commerce search system, show that RC measurably shifts reliance from historical belief signals toward content-based merit signals and yields consistent gains on cold populations with a controlled trade-off in head performance.
