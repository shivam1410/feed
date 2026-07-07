---
title: "In-span learning: adapting reduced-order models using their own predictions"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.02937"
authors: ["Amirpasha Hedayat, Laura Balzano, Karthik Duraisamy"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.02937v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.02937v1 Announce Type: new Abstract: Reduced-order models compress high-dimensional dynamics into low-dimensional representations that can be evaluated rapidly, but they lose accuracy when online dynamics drift beyond the training data. Adaptive methods address this by updating the subspace online with external, out-of-span information, such as full-order corrections or sensor snapshots. We discovered that a complementary and previously unexploited in-span adaptation channel exists within the current reduced subspace. By streaming the model's own predictions through an incremental singular-value decomposition with forgetting, we obtain a trajectory-informed spectral preconditioner, in which the subspace is unchanged but the basis is reweighted and realigned toward the modes visited by the dynamics. This enables the model to absorb future out-of-span corrections more effectively. We expose aspects of this mechanism on a three-dimensional spiral and confirm it on viscous Burgers and Fisher-KPP dynamics. We also discuss how in-span learning can be viewed as a dynamical-systems analogue of in-context learning. More broadly, in-span learning suggests a new principle for computational science, revealing that model-generated trajectories contain more usable information than previously recognized.
