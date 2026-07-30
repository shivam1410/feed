---
title: "High-Order Markov Blanket Discovery via a k-Order Relaxation of the Faithfulness Assumption"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26357"
authors: ["Loong Kuan Lee, Ragavi Krishnamoorthy, Nico Piatkowski"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 61
guid: "oai:arXiv.org:2607.26357v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

arXiv:2607.26357v1 Announce Type: new Abstract: The problem of learning the graphical Markov blanket (MB) of a variable from data has applications in many areas such as structure learning for Bayesian networks and Markov random fields, causal discovery, and feature selection. However, a common assumption most methods make is that the conditional independencies in the distribution imply the same separation in the graphical structure -- also known as the faithfulness assumption. Unfortunately, this assumption can be violated by higher-order dependencies such as XOR and parity-type relations, and -- on finite samples -- by empirical violations that, in extreme cases, even induce spurious dependencies absent from the true distribution. Therefore, in this paper we propose a "k-order" relaxation of the faithfulness assumption that captures parity type relationships between k+2 variables. We then propose a proof of concept algorithm called k-order Markov blanket (kOMB) that uses this relaxation for MB discovery. Finally, we empirically show how kOMB can recover the MB of a variable under both true and empirical violations of faithfulness. Code available at: https://github.com/lklee9/k-order-Markov-blanket
