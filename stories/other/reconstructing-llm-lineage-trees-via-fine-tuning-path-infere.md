---
title: "Reconstructing LLM Lineage Trees via Fine-Tuning Path Inference"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08866"
authors: ["Sota Ogawa, Shojiro Yamabe, Daiki Nishiyama, Jun Sakuma"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08866v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Fine-tuned (FT) derivatives of large language models (LLMs) are now released in large numbers, yet their provenance relies on self-reports and cannot be verified. Misattributed lineage leaves a verifier unable to audit outsourced fine-tuning, confirm license compliance of derived models, or trace vulnerabilities that a parent passes to its children. All three require the direction of derivation, not merely its presence. Existing output-only methods are limited to pairwise derivation tests or undirected lineage estimation, while recovering a directed tree requires white-box access to model weights. We formalize the problem of reconstructing a directed model tree, including internal nodes, under gray-box access, where only teacher-forced log-likelihoods are observed and weights are never inspected. Fine-tuning raises the log-likelihood of the training data, and a child inherits this increase from its parent. Building on this property, we define an asymmetric per-task log-likelihood deviation between any two models as a trace of fine-tuning history, and derive from it an edge weight for each ordered pair of models. We propose TRACE-Edge, which exactly solves for the maximum spanning directed tree under these edge weights, with neither hyperparameters nor tree-structure constraints. We evaluate it on five configurations totaling 25 model trees built from three base models and seven tasks. TRACE-Edge achieves a parent-match accuracy of 0.74 when probed with the fine-tuning examples, and on average outperforms an output-similarity baseline even with held-out probes drawn from the same distribution as the training data.
