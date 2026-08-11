---
title: "From Uncertainty to Failure Attribution: Self-Diagnosing Models for Failure Attribution under Distribution Shift"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.07953"
authors: ["Yiyao Yang"]
date: "Tue, 11 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.07953v1"
image: ""
generated: "2026-08-11T19:05:57+05:30"
---

arXiv:2608.07953v1 Announce Type: new Abstract: Distribution shift poses a significant challenge to the robustness of machine learning models, but the current solutions only aim to detect out-of-distribution (OOD) samples and predict uncertainty levels. We introduce a problem setting for failure attribution under distribution shift, which enables the models not only to detect OOD samples, but also to find out the reason for their failure. The solution we propose is called self-diagnosing models, which are capable of jointly learning predictive output, predictive uncertainty, and a failure attribution signal. In particular, we use the failure attribution vector, produced by a neural network, which provides a structured representation of predictive unreliability by distinguishing four different types of failures: covariance shift, semantic shift, noise corruption, and adversarial perturbation. In other words, we move from scalar uncertainty towards failure identification. For training the model, we introduce a consistency regularizer that encourages consistency between uncertainty and failure attribution predictions. Moreover, to be able to evaluate the model on its ability to find the reasons for failure, we construct several distribution shift benchmarks with predefined mechanisms for generating distribution shifts.
