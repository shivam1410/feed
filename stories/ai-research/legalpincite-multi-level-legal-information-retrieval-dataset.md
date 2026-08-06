---
title: "LegalPincite: Multi-level Legal Information Retrieval Dataset"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.03756"
authors: ["Theresia Veronika Rampisela", "Henrik Palmer Olsen", "Giovanni Colavizza"]
date: "2026-08-03T20:00:00.000Z"
score: 60
guid: "2608.03756"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.03756.png"
generated: "2026-08-06T19:05:18+05:30"
---

A common task in legal Information Retrieval (IR) is to find relevant legal sources from case-law collections. While legal practice often requires pinpoint citations (pincites) to specific case paragraphs, most existing public legal IR datasets lack paragraph-level citation annotations. Yet, publicly available datasets with such information contain data leakage in the query text and exclude paragraphs that are neither citing nor cited from the corpora, creating an unrealistic and oversimplified retrieval setting, potentially leading to inflated performance. To address these limitations, we contribute a large-scale legal IR dataset constructed from Court of Justice of the European Union (CJEU) judgments. The dataset contains: (i) masked case/paragraph queries, with removed citation information; (ii) a corpus that includes all paragraphs; and (iii) case- and paragraph-level ground-truth citations, with partial human expert validation. Our dataset supports both the development and rigorous evaluation of legal IR methods, at multiple query-document levels (case-to-case, paragraph-to-case, and paragraph-to-paragraph retrieval). Link to dataset: https://huggingface.co/datasets/theresiavr/legalpincite
