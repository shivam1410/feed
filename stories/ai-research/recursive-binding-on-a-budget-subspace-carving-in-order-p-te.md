---
title: "Recursive Binding on a Budget: Subspace Carving in Order-p Tensor Memories"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11391"
authors: ["Travis Pence, Daisuke Yamada, Vikas Singh"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2606.11391v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11391v1 Announce Type: new Abstract: Tensor Product Representations provide the structural fidelity required for symbolic reasoning in models but suffer from exponential dimensionality growth when encoding deep recursive structures. Conversely, Vector Symbolic Architectures maintain constant dimensionality but sacrifice capacity and fidelity due to noisy compression via superposition. In this work, we propose Orthogonal Subspace Carving (OSC), a memory architecture that binds fillers to roles by projecting onto the null space of the role basis before aggregating into a fixed order-p tensor. OSC uses projections to enforce geometric orthogonality between bound structures within a static memory trace. We show that this mechanism decouples the tensor order from the structural depth, enabling deep recursive binding within a constant memory footprint. By performing retrieval via recognition, this construction allows for component vectors that are orders of magnitude smaller than the memory tensor, giving superior memory efficiency in settings involving high superposition. We also show that TPR is a special case of binding in Clifford algebra, and give a Clifford formulation of OSC.
