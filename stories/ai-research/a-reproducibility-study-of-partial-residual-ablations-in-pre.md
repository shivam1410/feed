---
title: "A Reproducibility Study of Partial Residual Ablations in Pre-LN Transformers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14689"
authors: ["Pratikkumar Babariya"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.14689v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14689v1 Announce Type: new Abstract: Residual connections are a fundamental component of transformer architectures, yet the roles of the attention and feed-forward residual pathways remain poorly understood when considered independently. This paper presents a reproducibility study of partial residual ablations in Pre-LN GPT-style transformers trained at two scales (10M and 124M parameters). I compare four architectural configurations by selectively removing the attention residual connection, the feed-forward residual connection, or both. Across all experiments, removing the attention residual (FFNOnly) consistently causes deterministic collapse to the No-Residual performance floor. In contrast, removing the feed-forward residual (AttnOnly) exhibits a reproducible recovery effect at 10M scale under a controlled 8-seed deterministic study, while its behavior at 124M remains unresolved because of substantial seed variance. During the investigation, I identified and corrected an experimental measurement confound in runtime gain scaling and document both the failed intermediate reproduction and the subsequent controlled replication. Based on the empirical results, I propose a cross-position routing hypothesis to explain the observed asymmetry while explicitly distinguishing confirmed findings from unresolved questions. To support reproducibility, I release the complete source code, experiment configurations, checkpoints, training logs, and all experimental results, including intermediate non-reproducing runs.
