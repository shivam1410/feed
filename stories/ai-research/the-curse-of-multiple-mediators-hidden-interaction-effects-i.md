---
title: "The Curse of Multiple Mediators: Hidden Interaction Effects in Activation Patching"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27510"
authors: ["Sankaran Vaidyanathan, David Arbour, Aaron Mueller, Scott Niekum, David Jensen"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2606.27510v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27510v1 Announce Type: new Abstract: Activation patching is the primary tool in mechanistic interpretability. It attributes causal responsibility for a model behavior to each of its individual components by estimating its natural indirect effect (NIE). Re-deriving the activation patching estimand from causal mediation analysis, we find that the NIE does not solely capture the causal effect through the specific component. It also contains interaction effects (INT) that measure how much the component's causal effect itself depends on the state of other components in the model. A natural response may be to try to eliminate INT by adjusting the estimator or unit of analysis, but each of these potential remedies has predictable failure modes. We demonstrate these failure modes in the GPT-2 IOI circuit; components whose causal importance is conditional on the state of other components are either invisible or artificially inflated, and INT variance explains the previously documented instability of faithfulness scores. We prove that INT scales with the distance between clean and patched component activations, is negligible when the model is locally affine, and decomposes combinatorially into pairwise and higher-order group interactions. Despite its inevitability, INT is not a nuisance to be eliminated, but rather a diagnostic for interpretability studies. Its individual and group-level magnitude and sign signal when causal conclusions are prompt-dependent, and when greedy NIE-based component ranking will miss mechanisms only discoverable through combinatorial search.
