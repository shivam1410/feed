---
title: "Learning through Internalization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.20937"
authors: ["Nikolaos Tsilivis, Nirmit Joshi, Marko Medvedev, Julia Kempe, Nati Srebro"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.20937v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.20937v1 Announce Type: new Abstract: We study internalization processes, by which neural-network-based systems absorb an explicit computational procedure into their own weights, and how they facilitate learning. We investigate how transformers internalize the simulation of semiautomata by internalizing chain-of-thought (CoT) tokens, which classes of semiautomata are harder to internalize, and expose the flip side of internalization, that is, a progressive degradation of out-of-distribution performance. We then provide the first provable analysis of successful internalization: for the task of learning parities, we show that a simplified one-layer transformer provably first learns the target with explicit CoT supervision and then internalizes the autoregressive generation as CoT tokens are progressively removed, learning to directly compute the parity. This task is computationally hard to learn from data without CoT supervision. Finally, we discuss how learning through internalization relates to the \textit{Positive Distribution Shift} phenomenon recently introduced by~\citet{Med+26}.
