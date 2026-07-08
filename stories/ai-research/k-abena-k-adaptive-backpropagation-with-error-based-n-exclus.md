---
title: "K-ABENA: K-Adaptive Backpropagation with Error-based N-exclusion Algorithm : (Compensated Loss-Based Sample Exclusion with Unbiased Gradient Estimation)"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05903"
authors: ["Jean-Francois Bonbhel"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2607.05903v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05903v1 Announce Type: new Abstract: We present K-ABENA (K-Adaptive Backpropagation with Error-based N-exclusion Algorithm), a selective gradient computation framework that reduces per-iteration training cost by excluding a fraction of low-loss ("minor") observations from the backward pass. Its canonical form (v3) combines a defensive-mixture sampling design over the minor set with Horvitz-Thompson inverse-probability reweighting, yielding a design-unbiased Horvitz-Thompson gradient estimator (Lemma 2) and whose self-normalized practical variant carries a bias of order O(1/m) with an explicit constant (Lemma 3). We prove an O(1/sqrt(T)) non-convex convergence guarantee for SGD under the estimator, with an additive term that quantifies the residual bias (Theorem 1). We further prove that uncompensated loss-based selection - a family that includes OHEM, SBP, and the two earlier K-ABENA variants - admits no stationary point at any minimizer where its selection bias is bounded away from zero (Proposition 2), and we quantify this failure empirically: at 0.17% class imbalance, uncompensated variants reach test AUC 0.53-0.62 versus 0.9998 for full-batch SGD, while the compensated estimator attains 0.9991 at identical 28.4% compute savings. On real datasets (Breast Cancer, Digits, Wine, Diabetes) the compensated estimator is statistically indistinguishable from full-batch SGD (paired permutation tests, p >= 0.5; Section 7) while saving 28-54% of per-epoch gradient computation. A biased "regularized mode" (the earlier half-domain variant) is retained as an option with a proven exact bias decomposition (Lemma 5) and quantified contraindications: it collapses to 0.386 accuracy under 40% label noise (baseline: 0.832) and to 0.53 AUC under extreme imbalance. Every advantage and every limitation reported in this paper is either proved or measured; all experiments are CPU-scale (NumPy/scikit-learn) and their scope is stated explicitly.
