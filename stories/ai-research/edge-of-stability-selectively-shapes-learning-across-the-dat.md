---
title: "Edge of Stability Selectively Shapes Learning Across the Data Distribution"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04212"
authors: ["Shauna Kwag, Anakha Ganesh, Tomaso Poggio, Pierfrancesco Beneventano"]
date: "Thu, 04 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.04212v1"
image: ""
generated: "2026-06-05T02:55:12+05:30"
---

arXiv:2606.04212v1 Announce Type: new Abstract: Existing analyses of the edge of stability (EoS) treat it as a global property of optimization. We show that it is also selective: the stability constraint redistributes learning across subsets of the training distribution, amplifying progress on some groups while suppressing progress on others. Using a branching intervention that enters or exits the EoS regime from the same training state, we causally demonstrate this trade-off and identify two necessary conditions for a group to benefit. First, its aggregate gradient must align with the top Hessian eigenvector. We isolate this mechanism with a controlled perturbation that preserves distance but randomizes direction, destroying alignment and eliminating the advantage. Second, the group must sustain non-vanishing gradient magnitude over time. Under cross-entropy loss, gradient saturation decouples confidently classified groups, shifting the advantage to output-outliers, whose gradients persist. Together, these results show that EoS functions not only as a stability boundary, but as a mechanism governing the allocation of learning across the data distribution.
