---
title: "Online Non-Monotone DR-Submodular Maximization Matching the Offline $0.401$ Factor"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.02145"
authors: ["Vaneet Aggarwal, Yiyang Lu"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.02145v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.02145v1 Announce Type: new Abstract: We study online maximization of nonnegative, non-monotone DR-submodular functions over compact convex down-closed subsets of the $d$-dimensional unit cube. The best known constructive offline approximation factor is $0.401$ under the corresponding meta-solvability assumptions, whereas comparable adversarial online guarantees had remained at $1/e$. We show that this factor is also achievable online. In the post-decision full-information value-oracle model, our algorithm attains factor $0.401$ with sublinear approximate regret when oracle feedback is conditionally unbiased and bounded. The online algorithm does not run the offline construction on a changing objective. Instead, it replaces the offline objective-dependent box step by a weighted online learner that controls the required residual terms cumulatively. An exact asymmetric balance theorem preserves the offline coefficients despite adversarial variation. The direct implementation has $O(T^{3/4})$ regret and uses $O(dT^{1/4})$ oracle calls per round. More generally, for every $\delta\in[0,1/4]$, batching gives $O(T^\delta)$ calls per round and $O(T^{4/5-\delta/5})$ regret, including a one-call $O(T^{4/5})$ endpoint. Under a positive-anchor condition, randomized blocking retains factor $0.401$ with $O(T^{5/6})$ one-point bandit regret.
