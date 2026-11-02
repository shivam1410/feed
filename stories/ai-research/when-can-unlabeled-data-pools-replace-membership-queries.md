---
title: "When Can Unlabeled Data Pools Replace Membership Queries?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.41001"
authors: ["Dravyansh Sharma"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 15
guid: "oai:arXiv.org:2610.41001v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Membership queries let a learner label arbitrary points and give near-optimal $\tilde O(n\log(1/\eps))$ label complexity for halfspaces under every marginal. A pool learner may label only sampled points. We ask when unlabeled data can replace membership queries. For homogeneous halfspaces the answer depends only on the angular law of $X/\|X\|$. If this law assigns zero mass to every hyperplane through the origin and positive mass to every nonempty open set of directions together with its reflection, a pool learner uses $O(n\log^3n\log(n/(\eps\delta)))$ labels, uniformly over all such marginals and targets, without density, moment, concavity or isotropy assumptions. The same label bound holds for non-homogeneous halfspaces under every marginal with full support and no mass on affine hyperplanes, including Gaussians. Dropping either angular assumption admits $\Omega(1/\eps)$ pool versus $O(\log(1/\eps))$ membership-query separations, even with unlimited unlabeled data. The price is paid in unlabeled data: in dimension $n\ge3$, for every unlabeled budget fixed in advance, some marginal satisfying both assumptions forces $\Omega(1/\eps)$ labels. For isotropic $s$-concave marginals in dimension $n\ge3$, unlimited pools keep logarithmic label rates for every finite $s$. With an unlabeled budget fixed in advance, class-uniform polylogarithmic rates hold exactly for $s>-1/(n+1)$, or $s>-1/n$ under central symmetry, and in the general class the optimal rate between these thresholds is $\tilde\Theta(\eps^{-(n-2)/n})$. This extends the range $s\ge-1/(2n+3)$ of previous sample-based guarantees, in the realizable setting.
