---
title: "Learning Fractional-Order Dynamics from a Single Trajectory"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.18127"
authors: ["Xiaole Zhang, Ziyi Zhang, Zehao Zhao, Stephen Tu, Guannan Qu, Yorie Nakahira, Paul Bogdan"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.18127v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.18127v1 Announce Type: new Abstract: Many real-world processes exhibit long-range dependence, where the current state depends on a slowly decaying trace of past states rather than on the most recent state alone. This paper studies system identification for discrete-time fractional-order linear time-invariant systems from a single observed trajectory of length $t$, a setting that captures such non-Markovian dynamics through the Gr\"unwald--Letnikov difference operator. Unlike Markovian systems, fractional-order systems couple estimation across the entire history, making both statistical analysis and practical identification more challenging. We propose \emph{Fractional-Order Ordinary-Least-Squares Grid-Search (FO-GS)}, a simple two-stage estimator that exploits the diagonal structure of the fractional-difference operator to decouple the identification problem row-wise. Under the stability assumption, we establish high-probability, non-asymptotic error bounds for estimating both the fractional order and the system matrix in the heterogeneous setting, with both estimation errors scaling as \(\mathcal{O}(t^{-1/2})\). Through experiments, we show that \emph{FO-GS} outperforms existing baselines in recovering both the fractional order and the underlying system dynamics.
