---
title: "Do Tabular Foundation Models Agree with Themselves?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.06004"
authors: ["Christian Kl\\\"otergens, Vijaya Krishna Yalavarthi, Lars Schmidt-Thieme, Tom Hanika"]
date: "Fri, 07 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.06004v1"
image: ""
generated: "2026-08-07T19:04:45+05:30"
---

arXiv:2608.06004v1 Announce Type: new Abstract: Tabular Foundation Models (TFMs) are currently the best approach to tabular prediction problems. They are constructed as transformers that approximate the Bayesian posterior predictive distribution based on a pre-training prior. These univariate predictors can be converted into multivariate ones autoregressively by sampling one target and adding it to the features. However, the faithfulness of the resulting joint has not been investigated. Furthermore, TFMs cannot be evaluated against the posterior itself, at least not on real-world datasets, because the ground-truth distribution is unknown. We therefore propose asking a different question: could a model's predictions result from any joint distribution? To answer this question, we pose two requirements that any such model must satisfy. The first is marginalization consistency, which demands that marginalized conditionals are equal to directly predicted marginals. The second is factorization consistency, which demands that different factorization orders result in equal joint distributions. Every TFM that we evaluate violates both of these requirements for both classification and regression across all datasets.
