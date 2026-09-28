---
title: "Parameters vs. Context: TRACE Fine-Tuning for Robust Retrieval-Augmented Generation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30337"
authors: ["Zhengchen Huang, Yundong Sun, Minrui Song, Shuanglong Yao, Ye Liu, Ji Chen, Xing Wang"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2609.30337v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Retrieval-Augmented Generation (RAG) mitigates knowledge obsolescence and factual hallucination in large language models by introducing external context. However, when retrieved knowledge conflicts with the model's internal parametric knowledge, the model may either blindly follow misleading context or incorrectly rely on parametric knowledge, leading to unreliable responses. To address this issue, this paper proposes TRACE (Debate-TRace and Answer-Completeness rEgularized fine-tuning), a robust fine-tuning framework for RAG under knowledge conflicts. First, we propose a fine-tuning method that leverages multi-agent debate traces to extract correct candidates, incorrect candidates, and answer-shift patterns, providing fine-grained supervision for reliable knowledge-source selection. In addition, we design an answer completeness regularization mechanism to alleviate empty, overly short, and prematurely terminated responses via answer-tail token reinforcement and premature termination suppression. The fine-tuning objective combines correct-answer supervision, incorrect-candidate suppression, answer-tail token reinforcement, and premature termination suppression, enabling the model to use reliable external context, resist misleading or irrelevant retrieved content, and fall back to parametric knowledge when retrieved evidence is unreliable. Experiments across multiple knowledge-conflict scenarios and datasets show that TRACE improves robustness against misleading retrieved knowledge and reduces incomplete answers. These results demonstrate that multi-agent debate traces and answer completeness regularization jointly enhance knowledge-source selection, conflict robustness, and answer quality in RAG models. Our code is available at https://github.com/PHD-lanyu/TRACE.
