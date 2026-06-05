---
title: "Variance Reduction for Heavy-Tailed Monetization Metrics in Ranking Experiments via Post-Stratification"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04110"
authors: ["Neeti Pokharna, Olivier Jeunen, Yatharth Saraf, Aleksei Ustimenko"]
date: "Fri, 05 Jun 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2606.04110v1"
image: ""
generated: "2026-06-06T01:41:01+05:30"
---

arXiv:2606.04110v1 Announce Type: new Abstract: Online evaluation of ranking and retrieval systems often relies on downstream monetization metrics such as app revenue or creator earnings. These metrics are typically heavy-tailed, with a small fraction of users dominating both mean and variance, leading to low statistical power and unreliable conclusions in A/B experiments -- especially under limited traffic. We present a practical framework for variance reduction in online experiments by combining post-stratification with CUPED. Our approach leverages pre-experiment covariates to improve the sensitivity of monetization experiments without requiring additional traffic. Deployed at ShareChat across ranking-driven monetization experiments, the method substantially reduces variance and improves decision stability, achieving equivalent statistical confidence with ~45\% less traffic than standard metrics. We further discuss practical design choices, guardrails, and limitations, providing guidance on when post-stratification is appropriate for real-world information retrieval and Recommendation systems.
