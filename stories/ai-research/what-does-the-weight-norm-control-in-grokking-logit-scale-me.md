---
title: "What Does the Weight Norm Control in Grokking? Logit-Scale Mediation under Cross-Entropy"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18465"
authors: ["Truong Xuan Khanh"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 63
guid: "oai:arXiv.org:2606.18465v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18465v1 Announce Type: new Abstract: Grokking, the delayed jump from memorization to generalization, is usually tied to the weight norm: a smaller norm generalizes sooner. We ask what the norm actually controls. Holding the weight norm fixed by clamping and varying only an output temperature, we slide the grokking delay across its entire norm-induced range under cross-entropy; matching the effective logit scale back to baseline recovers about 85% of the delay at two moduli. Across a grid of norms and temperatures the delay collapses onto the logit scale alone (R2 = 0.97), with the norm adding 1-2% beyond it. The effect is loss-dependent: under mean-squared error the logit scale is pinned and the norm acts through a different route. A memorization control, a float64 softmax-collapse audit, and a no-LayerNorm transformer point to the same channel. Forking arms from one identical state, the delay follows the held norm value and not the clamp operation, which closes a rescaling-artifact concern. The proximal variable is the logit scale and the softmax saturation it drives; the weight norm is only an upstream handle. All numbers, tables, and figures reproduce from released code and data.
