---
title: "One-Step Curvature Probes Miss the Fitting Operator: Retained Capacity and Terminal Null-Space Correction for Continual Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.03952"
authors: ["Abu Sa-Adat Mohamed Moon-Im Al Ahsan, Ibne Farabi Shihab, Md Najmus Swaqeeb"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.03952v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

A one-step curvature probe evaluates an initial direction, whereas continual learners are judged after reaching comparable new-task fit. In an overparameterized linearization, projected gradient descent converges to $\Delta_P=PJ^\top(JPJ^\top)^{-1}r$, and its squared-displacement inflation is exactly the reciprocal of the retained fitting capacity $c_P(r)$. More generally, the terminal old-task quadratic ratio factorizes as $1/[c_P(r)G_{\rm end}(P,r)]$, where $G_{\rm end}$ compares curvature along endpoint directions. In the rank-one case, $G_{\rm end}$ equals the one-step probe gain; for multiple outputs, the two gains can differ. The terminal quadratic also separates into a curvature-optimal fitting floor and an algorithm-dependent null-space excess, motivating terminal null-space correction, which preserves linearized new-task outputs on its Jacobian batch. Controlled checks validate the local quadratic and show that projection can greatly reduce matched-norm curvature while barely changing terminal forgetting. Across common-threshold configurations, projection yields the larger signed old-task loss change in 73/99 matched pairs, retained fitting capacity falls with rank, and fixed-rank comparisons separate terminal forgetting even when probe gain is approximately matched. On Permuted MNIST and Split CIFAR-100, terminal correction decreases signed old-task loss in 166/180 method--dataset--seed pairs under the all-seed intention-to-correct analysis; because acceptance and outcome reporting use the same held-out split, this result is descriptive and test-conditioned. Overall, terminal cost depends jointly on retained fitting capacity, endpoint-direction curvature, and the null-space component selected by optimization.
