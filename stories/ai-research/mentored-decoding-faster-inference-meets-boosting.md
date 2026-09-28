---
title: "Mentored Decoding: Faster Inference meets Boosting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30474"
authors: ["Vivien Tran-Thien, Richard Nock"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.30474v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Speculative decoding is a successful technique speeding up inference of a target autoregressive language model via a fast drafter model. Lossy speculative decoding allows a drift with respect to the target to further improve speed. Interestingly, it has been observed experimentally that the resulting model can $\textit{also}$ beat the target $\textit{quality-wise}$. Our paper formally proves how such a feat is possible with a formal approach to lossy speculative decoding called $\textit{mentored decoding}$. To get there, we connect inference to a celebrated ML training theory, $\textit{boosting}$, and proceed via the generalization of mentored decoding to the whole set of $f$-divergences. We uncover key properties of mentored decoding, among which (i) the particularly appealing geometric nature of the total variation case, (ii) simple approximations for any $f$-divergence in direct relation with boosting compliance, and (iii) a $\textit{divergence independent}$ $O(n)$ space and $O(\mathrm{sort}(n))$ time data structure built on drafter and target outputs, which allows to query the optimal parameters of the dual problem in $O(\log n)$ time and constructing optimal mentored distributions in $O(n)$ time for any $f$-divergence.
