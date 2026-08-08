---
title: "Task-Conditional Flow Matching for Balanced Multilingual Text Embedding Adaptation"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2608.05785"
authors: ["Tirth Bhatt", "Naren Kumar S", "Mayank Singh"]
date: "2026-08-05T20:00:00.000Z"
score: 50
guid: "2608.05785"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2608.05785.png"
generated: "2026-08-08T19:05:03+05:30"
---

Multilingual text embedding models are commonly adapted using a single training objective across diverse tasks, despite different tasks requiring fundamentally different optimization strategies. We introduce Task-Conditional Flow Matching (TCFM), a multilingual embedding adaptation framework that selectively applies Flow Matching to translation tasks while optimizing retrieval, classification, and pair-classification tasks with objectives better aligned to their learning dynamics. TCFM further combines teacher-guided representation preservation with a three-stage curriculum to enable stable adaptation. Evaluated on the Indic Massive Text Embedding Benchmark, TCFM establishes a new state-of-the-art, consistently improving embedding quality across a diverse set of multilingual tasks and generalizing across embedding model families. We will publicly release the codebase and datasets upon acceptance of the paper.
