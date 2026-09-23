---
title: "DefaultGNN: A Dual-Perspective GNN Framework for Predicting Corporate Default from Buyer-Seller Transaction Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25542"
authors: ["Junghoon Kim, Hyunsung Kim, Seungyoon Choi, KyoungYong Park, Jihun Lee, YongGu Ji, Chanyoung Park"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.25542v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25542v1 Announce Type: new Abstract: Corporate default prediction is a core problem in financial risk management, yet traditional credit models rely heavily on financial statements that are often sparse or unavailable for many firms. Corporate transaction networks offer a complementary view of real economic activity, but how risk propagates through buyer-seller relationships remains underexplored. We conduct a large-scale empirical study using real-world electronic tax-invoice data spanning six years that links transaction histories with default events, revealing that transaction-driven risk is both role-dependent (buyer or seller) and scale-dependent. Based on these findings, we construct multiplex buyer-view and seller-view transaction networks and propose DefaultGNN, a dual-perspective graph neural network-based framework for corporate default prediction. DefaultGNN integrates both views to model how risk flows through transactional relationships, achieving strong improvements over both attribute-based and graph-based baselines, especially for firms with limited intrinsic risk signals. We further provide interpretable network-based explanations by visualizing how distressed trading partners contribute to default risk. In collaboration with a licensed credit rating agency, we validate that DefaultGNN's predictions complement existing credit scoring models, improving approval rates by 7-11%p without increasing default risk among approved firms. The source code can be found at https://github.com/jhkim611/DefaultGNN
