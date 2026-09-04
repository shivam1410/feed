---
title: "Mind the Gap: Robustness Risks in PII Detection Systems"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.03464"
authors: ["Adeel Zafar, Slawomir Nowaczyk"]
date: "Fri, 04 Sep 2026 00:00:00 -0400"
score: 66
guid: "oai:arXiv.org:2609.03464v1"
image: ""
generated: "2026-09-04T23:32:20+05:30"
---

arXiv:2609.03464v1 Announce Type: new Abstract: Personally Identifiable Information (PII) detection is a foundational component of data protection infrastructure where missed entities constitute direct privacy and security risks. Although modern PII systems report strong performance on standard benchmarks, we show that these evaluations mask substantial robustness failures under realistic distribution shifts encountered in deployment. Rather than comparing state-of-the-art accuracy, we study how different PII detection paradigms fail under noisy, unstructured, and informal inputs. We construct a stress test benchmark spanning seven categories of natural distribution shift and evaluate representative systems from three widely deployed architectural families: encoder-based NER (SpaCy), rule-based hybrid detection (Presidio), and generative LLM extraction (Qwen2.5-3B). All three exhibit significant degradation on out-of-distribution inputs, but with distinct and complementary failure modes. Encoder models primarily fail on unseen surface forms and boundary detection, rule-based systems fail on non-standard formats, and LLMs exhibit entity-type confusion and generation instability. These results show that aggregate benchmark scores obscure deployment-critical weaknesses and that no single architecture is uniformly reliable across PII categories. Motivated by these findings, we propose a hybrid detection pipeline with a QA-driven feedback loop for iterative risk mitigation, and release our benchmark to support OOD-aware evaluation of PII systems.
