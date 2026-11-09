---
title: "Random Symbolic Boosting: A Geometric Approach to Symbolic Regression"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08753"
authors: ["Jos\\'e R. Ortegaa, Jos\\'e Manuel Mu\\~noz Contreras, Leonardo Trujillo"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08753v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Symbolic models offer interpretability, but their construction through generational evolution can be computationally expensive. This article presents Random Symbolic Boosting (RSB), a method that constructs explicit additive symbolic models via boosting over populations of randomly generated syntax trees, eliminating the need for generational evolution. The idea combines two observations: high-dimensional spaces can be spanned by enough linearly independent vectors, and the semantics of syntax trees can be directly manipulated as such vectors. It is shown that, for Ordinary Least Squares, the boosting process guarantees a monotonic reduction of the training error for both regression and classification. Furthermore, an adaptive geometric early stopping mechanism is introduced. It is based on the angle between the prediction and target vectors, is independent of the problems scale, and requires no adjustments across tasks. Evaluated on a standard benchmark for symbolic regression, the method is located at the Pareto-optimal point between predictive accuracy and training time, ranking first on the real-world datasets. Additionally, it was tested on a large tabular classification benchmark with 200 problems, achieving competitive results.
