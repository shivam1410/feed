---
title: "On Hamming-Lipschitz Type Stability of the Subdominant (Minmax) Ultrametric: Theory and Simple Proofs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.04014"
authors: ["Alokendu Mazumder, Arnab Roy, Punit Rathore"]
date: "Thu, 06 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.04014v1"
image: ""
generated: "2026-08-06T19:05:18+05:30"
---

arXiv:2608.04014v1 Announce Type: new Abstract: The subdominant (minmax) ultrametric is a canonical tree-structured summary of a dissimilarity matrix, arising equivalently as the ultrametric induced by single-linkage clustering. While its classical stability theory is usually formulated in $\ell_\infty$ or Gromov--Hausdorff terms, such bounds are poorly suited to sparse perturbations that alter only a few pairwise distances. We develop an $\ell_0$-type stability theory for this operator. Our analysis shows that sparse edits propagate only through the minimum spanning tree (MST): a pairwise ultrametric value can change only if its tree path crosses an edited edge or a cut newly exposed by an edited off-tree edge. This yields a sharp per-edit exposed-cut score and a tree-only global envelope, leading to Hamming--Lipschitz bounds on the number of ultrametric entries that can change. We also prove sharpness results showing that this dependence on tree geometry is unavoidable: under strict cut separation the tree-edge bound is attained exactly, and for off-tree edits there are explicit families in which one edited distance changes $\Theta(n^2)$ ultrametric entries. In addition, we prove a conditional near-additivity principle for multiple edits under certified large per-edit changed regions and negligible aggregate overlap. Experiments on deep-embedding graphs show that the resulting structural scores provide useful vulnerability diagnostics for hierarchical representations.
