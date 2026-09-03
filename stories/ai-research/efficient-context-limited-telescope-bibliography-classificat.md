---
title: "Efficient Context-Limited Telescope Bibliography Classification for the WASP-2025 Shared Task Using SciBERT"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.01647"
authors: ["Madhusudhana Naidu"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.01647v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.01647v1 Announce Type: new Abstract: The creation of telescope bibliographies is a crucial part of assessing the scientific impact of observatories and ensuring reproducibility in astronomy. This task involves identifying, categorizing, and linking scientific publications that reference or use specific telescopes. However, this process remains largely manual and resource intensive. In this work, we present an efficient SciBERT-based approach for automatic classification of scientific papers into four categories - science, instrumentation, mention, and not telescope. Despite strict context-length constraints (maximum 512 tokens) and limited compute resources, our approach achieved a macro F1 score of 0.89, ranking at the top of the WASP-2025 leaderboard. We analyze the effect of truncation and show that even with half the samples exceeding the token limit, SciBERT's domain alignment enables robust classification. We discuss trade-offs between truncation, chunking, and long-context models, providing insights into the efficiency frontier for scientific text curation.
