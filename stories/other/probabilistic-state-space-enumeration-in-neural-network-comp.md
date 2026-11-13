---
title: "Probabilistic State Space Enumeration in Neural Network Computation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15062"
authors: ["Victor O. K. Li, Yang Han, Jacqueline C. K. Lam"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15062v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Deep neural networks typically realize dense computation by propagating information through all intermediate channels, while many approximation methods rank and retain individual computational components. We ask whether dense neural computation can instead be represented exactly as an expectation over a combinatorial state space, and approximated by evaluating only its most probable configurations. We introduce a novel probabilistic state-space framework for Transformer MLPs. The framework partitions the intermediate dimension into channel groups, defines an input-dependent distribution over binary inclusion states, and uses importance-corrected masked outputs such that the full expectation exactly recovers the dense MLP output. The key algorithmic novelty is NORDER-II, which enumerates complete joint states in decreasing probability without constructing or sorting the exponentially large state space. Truncating this ordering yields an anytime approximation governed by cumulative probability mass and a state budget. On Llama-3.2-1B and Gemma-2-2B, NORDER-II at a state budget of B=2048 achieves 92.4% and 93.8% MLP-output approximation accuracy, compared with 76.9% and 79.8% for Channel Top-k. When the first, middle, and last MLP layers are approximated jointly, WikiText-2 perplexity remains within 0.06% and 0.54% of dense inference. Relative to expected-count Grouped Top-k, NORDER-II yields 82.6% to 126.4% relative accuracy gains with only 0.18% to 0.19% additional local analytic FLOPs. These results establish the significance of joint-state structure beyond atomic salience and point to a new paradigm for neural computation: dense layers can be viewed as structured probabilistic inference over combinatorial computational states. This framework opens a path toward adaptive, probability-mass-controlled computation in pretrained neural networks.
