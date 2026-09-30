---
title: "Symmetry-quotient Flatness and Generalization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31634"
authors: ["Taiki Miyagawa"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.31634v1"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

This paper develops a theorem-level pipeline in symmetry-quotient settings: quotient linear stability implies quotient flatness, quotient flatness implies input smoothness, and input smoothness yields generalization under local covering assumptions. Flatness is often associated with generalization, and Stochastic Gradient Descent (SGD) is frequently viewed as implicitly biased toward flat solutions. However, standard flatness measures are typically defined in the raw parameter space and are therefore not invariant under function-preserving symmetries such as positive rescaling. We develop a symmetry-aware theory of quotient flatness, quotient linear stability, input smoothness, and generalization on quotient spaces of neural-network parameters. For square loss and models equipped with function-preserving group actions, we define quotient flatness as the trace of the Hessian of the empirical loss on the regular quotient manifold. We show that quotient flatness controls input smoothness through a quotient-space analogue of the flatness-to-smoothness argument. We also prove that one-step mean-square quotient linear stability of the linearized SGD dynamics implies an explicit quotient-flatness bound in terms of the batch size and learning rate, and extend this analysis to higher-order tensor moments. Finally, under local covering and boundedness assumptions, we derive population generalization bounds in terms of quotient flatness and, consequently, in terms of quotient linear stability.
