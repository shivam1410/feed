---
title: "Chronofy: A Temporal-Logical Decay Architecture for Information Validity in Time-Aware Retrieval-Augmented Generation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20560"
authors: ["Muntaser Syed, Marius Silaghi, Sheikh Abujar, Sharun Akter"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2607.20560v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20560v1 Announce Type: new Abstract: Retrieval-Augmented Generation (RAG) systems retrieve and integrate external knowledge to ground large language model (LLM) outputs. However, current RAG architectures treat all retrieved facts as equally valid regardless of temporal provenance, leading to temporal hallucination, where plausible but obsolete facts corrupt the output. A clinical lab reading from yesterday is actionable; the same reading from six months ago is noise. We present Chronofy, a three-layer neuro-symbolic framework implementing the Temporal-Logical Decay Architecture (TLDA) that embeds temporal validity directly into the representation, retrieval, and reasoning layers of RAG systems. Layer 1 reserves a dedicated temporal subspace within Matryoshka embeddings to make fact age structurally irremovable from the representation. Layer 2 integrates learnable exponential decay functions into graph-based retrieval, where the decay coefficient $\beta_j$ is grounded in Bayesian decision theory as an approximation of twice the latent process mean-reversion rate. Layer 3 applies Signal Temporal Logic (STL) robustness functions to evaluate the temporal validity of retrieved knowledge, not LLM output confidence, and enforces the possibilistic weakest-link principle to bound output confidence by the most decayed evidence in the reasoning chain. We evaluate Chronofy on temporal knowledge graph forecasting benchmarks, the TimE temporal QA benchmark, and a domain-specific sensitivity analysis, demonstrating that explicit temporal decay modeling improves retrieval precision, reduces temporal hallucination, and enables principled data re-acquisition triggers when temporal context is insufficient.
