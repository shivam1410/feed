---
title: "Automorphism-Induced Non-Canonicity in Top-k Explanations of Graph Neural Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26344"
authors: ["Xin Xu, Siru Tao, Kaizhen Tan"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 61
guid: "oai:arXiv.org:2607.26344v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

arXiv:2607.26344v1 Announce Type: new Abstract: A gradient-based GNN explainer given a molecule with two chemically equivalent nitro groups assigns them attribution scores that are equal to the last bit. It cannot do otherwise: message passing is exactly permutation equivariant, so any automorphism of the input leaves every attribution invariant. Yet the standard report, the top-k edges, names one of the two, and which one is settled by the order of an array. We show this is a structural obstruction rather than an implementation slip. When no minimal valid explanation is fixed by the input's automorphism group, no rule can be single-valued, minimal and symmetry-respecting at once. For the exact-k reports used in practice we give a parameter-free criterion, mechanised in Lean 4 with no axiom dependencies, that decides from the graph alone whether every score-optimal report of that size must split an orbit. Across 21298 instance-budget decisions the criterion agrees with a mechanical model-equivalence check without exception, and no severing case we found admitted a neutral alternative. The obstruction is common. Nontrivial automorphisms occur in 93.4% of Mutagenicity, the dataset the seminal explainability papers use, so the measure-zero dismissal of symmetric inputs, sound on the continuous domains it was made for, collapses here. At the sparsity budget those papers report, 24.0% of molecules with two interchangeable nitro groups (6 of 25) surface exactly one of them, every one arbitrary under mechanical verification. A model's blindness also manufactures symmetry: every MUTAG molecule contains atoms chemistry separates and the network provably cannot, and a matched control shows the resolution is set by what the model reads rather than how it is parameterised. Reporting orbits removes the arbitrariness at 0.11 ms and 0.43 extra edges per graph.
