---
title: "Rethinking Structural Anomaly Detection: From Decision Boundaries to Projection Operators"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.15280"
authors: ["Alexander Bauer"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.15280v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.15280v1 Announce Type: new Abstract: Most existing anomaly detection methods rely on estimating a probability density or learning an enclosing decision boundary, implicitly assuming that normal data occupies a region of non-zero volume in the ambient space. In contrast, structural anomaly detection considers data that lies near a low-dimensional manifold, creating a mismatch between the inductive bias of existing methods and the structure of the data, often resulting in degraded performance. To address this mismatch, we introduce a geometric perspective. Specifically, we learn a projection operator onto the manifold of normal samples and define a sample as anomalous if it is altered by this projection. This formulation naturally integrates the inductive bias of manifold-supported data and reframes anomaly detection in terms of a projection residual, thereby resolving issues arising from modeling degenerate distributions. Notably, it provides a unifying interpretation of reconstruction-based methods by explaining their success and failure in terms of projection quality. In particular, it explains the strong generalization ability of projection-aligned models as a consequence of contraction behavior toward the manifold. Moreover, by decoupling anomaly detection from probabilistic modeling, it reduces the tendency to misclassify rare but normal samples, a widely recognized limitation of existing approaches. Empirically, we demonstrate that projection-aligned methods achieve strong performance, outperforming boundary-based methods while improving upon existing reconstruction-based approaches.
