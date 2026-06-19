---
title: "Can In-Context Learning Support Intrinsic Curiosity?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19476"
authors: ["Eric Elmoznino, Sangnie Bhardwaj, Johannes von Oswald, Rajai Nasser, Blaise Ag\\\"uera y Arcas, Jo\\~ao Sacramento, Rif A. Saurous, Guillaume Lajoie"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.19476v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19476v1 Announce Type: new Abstract: Effective machine learning depends not only on how we model data, but also on what data we choose to collect. While large sequence models have revolutionized data modeling, the problem of automated data selection, or "intrinsic curiosity", remains a significant challenge. Classic approaches incentivize exploration by rewarding an agent based on its "learning progress", which measures how much a newly acquired observation improves a world model's predictive ability. However, evaluating these rewards traditionally requires expensive inner loops of gradient descent updates within each trajectory, rendering them computationally impractical at scale. In this work, we investigate whether the emergent in-context learning (ICL) capabilities of sequence models can eliminate this bottleneck by serving as immediate, update-free world models. Specifically, we evaluate whether an exploration policy can be trained to maximize learning progress, using solely the prediction errors and counterfactual context manipulations of an in-context learner. We first prove that in general Markov decision processes, this is in fact impossible in an unbiased way: the resulting intrinsic rewards either suffer from nuisance terms that bias their estimation of true learning progress, or they cannot be implemented using an in-context learner's prediction errors. Conversely, we prove a positive result for a broad subclass of non-temporal settings, encompassing active learning and Bayesian Experimental Design: here, ICL-derived rewards successfully bound and asymptotically converge to the true learning progress. We corroborate our theory with controlled experiments across continuous and symbolic environments, demonstrating that our ICL-driven framework successfully trains curious data-collection policies that explore optimally.
