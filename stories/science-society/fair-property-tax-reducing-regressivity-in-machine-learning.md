---
title: "Fair Property Tax: Reducing Regressivity in Machine-Learning Valuation"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.27009"
authors: ["Nicolas Acevedo Villena, Haihao Lu, Michael Wagner, Timothy Sparer"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.27009v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

Advanced machine-learning models are increasingly used for property valuation in tax assessment. Although these models can achieve high predictive accuracy, they may systematically assign higher valuation-to-sale ratios to lower-priced properties, a pattern known as regressivity. In collaboration with the Cook County Assessor's Office (CCAO), we develop and evaluate two training methods that substantially reduce this regressive pattern while maintaining price-scale predictive accuracy. The Direct method has been incorporated into CCAO's public residential valuation software. Retaining the LightGBM model class used at CCAO, we propose a Direct penalty on squared covariance between log valuation errors and log sale prices, and an observation-additive Surrogate that yields a weighted squared-error loss. We evaluate both methods in our implementation of the CCAO workflow, using seven chronological validation folds, a held-out test set, and a 2025-forward test set. Measured by the magnitude of price-related bias (PRB), regressivity falls by approximately 49% on held-out sales and 39% on 2025 sales at a Surrogate setting selected by cross-validation, relative to the same LightGBM model fitted without the penalty. Price-scale $R^2$ is essentially unchanged. Its small rise, from 0.893 to 0.897 on held-out sales and from 0.904 to 0.908 on 2025 sales, reflects overall valuation level. Log-price RMSE rises by 3.1% and 1.7%, respectively. Paired sale-bootstrap 90% intervals for the PRB reductions lie within about two percentage points of these estimates. In an additional eight-county benchmark, both methods reduce regressivity in every county, with higher log-price prediction error as the expected tradeoff. These findings demonstrate a practical way to reduce measured regressivity within an existing assessor workflow while preserving price-scale predictive performance.
