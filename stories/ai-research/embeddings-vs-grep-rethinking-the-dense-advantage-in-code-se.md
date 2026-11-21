---
title: "Embeddings vs. Grep: Rethinking the Dense Advantage in Code Search"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2611.20455"
authors: ["Siqiao Xue", "Ziyin Zhang", "Zihan Liao", "Jin Qin", "Yixiang Mu", "Hang Yu"]
date: "2026-11-15T19:00:00.000Z"
score: 50
guid: "2611.20455"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2611.20455.png"
generated: "2026-11-21T19:04:16+05:30"
---

Code-search benchmarks show dense encoders well ahead of BM25, yet coding agents do well with grep. What does this dense advantage measure? Existing benchmarks cannot tell: they use curated queries, old code and a handicapped BM25. To find out, we build Repo-Premium, a realistic repository-level code-search benchmark. It ranks files in real repositories, with curated and raw queries in Python, JavaScript, TypeScript, Go, Rust and Java, pull requests from 2022 to 2026, and a preregistered test pool over 91 repositories. Our experiments trace the advantage to two sources: evaluation choices that favor dense retrieval, such as splitting files into chunks for BM25 and counting edited tests as relevant, and queries that lack the code's rare identifiers. Expanding the query with LLM-written identifiers (generate-then-grep) helps BM25 far more than dense retrieval, letting it match dense retrieval in every Python pool, even on pull requests opened after the LLM was released. No method we tried predicts which retriever will win on a given query. From these results we derive three guidelines: measure dense gains against a fair lexical baseline, fuse dense retrieval with BM25, and add the code's words to queries that lack them.
