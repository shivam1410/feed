---
title: "Data-Driven Pinball-Loss Selection for Vertically Distributed Elastic-Net SVMs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00949"
authors: ["Xiaofei Wu, Kai Qi, Rongmei Liang"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.00949v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00949v1 Announce Type: new Abstract: The pinball-loss support vector machine is robust, but its asymmetry parameter is usually fixed in advance. We propose a data-driven elastic-net support vector machine that learns simplex-constrained weights over candidate pinball losses while retaining one classifier. The weighted loss is equivalent to a pinball loss with a data-dependent effective parameter. An empirical oracle inequality shows that, when weight regularization and simplex truncation vanish, the classifier objective at a global minimizer does not exceed that of the best fixed candidate; otherwise, the excess is explicitly bounded. For high-dimensional data, we develop a column-partitioned variable-splitting solver. It converges with a best-iterate $O(1/T)$ squared-step residual rate. Under common initialization and global parameters, any column partition produces, in exact arithmetic, the same iterates and solution as centralized training. Experiments assess predictive behavior, numerical equivalence, and multi-process scalability.
