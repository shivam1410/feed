---
title: "Neural Slack Variables for Shape Constraints"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.13803"
authors: ["Ruben Wiedemann, Antoine Jacquier, Lukas Gonon"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2606.13803v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.13803v1 Announce Type: new Abstract: Enforcing functional inequality constraints such as monotonicity and convexity in neural networks is a fundamental challenge in many industrial and scientific applications. Classical one-sided penalty methods, along with primal-dual methods gated by complementary slackness, provide constraint gradients only at violated locations, resulting in fragile satisfaction. Architectures that guarantee feasibility by construction, on the other hand, remain largely limited to elementary cases and impose additional inductive biases. We introduce neural slack variables, a deep learning native primal-side approach that converts constraint enforcement into a regression problem by coupling the primary network with a jointly learned auxiliary network. The auxiliary network serves as a valid target for the primary network's constraint quantities, inducing feasibility and regularity. Neural slack variables achieve zero measured violations on dense-grid monotonicity and convexity test cases, where penalty and primal-dual baselines leave residual violations, and enable arbitrage-free learning of volatility surfaces, an open industrial challenge in quantitative finance.
