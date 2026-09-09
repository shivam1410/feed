---
title: "Data Quality Rule Generation with LLMs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.06053"
authors: ["Anna-Christina Glock, Thomas H\\\"utter, Johannes F\\\"urnkranz, Wolfram W\\\"o{\\ss}, Christine Dominka-Kiss, Lisa Ehrlinger"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2609.06053v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.06053v1 Announce Type: new Abstract: The validation of data, such as customer and employee data, is an important task in many organizations. Errors in data can have severe consequences. For example, a wrong drug unit in a patient record can lead to life-threatening medication errors, and a missing street number in an address to failed deliveries. Companies often employ rule-based enterprise data quality (DQ) tools, which allow domain experts to specify rules to validate the data over time. While rule-based DQ tools are computationally efficient and provide explainable reports, maintaining a comprehensive rule set manually is challenging, as domain experts often overlook essential rules, especially in complex domains and large data volumes. Hence, closing these gaps remains an open problem in practice. In this paper, we address the challenge of automated DQ rule generation. For this, we formalize a generalizable generate-filter framework and introduce LeDQeR, an LLM-based DQ rule generation approach. First, a large language model (LLM) generates candidates rules from an observed dirty data tuple for a given rule-based DQ tool syntax. Second, we apply four filter techniques that ensure the (i) executability, (ii) correctness, and (iii) generalizability, and avoid (iv) redundancy of the generated rules. An extensive experimental evaluation suggests that LeDQeR is able to produce effective and compact rule sets for various datasets and error types.
