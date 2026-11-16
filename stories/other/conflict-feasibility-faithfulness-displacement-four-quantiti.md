---
title: "Conflict, Feasibility, Faithfulness, Displacement: Four Quantities That Come Apart in Federated Dual-Cone Aggregation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18014"
authors: ["Grzegorz Gwardys, Karol Wojciechowski, Mateusz Gwardys, Bartosz {\\'S}widerski"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18014v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

FedFV, FedGH and FedMGDA+ aggregate client updates with multi-objective gradient aggregators to remove conflict between them. We examine this rationale with UPGrad, which increases no client's loss to first order, in a comparison that changes only the direction of FedAvg's update. Four quantities the rationale treats as one -- conflict between client updates, feasibility of their weighted mean, faithfulness of the transmitted updates to the clients' gradients, and displacement of the update -- come apart. Under Dirichlet partitioning UPGrad improves CIFAR-10 accuracy by +0.78 pp (14/15 seeds, p < 0.001), only with full participation; on Oxford-IIIT Pet its +0.52 pp gain vanishes (+0.07 pp) once the data our protocol left unused are kept. Varying only the Dirichlet concentration, the gain grows with heterogeneity, yet the split with the most conflict shows none. Uniform client weights, blind to conflict, match the CIFAR-10 gain and exceed the Pets gain; a matched random rotation does neither. No fairness effect survives multiplicity correction, and on CIFAR-10 the guarantee does not reach the clients' gradients. We state what evaluations should report.
