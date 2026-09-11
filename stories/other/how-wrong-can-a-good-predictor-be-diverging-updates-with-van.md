---
title: "How Wrong Can a Good Predictor Be? Diverging Updates with Vanishing Predictive KL"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.11132"
authors: ["Qifu Wen, Shuaijun Liu, Zihan Zhou, Xi Zeng, Ningxin Su"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.11132v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.11132v1 Announce Type: new Abstract: Accurate posterior prediction need not require accurate approximation of Bayesian updates. We prove that an unbounded gap between the update maps can coexist with vanishing predictive KL for every fixed finite $K\ge2$ in a stationary symmetric Gaussian HMM. Exact Bayesian mixing and an explicit deterministic radial filter act on the same $K-1$ belief coordinates. As $q\to0^+$, their separation in centered logits in the worst case grows at least linearly in the natural confidence scale $L_K(q)$, while their categorical $D_{\mathrm{KL}}(\mathrm{exact}\|\mathrm{radial})$ vanishes at the same explicit witness. Along stationary HMM trajectories, the expected terminal KL between filtered posteriors also converges to zero at $H(q)=\lceil-\log(q)/c\rceil+1$. Typical blocks without switches drive both filters into a common confidence cone, where softmax curvature suppresses their disagreement; a single Gaussian maximal event controls adaptive noise. A sweep with equally spaced Gaussians over $K\in\{2,4,8\}$ illustrates the opposing trends, and binary controls at long horizons compare saturating and nonsaturating recurrences. The result isolates two missing links between internal update gaps and predictive cost: the contribution of separating states to expected loss and decoder sensitivity. Thus even an unbounded internal update gap does not by itself certify predictive failure. The construction is fixed in $K$ and does not provide a universal criterion for when compression is harmless or characterize when internal gaps must incur task loss.
