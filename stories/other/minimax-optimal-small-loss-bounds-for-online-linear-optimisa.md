---
title: "Minimax-Optimal Small-Loss Bounds for Online Linear Optimisation on $\\ell_p$ Balls"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36097"
authors: ["Jack J. Mayo"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36097v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

We study full-information online linear optimisation on the unit $\ell_p$ ball in $\mathbb{R}^d$, for fixed $2\le p<\infty$ and losses of dual norm at most one. Let $\Delta_T$ denote the cumulative loss of the best fixed action above each round's minimum. A follow-the-regularised-leader (FTRL) algorithm attains, on every loss sequence and without knowing $T$ or $\Delta_T$, regret $O_p(1+\min\{\Delta_T^{1-1/p},\, d^{1/2-1/p}\sqrt{\Delta_T}\})$. Matching lower bounds show that this rate is minimax for each fixed $p$, and its constant $(2+o(1))p/\log p$ is optimal as $p\to\infty$ among guarantees uniform in $d$ and $T$. The algorithm uses a bounded radial regulariser and switches at most once to its quadratic augmentation. On some paths where follow-the-leader (FTL) has regret one, its regret grows with $T$. A switching extension keeps the sharp constant and also guarantees $\mathrm{Reg}_T\le 2\,\mathrm{Reg}_T^{\mathrm{FTL}}$. For i.i.d. losses whose mean has no zero coordinates, we compute the exact $\log T$ coefficient of the expected regret, which separates FTL's variance term from the bias of the regulariser.
