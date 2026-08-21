---
title: "Multi-Source Wasserstein Distributionally Robust Graph Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.19914"
authors: ["Chuansen Peng, Yifan Xia, Jinshan Zhong, Xiaojing Shen"]
date: "Fri, 21 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.19914v1"
image: ""
generated: "2026-08-21T19:00:17+05:30"
---

arXiv:2608.19914v1 Announce Type: new Abstract: Network topology inference from graph signals is central to graph signal processing with applications in neuroscience, sensor, and social networks. In practice, target-domain samples are scarce while heterogeneous source-domain data are abundant. Fusing these sources is challenging: Euclidean averaging works for homogeneous sources but degrades sharply as inter-source divergence grows, collapsing distinct geometries into an inflated, biased consensus. We exploit the Wasserstein metric's distribution-preserving properties to counter heterogeneity while preserving each source's intrinsic geometry. We propose MS-WDRO, a multi-source Wasserstein distributionally robust graph learning framework that fuses heterogeneous sources via their weighted Wasserstein barycenter, a geometrically principled nominal distribution, then builds an ambiguity ball around it to hedge residual uncertainty. Minimizing worst-case risk yields a tractable regularized Laplacian estimator solved efficiently via a provably convergent ADMM scheme. We establish non-asymptotic guarantees: a finite-sample concentration bound for the empirical barycenter, a pooling bias lower bound proving naive aggregation is suboptimal, and an out-of-sample excess risk bound decaying at a parametric rate with only logarithmic dependence on source count. To calibrate hyperparameters governing robustness, sparsity, and source fusion, we unroll the solver into a differentiable architecture trained end-to-end, achieving data-adaptive calibration beyond cross-validation while retaining interpretability. Experiments on synthetic benchmarks and the multi-site ABIDE~I neuroimaging dataset show MS-WDRO consistently outperforms seven baselines in graph recovery, sample efficiency, and downstream diagnostic utility, with the largest gains in the sample-scarce regime.
