---
title: "Learning to Solve Hard Problems in RL for LLMs by Never Giving Up"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13443"
authors: ["Michael Noukhovitch, Hamish Ivison, Nathan Lambert, Aaron Courville"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13443v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13443v1 Announce Type: new Abstract: We demonstrate that training LLMs with RL does not improve performance equally across a dataset. RL shows large improvements on easy problems that an LLM is already good at solving, but small improvements on hard problems. We call this the Matthew Effect in RL for LLMs, after the phenomenon of cumulative advantage from economics and network science summarized as "the rich get richer". The naive explanation is that hard problems require more compute to find a solution. We argue that modern RL methods are exacerbating the issue by wasting too much compute on easy problems and instead should dynamically reallocate how they use compute. We introduce Never Give Up (NGU), a simple adaptive sampling method that keeps generating samples for a problem until one is correct. By leveraging asynchronous RL, this naturally uses fewer samples to filter out easy problems and allocates more compute to solving harder problems. We investigate the design choices that affect NGU, such as off-policy robustness, and develop a set of best practices. On the math benchmark Deepscaler, NGU improves performance per compute, especially on harder problems. On a recent coding task, Manufactoria, standard GRPO with a per-test reward fails to fully solve problems that have a range of easy and difficult tests. NGU iteratively improves, solving harder and harder tests, until it learns to fully solve coding problems.
