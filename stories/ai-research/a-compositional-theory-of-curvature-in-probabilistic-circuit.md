---
title: "A Compositional Theory of Curvature in Probabilistic Circuits"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.12869"
authors: ["Hrithik Suresh, Sahil Sidheekh, Shelar Parth Vijay, Yasir Z, Sriraam Natarajan, Narayanan Chatapuram Krishnan"]
date: "Fri, 14 Aug 2026 00:00:00 -0400"
score: 66
guid: "oai:arXiv.org:2608.12869v1"
image: ""
generated: "2026-08-14T19:05:44+05:30"
---

arXiv:2608.12869v1 Announce Type: new Abstract: Probabilistic Circuits (PCs) are generative models that support exact inference and, unlike deep neural networks, admit an exact and tractable measure of loss-surface curvature: the trace of the Hessian of the log-likelihood. Recent work regularizes this trace globally to bias learning toward flatter, better generalizing optima. We show that treating sharpness as a global regularizer can be misspecified for PCs, whose curvature is inherently compositional. We prove that each sum node's contribution to the Hessian trace factorizes exactly into its circuit flow, which measures how heavily the node is used, and a local sharpness term determined by its output distribution. This decomposition provides insights into why global sharpness regularization is depth biased and can lead to underfitting. Building on it, we introduce an adaptive sharpness aware regularizer that penalizes nodes based on intrinsic local curvature and preserves closed form EM updates. We also show that empirically, this targeted regularization recovers the generalization that global regularization sacrifices while retaining the robustness and benefits of sharpness aware learning.
