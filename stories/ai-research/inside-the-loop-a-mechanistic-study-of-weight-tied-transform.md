---
title: "Inside the Loop: A Mechanistic Study of Weight-Tied Transformers on Depth-Bound Algorithmic Tasks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24135"
authors: ["Magnus Sesodia, Juil Sock, Philip Torr, Christian Schroeder de Witt"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.24135v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Solving algorithmic tasks with many sequential steps typically requires scaling up transformer depth or chain-of-thought length, incurring unfavorable parameter and inference-compute costs, respectively. Looped transformers, which reuse one block of layers across many iterations, are poised to address this, since they scale effective depth without adding parameters or tokens. Yet, it remains unclear what each iteration is actually computing, or whether the loop merely simulates a deeper untied stack. Here, we study directed permutation traversal, in which a model follows $H$ hops from a starting node and reports the node it reaches, so every intermediate hop has a known ground truth. We find that a minimum effective depth is necessary to solve the task, beyond which the degree of weight tying becomes the determining factor. For instance, a looped transformer with a four-layer block iterated eight times solves the task in every seed, while an identically-trained untied transformer of the same effective depth never does, succeeding only with a lower learning rate or supervision of its intermediate layers. Probing and intervening on the residual stream, we find that the looped model advances through the intermediate nodes gradually, forming a staircase that adapts to its iteration budget, whereas the untied model, at that lower rate, exposes them only in its final layers. Taken together, our results recast looped transformers as iterative program learners, which allocate their iterations to successive steps of the algorithm and solve tasks that identically-trained untied models of the same effective depth do not. Code is available at https://github.com/magnus-sesodia/insidetheloop.
