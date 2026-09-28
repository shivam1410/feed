---
title: "Cost-Aware Best-LLM Identification using Dueling Feedback"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30360"
authors: ["Sarvesh Gharat, Nikhil Karamchandani, Jayakrishnan Nair"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.30360v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Inspired by the problem of identifying the best model from a collection of large language models (LLMs) with heterogeneous querying costs, we formulate and analyse a variant of the multi-armed bandit (MAB) with (i) dueling feedback, where pairwise comparisons between model responses provide robust preference signals, and (ii) heterogeneous sampling costs, reflecting the differing costs of querying different LLMs. Assuming the existence of a Condorcet winner, a condition we empirically validate across multiple real-world datasets, we propose a Track-and-Stop style algorithm for best-arm identification with prescribed confidence. We prove that the algorithm almost surely achieves the asymptotically optimal cost as the error tends to zero. Finally, we extensively evaluate our approach on both synthetic and real-world instances, demonstrating consistent improvements over classical cost-unaware algorithms and their cost-aware extensions.
