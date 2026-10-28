---
title: "What Should an Information Bottleneck Encoder Learn? Separating Representation Learning from Rate Control"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36255"
authors: ["Hassan Tavakoli, Bella Bose"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36255v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

The information bottleneck (IB) trades compression of an input $X$ against prediction of a target $Y$ through a multiplier $\beta=1/\lambda$, yet each operating point is usually served by training, or fully conditioning, a new encoder. For jointly Gaussian data, we show that the IB solution factorizes as $A(\beta)=D(\beta)W$: the information-bearing directions $W$ do not depend on $\beta$, and $\beta$ acts only through scalar gains. We ask whether this separation of \emph{representation} from \emph{rate control} survives beyond Gaussian models, treating the budget as a given operating parameter rather than a quantity to be optimized. For a budget-free representation \(F(X)\), the \emph{separation gap} is controlled by the \emph{sufficiency deficit} $\epsilon_F=I(X;Y\mid F(X))$: We show there is at least $\epsilon_F$ in the worst case for finite inputs, and it is bounded uniformly in $\lambda$ by a function of $\epsilon_F$ for finite label alphabets. The same certificate extends to a new target distribution and to pooled multi-domain data, where a conditional-alignment term appears. On MNIST, SVHN, CIFAR-10 and STL-10 (10 seeds, eight prespecified budgets), a frozen CNN representation with one compressor--decoder pair per budget reduces estimated training multiply--accumulate operations (MACs) by $7.7\times$ and wall-clock time by about $2\times$ relative to end-to-end VIBs, and attains higher budget-averaged accuracy ($65.6\%$ versus $57.3\%$ per domain; $67.1\%$ versus $57.1\%$ pooled), with the advantage concentrated at strong compression, where the VIBs collapse. At weak compression ($\lambda\le0.036$), VIB has higher cross-entropy and ECE; its surrogate Lagrangian is higher per domain, indistinguishable from the pooled VIB in the macro average, and lower on the pooled test set.
