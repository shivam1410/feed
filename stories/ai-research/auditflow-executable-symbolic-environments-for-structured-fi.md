---
title: "AUDITFLOW: Executable Symbolic Environments for Structured Financial Reporting Verification"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2606.03031"
authors: ["Yan Wang", "Xuguang Ai", "Jaisal Patel", "Xueqing Peng", "Fengran Mo", "Yupeng Cao", "Haohang Li", "Mingyu Cao", "Lingfei Qian", "Víctor Gutiérrez-Basulto"]
date: "2026-06-01T20:00:00.000Z"
score: 70
guid: "2606.03031"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2606.03031.png"
generated: "2026-06-04T14:49:21+05:30"
---

Structured financial audit verification is difficult for language-model agents because correctness depends on structured evidence rather than text alone. A model must link reported facts to taxonomy concepts, traverse calculation or dimensional relations, and recompute expected values before applying an audit rule. We propose AuditFlow, a graph-grounded multi-agent framework that separates adaptive search from deterministic verification. AuditFlow builds a symbolic environment from a static US-GAAP taxonomy graph and a dynamic XBRL filing graph, and exposes it through typed tools for fact retrieval, taxonomy traversal, numerical checking, and rule evaluation. Two junior auditors inspect each case from regulatory and evidentiary views, while a senior auditor resolves disagreements and can request further investigation. The final reports are fused through evidential aggregation to produce an audit verdict, expected value, evidence trail, and trustworthiness score. On a FinAuditing-derived FinMR sample, AuditFlow reaches 82.09% joint audit accuracy under GPT-5.5, outperforming the strongest baseline by 14.93 points. Removing deterministic checks drops accuracy to 17.91%, showing that the symbolic environment performs the verification step that the model cannot reliably replace.
