---
title: "Representation Redundancy and Structural Complexity in Finite-Field Inversion"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04583"
authors: ["Zheng Zhang, Na Zhang"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.04583v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04583v1 Announce Type: new Abstract: The representation chosen for a mathematical operation can affect both its algebraic form and its empirical learning difficulty. We study this phenomenon for inversion over \(\mathbb F_{2^n}\), with field elements expressed in varying ordered \(\mathbb F_2\)-bases. We prove that two ordered bases induce the same coordinate inversion map if and only if they belong to the same Galois orbit. Since every orbit has size \(n\), the correspondence between ordered bases and distinct inversion maps is exactly \(n\)-to-one. We then analyze three Boolean formulations of inversion. The reference formulation has algebraic degree \(n-1\) and joint ANF leap \(1\), the mixed representation formulation has degree \(2(n-1)\) and joint ANF leap \(2\), and the complete raw formulation has degree at most \(3(n-1)\) and joint ANF leap at least \(n\). Exhaustive computations agree with the theoretical results and bounds in the cases considered. Controlled experiments with multilayer perceptrons show the same ordering in learning difficulty, while Galois orbit redundancy provides only a limited generalization benefit under the tested conditions. These results show that exact redundancy among representations can coexist with changes in Boolean structure and learning behavior when the representation is exposed as part of the input.
