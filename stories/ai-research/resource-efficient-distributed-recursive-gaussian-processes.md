---
title: "Resource-Efficient Distributed Recursive Gaussian Processes"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.26979"
authors: ["Josephine King, Ali Emre Balci, Raj Thilak Rajan"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2609.26979v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.26979v1 Announce Type: new Abstract: Gaussian processes (GPs) provide a flexible framework for learning unknown functions from noisy measurements while quantifying predictive uncertainty, making them well suited for estimation in multi-agent systems. However, when measurements are collected by multiple agents, maintaining a unified GP model without centralized processing requires efficient distributed algorithms that can operate using local measurements and communication with neighboring agents. In this work, we develop two distributed recursive GP (RGP) algorithms for multi-output GP regression: ADMM-RGP and PDMM-RGP. We analyze the stability and convergence of both algorithms and develop parameter selection strategies to accelerate convergence, thus reducing the communication burden. The proposed methods are validated on a real-world multi-output wind dataset, and their convergence behavior is examined across communication graphs with varying connectivity. Numerical experiments demonstrate that ADMM-RGP and PDMM-RGP can significantly reduce communication relative to the state of the art, while maintaining comparable estimation accuracy and network-wide consensus.
