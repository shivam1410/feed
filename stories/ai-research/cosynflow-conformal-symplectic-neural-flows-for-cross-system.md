---
title: "CoSynFlow: Conformal Symplectic Neural Flows for Cross-System Prediction of Dissipative Hamiltonian Dynamics"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00571"
authors: ["Baige Xu, Takaharu Yaguchi"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2608.00571v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00571v1 Announce Type: new Abstract: Learning solution operators for differential equations is a central problem in scientific machine learning. However, many neural operator methods optimize prediction accuracy without explicitly enforcing the geometric structure of the dynamics. Structure-preserving models such as SympNets and Symplectic Neural Flows address this issue for conservative Hamiltonian systems by preserving the symplectic form. In dissipative Hamiltonian systems with conformal symplectic structure, however, the symplectic form evolves according to a conformal factor determined by the dissipation. We propose CoSynFlow, a conformal symplectic neural flow for learning continuous-time solution maps of dissipative Hamiltonian dynamics. CoSynFlow composes symplectic shear maps with explicit conformal scaling, preserving the conformal symplectic structure by construction. By conditioning it on a finite-dimensional Hamiltonian descriptor and the dissipation parameter, a single trained model predicts solution maps for unseen systems without retraining. CoSynFlow keeps the structure error at machine precision, attains the lowest long-horizon error, and admits physics-informed training.
