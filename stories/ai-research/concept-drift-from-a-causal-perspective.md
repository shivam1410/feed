---
title: "Concept Drift from a Causal Perspective"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25340"
authors: ["Eduardo V. L. Barboza, Jean Paul Barddal, Robert Sabourin, Rafael M. O. Cruz"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.25340v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25340v1 Announce Type: new Abstract: Concept drift is a common phenomenon in real-world data streams, in which changes in the data-generating distribution can degrade predictive model performance. Most existing definitions characterize drift as changes in the joint distribution $P(\mathbf{x}, y)$, without distinguishing which component of the data-generating process has changed. In this work, we introduce a causal perspective on concept drift based on Structural Causal Models (SCMs). We propose a taxonomy that categorizes drift events by their causal origin, including changes in exogenous variables, endogenous mechanisms, confounders, and target-generating processes. Building on this framework, we develop an SCM-based data stream generator that simulates controlled mechanism-level drift events. Our experiments empirically characterize the distributional effects of each drift type and show that drifts with different causal origins induce distinct patterns of distribution shift and predictive behavior. Furthermore, by integrating causal discovery methods, we use our framework to construct data streams grounded in real-world dependency structures, enabling more realistic and informative evaluation scenarios. We also demonstrate that leveraging the generated data can improve downstream performance. These results highlight the importance of accounting for causal structure when studying and evaluating adaptive learning methods, and establish a foundation for causally-aware evaluation in non-stationary environments.
