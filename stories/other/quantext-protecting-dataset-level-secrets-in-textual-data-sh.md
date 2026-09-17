---
title: "QuanText: Protecting Dataset-Level Secrets in Textual Data Sharing"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.17995"
authors: ["Shuaiqi Wang, Zinan Lin, Giulia Fanti"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.17995v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.17995v1 Announce Type: new Abstract: Natural-language datasets support many downstream applications and research studies, but releasing text can reveal sensitive global properties of the underlying data source, such as the proportion of records associated with a particular gender, diagnosis, or political stance. Existing work has largely focused on property inference attacks that recover such global properties, while defenses for protecting these dataset-level secrets remain limited. Differential privacy, although effective for protecting individual records, provides only weak protection for aggregate properties. We propose Randomized Quantization for Text (QuanText), a training-free and large-language-model-agnostic data release mechanism that protects global secrets in textual datasets while preserving data utility. Given a dataset-level secret, such as the proportion of records with a particular diagnosis, and attributes whose utility should be preserved, such as topic and sentiment, QuanText perturbs both the secret distribution and the distributions of correlated attributes. It does so by constructing candidate release distributions over secret and non-secret attributes, randomly selecting a candidate sufficiently close to the private empirical distribution, and rewriting each private text sample to match the selected distribution using attribute-related snippets from the original text. QuanText is inspired by the Statistic Maximal Leakage (SML) framework, which bounds leakage about a secret function of a data distribution. Under idealized conditions, we show that QuanText satisfies an SML guarantee. Since these conditions may not hold exactly in practice, we also evaluate QuanText empirically on real-world datasets. Our results show that QuanText achieves a better empirical privacy-utility trade-off than competing data generation baselines.
