---
title: "Robust Ambiguity Detection (RAD) From Model- and Feature-Space Consistency"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.11541"
authors: ["Manya Singh, Mark T. Keane, Arjun Pakrashi"]
date: "Thu, 13 Aug 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2608.11541v1"
image: ""
generated: "2026-08-13T19:06:32+05:30"
---

arXiv:2608.11541v1 Announce Type: new Abstract: Machine learning models should be robust, in the sense of remaining predictively consistent under permissible variations. A model's predictions should ideally remain unchanged when it is replaced by a functionally equivalent one, or when its inputs are subject to minor, admissible perturbations. If such changes alter a prediction significantly, then the prediction is "ambiguous" with respect to the model. Models should abstain from making such ambiguous predictions and/or should flag them for human inspection, especially in high-stakes decision-making scenarios. However, in practice, such ambiguity is not easy to identify once a model is deployed. Here, the Robust Ambiguity Detection (RAD) framework is advanced for quantifying predictive ambiguity using two complementary metrics: Model-Space Consistency and Feature-Space Consistency. These two scores, the RAD Score-Pair, visualised through the RAD Plot, provide an interpretable characterisation of the sources of ambiguity and the actions a user may consider in response. RAD is evaluated on synthetic datasets with systematically controlled overlap, as well as several real-world datasets where the level of ambiguity cannot be directly inspected. Finally, we demonstrate a downstream application of RAD where samples are ranked by their RAD Pareto-Rank and the most ambiguous are abstained from prediction, achieving performance comparable to existing rejection-based approaches.
