---
title: "FinGREAT: Evaluating LLMs on Financial Graph-guided Retrieval And Typing"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19240"
authors: ["Ashman Mehra, Bryan Routledge, Jane JaeYeon Pyo, Pierre Jinghong Liang"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19240v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

Financial disclosures express the underlying relationships of double-entry accounting through unstructured text. While financial LLM benchmarks predominantly emphasize question answering and classification, schema-guided evidence discovery remains relatively under-explored. We investigate whether open-weight LLMs can extract and classify evidence corresponding to predefined double-entry accounting relationships underlying the text. Using a financial accounting graph comprising 11 nodes (accounts) and 11 edges (transaction types), we evaluate mid-sized models from 5 open-weight families across 1,300 SEC 10-K Item 7 filings spanning 26 years, comparing their extraction performance against three proprietary models. Results reveal substantial differences in extraction volume, edge distributions, and cross-model agreement. Building on this study, we introduce a human-annotated relation classification benchmark comprising 483 passages across three financial accounting categories, evaluating 34 open-weight and 10 proprietary models. The strongest open-weight and proprietary models achieve 84.1\% and 92.8\% accuracy, respectively, with considerable variation across accounting categories. Our findings highlight the importance of evaluating evidence discovery and relation understanding separately, while investigating locally deployable models for scalable, privacy-sensitive financial analysis.
