---
title: "On Reparameterizing the Score Function"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24188"
authors: ["Mohammad Hossein Amani, Leonardo Bocchieri, Maxime Peyrard, Cl\\'ement Hongler, Robert West"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.24188v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Policy gradients for autoregressive sequence models differentiate each token's log-probability while holding the conditioning history fixed. This discards information about how earlier decisions shape later conditional distributions, creating a credit-assignment bottleneck when rewards are sparse. We introduce History-Reparameterized (HR) policy gradients, which replace the frozen prefix in the score function with a differentiable reparameterized or relaxed history, allowing gradients of downstream log-probabilities to propagate backward through the generated trajectory. The resulting history-pathwise term is generally biased when added directly, so we derive Optimal HR (OHR), a centered control-variate estimator with a closed-form coefficient that minimizes the trace of the gradient variance at the population level. The variance reduction is governed by temporal structure in the policy dynamics: random or weakly structured policies provide little benefit, while policies with learned sequential dependencies yield informative history-pathwise corrections. For discrete tokens, the choice of relaxation is crucial: embedding-level relaxation yields substantial variance reduction that grows with horizon, whereas straight-through Gumbel-Softmax yields essentially none in our diagnostics. We validate the method on a Gaussian linear Markov model, a sparse-reward T-maze with a recurrent policy, and an autoregressive Transformer model for small Traveling Salesman Problem (TSP) instances.
