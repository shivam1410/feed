---
title: "Organizing LLM Inference for Aggregate Predictions from Behavioral Data"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.23934"
authors: ["Varun Gupta, Vijay Kamble"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.23934v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

When using a large language model (LLM) to simulate a user population, how should we combine individual behavioral histories to predict the fraction of users who take a particular action? We study this question in e-commerce, predicting observed product-level conversion rates from browsing sessions without task-specific model training. We vary two design choices, each involving a bias-variance tradeoff. Summarizing a product's sessions before inference reduces cost but can discard predictive detail, adding bias, whereas predicting outcomes for individual sessions and averaging afterward preserves that detail but requires many calls to reduce variance. Evaluating products together in one prompt can help the model infer what is typical in the setting, reducing bias, but also makes each prediction depend on which other products appear alongside it, adding noise. We evaluate both choices across five LLMs and two datasets. Our main finding is that predictions from individual sessions outperform predictions from summaries when products are evaluated separately, but summaries lead when products are evaluated together. Comparative summaries achieve the highest Spearman correlation with observed rates in 12 of 15 settings, with no alternative significantly better. Comparison thus helps summaries far more than session predictions, overcoming the advantage of behavioral detail. We interpret this difference through a Bayesian model of the second tradeoff, which suggests that comparison helps more when the inputs in a prompt reveal more about differences across products, consistent with our results for four types of comparative context. Comparative summaries also incur a small fraction of the inference cost of the session methods. With the best model for each outcome, they attain 66-89% of the correlation of the best supervised benchmark trained on thousands of labeled products.
