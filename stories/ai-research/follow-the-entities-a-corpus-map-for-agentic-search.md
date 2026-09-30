---
title: "Follow the Entities: A Corpus Map for Agentic Search"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.37226"
authors: ["Soyeong Jeong", "Sujay Kumar Jauhar", "Sung Ju Hwang", "Andrew Joohun Nam"]
date: "2026-09-28T20:00:00.000Z"
score: 82
guid: "2609.37226"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.37226.png"
generated: "2026-09-30T19:08:55+05:30"
---

Answering questions and completing tasks over large document collections often requires connecting evidence spread across multiple documents, such as a project's approval recorded in one, its requirements in another, and its latest status in a third. Recent LLM agents approach this by iteratively searching the full corpus rather than reading only a fixed set of top-ranked documents. However, when the corpus is exposed only as a flat collection of files, a relevant document gives no indication of how it relates to others, so the agent must rediscover these relationships for every query, often missing complementary evidence while simultaneously consuming substantial additional tokens. To address this, we introduce CorpusMap, a navigation layer that organizes the corpus around its recurring entities, which are identifiable from the documents themselves and can link a single document to many others across sources. Specifically, CorpusMap represents each recurring entity as an Entity Page that aggregates information about it and links to every document that refers to it, forming a graph between entities and documents that the agent can traverse to gather otherwise disconnected evidence. Moreover, since CorpusMap is constructed offline by resolving mentions of the same entity across documents, its links are shared across queries rather than rediscovered repeatedly at inference time. Using 7 different models with 3 benchmark datasets, we show that CorpusMap improves both evidence discovery and answer quality over raw-corpus agentic search while using fewer tokens on average, and further outperforms 4 alternative navigation layers, suggesting that entities serve as effective anchors for navigating large document collections.
