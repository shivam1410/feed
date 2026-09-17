---
title: "Regional Explanations via Causal Sufficiency and Necessity"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.18049"
authors: ["Xuexin Chen, Peng Liang, Zijian Li, Zhiyong Lin, Ruichu Cai"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.18049v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.18049v1 Announce Type: new Abstract: Model explainability is essential for understanding and trusting machine learning models. Existing explainable AI methods often explain predictions through feature importance, counterfactual explanations, or rules. However, a region-level characterization of when and only when a prediction behavior arises remains less explored. This paper proposes Causal Sufficient and Necessary Regional Explanations (SNRE), a framework that learns an input region $A$ and output region $B$ such that membership in $A$ is both sufficient and necessary for the model output to fall in $B$. Motivated by the classical Probability of Necessity and Sufficiency (PNS), we formulate a region-level PNS measure through stochastic interventions and derive a differentiable finite-sample estimator for optimization. SNRE parameterizes the input-output region pair with explicit and interpretable algebraic region families, together with a learnable feature mask, balancing expressiveness and interpretability. Experiments demonstrate that SNRE learns region pairs with strong sufficiency-necessity performance, robust explanation behavior, and practical utility for model analysis.
