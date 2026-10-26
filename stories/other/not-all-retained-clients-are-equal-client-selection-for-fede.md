---
title: "Not All Retained Clients Are Equal: Client Selection for Federated Unlearning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.31786"
authors: ["Thanh Linh Nguyen, Quoc-Viet Pham"]
date: "Mon, 26 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.31786v1"
image: ""
generated: "2026-10-26T19:00:28+05:30"
---

Federated unlearning (FU) aims to remove a designated target client's influence from a trained model without the prohibitive cost of retraining from scratch. Existing methods largely treat unlearning as a post-hoc, stateless operation, overlooking that client influence is path-dependent: contributions made during training, particularly during critical learning periods (CLPs), can have disproportionate and persistent effects. Moreover, knowledge overlap and intermittent client availability make relying on all retained clients inefficient and impractical. We introduce PDF, a path-dependent client-selection framework based on the insight that retained clients are not equally valuable for unlearning. During training, PDF maintains lightweight, target-agnostic, CLP-weighted histories summarizing each client's accumulated update direction and global-model alignment. Upon an unlearning request, these histories identify and rank retained clients that are globally informative yet weakly coupled to the target, enabling retraining-based unlearning with only the top-$k$ clients over a small number of rounds. Experiments on FMNIST, CIFAR-10, and CIFAR-100 under IID and non-IID settings show that PDF achieves effective forgetting and strong retained utility with substantially fewer retained clients. In particular, PDF achieves $0\%$ forgetting accuracy with retraining-like MIA AUC on non-IID CIFAR-10, improves retained accuracy by up to $6.91$ percentage points over the strongest competing FU baseline on CIFAR-100, and reduces communication by approximately $69\%$ and computation by $57$--$61\%$ relative to Retrain.
