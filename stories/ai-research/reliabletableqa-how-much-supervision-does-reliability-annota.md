---
title: "ReliableTableQA:How Much Supervision Does Reliability Annotation Need?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20537"
authors: ["Huei-Chung Hu, Hsin-Tai Wu, Koyo Kobayashi"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.20537v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20537v1 Announce Type: new Abstract: We introduce ReliableTableQA, a framework for training an LLM to annotate the statistical reliability of tabular QA results, not whether the query is answerable, but whether the computed answer is statistically meaningful. In real enterprise analytics, a syntactically correct SQL query can return a value that is based on too small a sample, has an excessively wide confidence interval, or is too confounded to support action. Existing systems answer confidently in all such cases, a failure we quantify as the Unreliable Confident Answer Rate (UCAR). We contribute (1) a ten-category reliability taxonomy (R1-R10) covering hazards such as small-sample aggregates, multiple-comparison inflation, and distribution-tail mismatch; (2) a program-first data pipeline that generates 50,000 reliability-labeled training examples from a context-free grammar over public retail schemas, with schema-stratified SFT/GRPO splits; and (3) a controlled study of how much supervision calibrated reliability annotation actually requires. We find that a small, schema-stratified SFT set is remarkably sufficient: 200 examples raise reliability-flag F1 from 0.61 to 0.98 and parse rate from 0.52 to 1.00, drive UCAR to zero, and yield a model that generalizes to an unseen retail domain (Rel-F1 0.997 on held-out H&M). Against this strong SFT baseline, GRPO, commonly assumed to be essential, helps only when SFT is under-trained (+0.06-0.16 exact-flag-set match at 100 examples, in- and out-of-distribution) and provides no measurable benefit once SFT is adequate, a null result we confirm across a hard compound-flag slice, a strict exact-match metric, and out-of-distribution evaluation. Our findings reframe reliability annotation as a data-efficiency problem and delineate precisely when reinforcement fine-tuning does and does not pay off.
