---
title: "SERUM: State Extraction and Refinement for User Modeling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.29181"
authors: ["Andy J. Phu, James Mooney, Karin de Langis, Khanh Chi Le, Dongyeop Kang"]
date: "Mon, 03 Aug 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2607.29181v1"
image: ""
generated: "2026-08-03T19:06:42+05:30"
---

arXiv:2607.29181v1 Announce Type: new Abstract: Agentic assistants capable of proactive, personalized interactions require structured models of user intent and workflow. However, building these models from raw, unstructured screen activity remains an open challenge. We present SERUM, a multi-pass framework that extracts finite-state behavioral models directly from unstructured egocentric video using hierarchical VLM annotation. Processing screen recordings through a sliding window, SERUM alternates between activity-recognition and intent-inference passes, with each pass refining labels using accumulated prior context to reduce hallucination and temporal conflation seen in single-pass annotation. Synonymous states are then merged via sentence embeddings and human-calibrated thresholds into a compact, coherent taxonomy. We evaluate behavioral structure by fitting first-order Markov models over the resulting label sequences (both actions and intents) and measuring predictive accuracy against frequency baselines. Across 61 egocentric videos in four domains (coding, cooking, physical activities, and daily life), we find: (1) iterative label refinement converges to a stable state vocabulary, which we term schematic equilibrium, after several passes; (2) normalized Markov models achieve substantially lower perplexity and higher action predictions than frequency baselines, with the largest gains on structured tasks like coding; and (3) human annotators rate final-pass labels as accurate and meaningfully improved over first-pass labels. To our knowledge, SERUM is the first system to produce interpretable process models from unstructured egocentric screen video without manual annotation, opening a scalable pathway for user modeling and behavioral understanding in the wild. Our demo, code, and results are publicly available
