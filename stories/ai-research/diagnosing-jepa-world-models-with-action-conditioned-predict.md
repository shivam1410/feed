---
title: "Diagnosing JEPA World Models with Action-Conditioned Predictive Consistency"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.12939"
authors: ["Guo An, Zijing Wu, Honghua Dong, Yuhao Yan, Zixuan Gui, Haochong Chen, Shanzhao Ruan, Xiang Wang, Yurong Ling, Qi Tian"]
date: "Fri, 14 Aug 2026 00:00:00 -0400"
score: 71
guid: "oai:arXiv.org:2608.12939v1"
image: ""
generated: "2026-08-14T19:05:44+05:30"
---

arXiv:2608.12939v1 Announce Type: new Abstract: Joint-embedding predictive architectures (JEPAs) learn world models that predict in a compact latent space rather than in pixels, reducing the pressure to model nuisance appearance. Yet this provides no guarantee against visual perturbations: they can still alter the encoded representation and affect subsequent action-conditioned predictions. Bisimulation captures this requirement precisely: two observations should be treated as the same state only when their action-conditioned consequences agree. Guided by this criterion, we introduce Action-Conditioned Predictive Consistency (ACPC), a diagnostic that measures how far a clean history and a visually perturbed view of it diverge after being rolled forward under the same action sequence. We prove that this divergence bounds the perturbation-induced change in multi-step prediction error and planner cost. Building on pairwise ACPC, we define two complementary measures: the Invariance Radius (IR) summarizes clean-perturbed rollout spread, while the Separation Rate (SR) checks whether different states remain distinguishable after rollout. Experiments on four visual control tasks show that pairwise ACPC predicts perturbation-induced prediction and cost changes. On LeWM, the IR-SR screen transfers across tasks, and the joint diagnostic remains informative under blur and resize. PLDM exhibits similar diagnostic trends under a different architecture.
