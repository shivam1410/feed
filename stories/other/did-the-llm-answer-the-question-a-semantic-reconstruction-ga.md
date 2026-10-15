---
title: "Did the LLM Answer the Question? A Semantic Reconstruction Game for Jailbreak Evaluation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.19306"
authors: ["Liam Davis, Romain Emil-Popescu, Suman Jana"]
date: "Thu, 15 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.19306v1"
image: ""
generated: "2026-10-15T19:00:19+05:30"
---

Jailbreak attacks against large language models (LLMs) are evaluated using attack success rate (ASR), which depends on correctly identifying responses that fulfill prohibited requests. Existing evaluators can mistake refusals or topically related responses for successful attacks. We show that changing only the judge LLM can alter reported ASR by up to $82$ percentage points. We introduce the semantic reconstruction game, a training-free evaluator that decomposes compliance judgments into constrained semantic comparisons. Given only a response, an LLM reconstructs the request answered by its substantive content, excluding information merely repeated or refused. The game compares this reconstruction against similar decoy requests to determine whether it matches the original request, allowing abstention when neither candidate matches. Across three off-the-shelf LLM judges, the game achieves the lowest mean error against human labels among evaluated methods and reduces variation in reported ASR. It prioritizes avoiding false positives, even at the cost of missing some successful jailbreaks.
