---
title: "Algebraic Interaction: A Recipe for Neural Architecture Generation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18649"
authors: ["Haonan Dong, Angelica I Aviles-Rivero"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18649v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

We introduce an algebraic foundation for neural architecture design in which convolution, attention, state-space models, and equivariant layers are expressed through compositions of bilinear product operators over two structures: a position algebra governing positional routing and a feature algebra governing feature interactions. This decomposition makes routing, feature algebra, and operator composition explicit design variables.We focus on the feature-algebra axis through an Algebraic Recipe: fix the routing and operator composition of an existing architecture while replacing its feature algebra. This preserves the information-flow structure while allowing computational and symmetry properties to be modified through algebraic specification.We instantiate the recipe in linear attention, Mamba, and equivariant networks. Structure-constant and Clifford algebras improve accuracy at comparable parameter count in linear attention; structure-constant algebras yield up to $3\times$ faster training and inference in Vision Mamba at competitive accuracy; and an $\mathrm{SO}(3)$-representation algebra provides rotational equivariance by construction. These results demonstrate that feature algebra alone can control accuracy, efficiency, and symmetry without redesigning positional routing.This turns algebraic structure into an explicit design variable and reduces architecture design, within our framework, to algebraic specification.
