---
title: "Predicting Task Difficulty Without Rollouts"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.05797"
authors: ["Stefan Krsteski, Charlotte Meyer"]
date: "Fri, 07 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.05797v1"
image: ""
generated: "2026-08-07T19:04:45+05:30"
---

arXiv:2608.05797v1 Announce Type: new Abstract: Task difficulty dictates an agent's likelihood of success, and estimating it without rollouts means forecasting this directly from a task description before executing costly simulations in stateful environments. Reliable estimates would therefore allow environment designers to calibrate evaluation benchmarks and construct progressive training curricula. This becomes increasingly important as agents move into long-horizon domains, where empirical trial-and-error is a severe computational bottleneck. Prior work on early prediction is limited to static tasks or isolated coding environments, often relying on narrow features and inaccurate evaluation metrics. We study \textit{ex ante} difficulty prediction across 17 agentic benchmarks spanning coding, mathematics, machine learning, web navigation, function calling, and other domains. We show that AUC can mask poor difficulty estimates, identify token-level entropy as a useful predictive signal, and show how residuals between expected and observed difficulty can expose hidden environment flaws such as contamination and infeasibility.
