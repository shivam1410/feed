---
title: "LLM-Based Embeddings for Program Analysis and Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.07894"
authors: ["Calvin Higgins, Marco Alvarez"]
date: "Tue, 11 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.07894v1"
image: ""
generated: "2026-08-11T19:05:57+05:30"
---

arXiv:2608.07894v1 Announce Type: new Abstract: Recent advances have highlighted the potential of machine learning, particularly Large Language Models (LLMs), for analyzing and optimizing programs. We present the first application of program embeddings from LLMCompiler---an LLM massively pretrained on intermediate representation (IR) code---to representative program analysis and optimization tasks. We generate program embeddings directly from source and IR code using a simple approach: split programs into chunks, independently embed each chunk with pretrained LLMs, and then aggregate the chunk embeddings into a single program embedding. Our experiments show that combining source and IR code embeddings achieves an error rate of 1.54\% in algorithm classification, a 12\% improvement over the current state-of-the-art, and a competitive accuracy on heterogeneous device mapping. These findings suggest that training a performance-aware LLM for embedding IR code might yield state-of-the-art results in code optimization tasks.
