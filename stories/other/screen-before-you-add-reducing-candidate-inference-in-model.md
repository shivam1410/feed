---
title: "Screen Before You Add: Reducing Candidate Inference in Model Ensembles"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18647"
authors: ["Davide Mambelli, Alessandro Rozza, Steven Motta"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18647v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

As new models become available, existing ensembles must be updated to be competitive, making them intrinsically dynamic. Deciding whether to add a candidate model can require inference on an entire annotated dataset. Such a screening becomes prohibitive for models with costly inference especially when they ultimately add no value. Even under simple convex aggregation, relying on benchmark scores can be misleading as strong standalone performance does not guarantee ensemble improvement, and fitted ensemble weights can hurt test performance. In this work, we study candidate screening and show how early rejection can be achieved safely, exploiting residual geometry for stratification and rejecting the candidate when the best possible remaining predictions cannot achieve the necessary improvement. The key result that justifies this approach is that, under convex aggregation and squared or Brier loss, the population optimum improves if and only if a candidate induces a prediction change positively aligned with the residuals of the population-optimal existing ensemble. An optimistic quadratic program (QP) provides certified early rejection, while posterior-scenario sampling offers an alternative heuristic. We evaluate the approach by showing the tradeoff between saved calls and screening accuracy, which refers to recovering the same accept/reject result as for the entire annotated dataset. We assess empirically whether full-dataset decisions predict candidate usefulness on a held-out test set. On two LLM panels, stratified screening with certified QP rejection saves 21-23% of candidate calls while keeping 100% screening accuracy. In our experiments, sampling posterior scenarios further increases call savings to approximately 37%, with a loss of less than one percentage point in screening accuracy.
