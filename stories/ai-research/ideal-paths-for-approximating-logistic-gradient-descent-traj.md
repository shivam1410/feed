---
title: "Ideal Paths for Approximating Logistic Gradient Descent Trajectories at Large Initialization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04142"
authors: ["Junjie Xiao, Huiwen Jia"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.04142v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Modern training on a new task often starts from a previously trained model rather than from scratch, raising the question of how this initialization affects the subsequent training trajectory. Classical implicit-bias results characterize the direction selected by prolonged training, but this direction alone does not provide information regarding the intermediate behavior. We address this question through a geometric approximation of full-batch logistic gradient descent (GD) trajectories on strictly linearly separable data, with large initialization of scale $R$ motivated by prior training. From any limiting normalized initial position, we use minimum-norm projection rules to construct a unique continuous ideal path consisting of finitely many linear segments. The path has two stages: negative-margin correction followed by minimum-margin growth. We prove that, after an explicit two-stage time reparameterization, the fixed-step GD trajectory divided by $R$ converges uniformly to this path on every fixed parameter interval as $R\to\infty$. Further, our quantitative error bounds account for initialization perturbations and the transition between stages. This approximation provides asymptotic formulas for peak evaluation loss and cumulative training loss. In particular, peak evaluation loss can grow linearly in $R$ even when both endpoint losses tend to zero. The cumulative losses in the correction and margin-growth stages, normalized by $R^2$ and $R$, respectively, converge to explicit limits. Experiments on controlled geometries and fixed image features complement our theoretical results.
