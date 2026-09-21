---
title: "Decision-Focused Learning for Mean-Variance Portfolio Optimization via KKT-Based Reformulation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.21427"
authors: ["Kensei Nosaka, Shunnosuke Ikeda, Yuichi Takano"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 57
guid: "oai:arXiv.org:2609.21427v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.21427v1 Announce Type: new Abstract: Mean-variance portfolio optimization (MVO) is a central framework in data-driven asset management. A widely adopted approach is a two-stage framework that first predicts expected returns and then solves the optimization problem based on these predictions, with the predictive models trained by minimizing prediction errors. However, this objective of prediction is not aligned with the quality of the downstream portfolio decision. Decision-focused learning (DFL), which directly minimizes the downstream decision loss within the learning process, has thus emerged as a promising direction. However, existing DFL approaches to MVO rely on surrogate losses or constraint relaxations for tractability, creating a structural mismatch between predictive model training and the constrained MVO solved at evaluation. We propose a single-level optimization formulation that incorporates the Karush-Kuhn-Tucker (KKT) optimality conditions of the lower-level MVO into the upper-level learning problem. This formulation explicitly preserves the budget and short-sale constraints while remaining tractable for standard nonlinear optimization solvers. Rolling-window experiments on real-world ETF (Exchange Traded Funds) data across two asset universes with different correlation structures show that our method achieved the best performance on multiple investment metrics and also demonstrated performance improvement due to the proposed regularization.
