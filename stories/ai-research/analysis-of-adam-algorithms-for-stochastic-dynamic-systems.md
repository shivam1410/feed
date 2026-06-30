---
title: "Analysis of Adam Algorithms for Stochastic Dynamic Systems"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28879"
authors: ["Xin Zheng, Yifei Jin, Lei Guo"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 43
guid: "oai:arXiv.org:2606.28879v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28879v1 Announce Type: new Abstract: The adaptive moment estimation algorithm, known as Adam, is widely used in modern machine learning, owing to its low per-iteration complexity and strong empirical performance. Despite its prevalent use, the theoretical foundation of Adam remains largely unexplored for time-varying and nonstationary systems. In fact, the existing theoretical analyses of Adam-type algorithms are primarily concerned with time-invariant model parameters and explicitly or implicitly rely on independent and identically distributed (i.i.d.) data assumptions, under which the learning taskcan be formulated as minimizing a fixed expected objective with a static minimizer. However, such assumptions are often violated in time-varying and nonstationary systems, thereby calling for a theoretical investigation beyond the conventional yet idealized i.i.d. setting. The main objective of this paper is to solve this challenging problem by establishing a general theory of Adam for time-varying and nonstationary stochastic systems. We will introduce some new techniques for analyzing the products of nonstationary and dependent random matrices induced by Adam's coupled first- and second-moment recursions, and will construct a new stochastic Lyapunov function that blends these two moment dynamics. Under a stochastic excitation condition that allows nonstationary and dependent data, we will derive both parameter tracking and output prediction error bounds explicitly, quantifying the effects of stepsize, first- and second-momentum parameters, gradient noise and parameter drift. These bounds not only provide guarantees for Adam performance, but also provide guidelines for hyperparameter selection. Experiments on both synthetic and real-world data validate our theory and design guidelines.
