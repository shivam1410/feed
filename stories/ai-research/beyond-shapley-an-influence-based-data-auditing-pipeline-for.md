---
title: "Beyond Shapley: An Influence-Based Data Auditing Pipeline for LLM Alignment and Evaluation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22766"
authors: ["Yunting Song, Matthew Watson, Peter Grabowski, Jun Qin"]
date: "Tue, 28 Jul 2026 00:00:00 -0400"
score: 61
guid: "oai:arXiv.org:2607.22766v1"
image: ""
generated: "2026-07-28T19:07:22+05:30"
---

arXiv:2607.22766v1 Announce Type: new Abstract: The alignment of Large Language Models (LLMs) is increasingly bottlenecked by data quality. As datasets scale, massive preference and instruction-tuning corpora inevitably accumulate hidden structural contradictions, safety risks, and systemic human annotation errors. Standard dataset auditing methods, such as semantic deduplication or LLM-as-a-judge, struggle to capture the actual predictive impact of individual records and often miss deep functional rule clashes. To address this, we introduce a scalable, inference-only data valuation pipeline that approximates the Shapley value without iterative model retraining. By mapping semantic k-NN neighborhoods into a directed graph, our framework evaluates data utility directly through a reference LLM's probability distribution using zero-shot and one-shot conditional log-likelihood shifts. Our pipeline then translates these predictive influence scores into localized advantage metrics to isolate gradient-conflicting records. We demonstrate the pipeline's efficacy in sanitizing two heavily vetted alignment datasets. First, applying our pipeline to the HelpSteer2 dataset reduced the manual audit search space by 99.1%, successfully uncovering falsely-labeled records across diverse failure modes. Second, applying our automated audit strategy to Anthropic's HH-RLHF training and evaluation splits identified thousands of hidden safety and factual preference inversions. Crucially, by extending this audit to the evaluation split, we expose severe vulnerabilities in current benchmark integrity: highly capable models frequently predict the safer or more helpful response, only to be penalized by objectively flawed human ground-truth labels. Overall, our work provides a mathematically grounded, highly efficient diagnostic tool to uncover human label failures, sanitize evaluation benchmarks, and ensure the integrity of LLM alignment data.
