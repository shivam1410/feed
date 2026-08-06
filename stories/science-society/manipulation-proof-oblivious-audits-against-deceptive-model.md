---
title: "Manipulation-Proof Oblivious Audits against Deceptive Model Providers"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.04365"
authors: ["Augustin Godinot, Sofiane Azogagh, Julien Ferry, S\\'ebastien Gambs"]
date: "Thu, 06 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.04365v1"
image: ""
generated: "2026-08-06T19:05:18+05:30"
---

arXiv:2608.04365v1 Announce Type: new Abstract: Audits have emerged as a critical instrument for algorithmic governance, providing a mechanism for external scrutiny and governance of machine learning models. However, ensuring the integrity of such assessments remains a challenging issue. For instance in regulatory contexts, audits are typically declared or easily detected, thus enabling model providers to manipulate the process, whether intentionally or inadvertently. This vulnerability is particularly acute in the context of fairness evaluations, in which providers can often infer sensitive attributes and strategically equalize allocation rates between groups to satisfy fairness metrics. In this paper, we introduce a novel audit protocol designed to significantly increase the post-audit detectability of such manipulations by enabling the auditor to query the model in an oblivious manner. Our approach leverages a Private Information Retrieval mechanism to require the provider to label a large set of instances, while preventing it from knowing which subset will ultimately be used for the audit. The protocol is efficient, imposes minimal overhead on the auditor, and requires no modification to the audited model, its training procedure, or its inference pipeline. We provide theoretical guarantees showing that, under this protocol, a provider attempting to hide unfairness must falsify a significantly larger number of responses, thereby increasing both the difficulty and the likelihood of detection of manipulation. Experimental results across representative audit scenarios confirm the effectiveness and practicality of our approach.
