---
title: "Embedding Semantic Entropy: NLI-Free Semantic Uncertainty Estimation with Geometry-Aware Clustering"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03876"
authors: ["Akshiya Raveendran, Praveenasarma Baskarakurukkal, Pragatheeswaran Vipulanandan, Kamal Premaratne, Uthayasanker Thayasivam"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03876v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Large Language Models (LLMs) often generate fluent yet incorrect responses, making un- certainty estimation important for reliable deployment. Semantic Entropy (SE) estimates uncertainty by clustering responses based on semantic equivalence, but it relies on hard entailment-based clustering. We propose Embedding Semantic Entropy, which replaces entailment-based clustering with K-Medoids in semantic embedding space and uses dynamic cluster selection to account for intra-cluster compactness and inter-cluster separation. We evaluate the method on TriviaQA, SQuAD, NQ-Open, SVAMP, and BioASQ using Falcon- 7B-Instruct, LLaMA-2-7B, LLaMA-2-7B-Chat, and Gemma-7B. Results show competitive AUROC and AUARC performance, suggesting that NLI-based entailment clustering can be replaced with embedding-space clustering with limited degradation while improving the inspectability of semantic grouping. This matters because semantic uncertainty scores depend on underlying semantic groups; by making these groups explicit, compact, and separable in embedding space, Emb-SE turns uncertainty estimation from a black-box en- tailment decision into an inspectable clustering problem.
