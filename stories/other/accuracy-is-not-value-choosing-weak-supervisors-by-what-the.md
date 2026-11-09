---
title: "Accuracy Is Not Value: Choosing Weak Supervisors by What the Student Inherits"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08959"
authors: ["Romano Li, Xunfan Cai"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08959v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Weak supervisors are usually judged by their own errors, but what matters is what a student learns from them. For squared loss and any linear learner shared by all supervisors, we show that a supervisor's value is determined by its errors after they pass through the student's learning operator. Consequently, the inner products of the supervisors' raw errors can be compatible with every feasible value of the student's risk, and weighting supervisors by them can be arbitrarily worse than the best weighting in relative excess risk. This student-relative value is not identifiable from unlabeled data, but what is missing is small: one finite-dimensional projection of the target decides whether training on a weak aggregate helps, another decides how to weight the supervisors. Known teacher training rules, or a label-model condition stated in student-relative form, shrink it further. Clean labels close the remaining gap at a cost set by the geometry of the unresolved directions rather than by the dimension of the student's representation, with matching worst-case lower bounds. In Gaussian designs we also quantify when exact teacher structure beats ordinary stacking and when weak supervisors, combined with clean labels, beat every procedure that uses the clean labels alone. The guarantees extend to fitted ridge students and finite unlabeled data.
