---
title: "Designing a Robust LLM-Based Evaluation System for Agentic AI in Drug Discovery Through Human Alignment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21057"
authors: ["Emma Granqvist, Roc\\'io Mercado, Samuel Genheden"]
date: "Mon, 24 Aug 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2608.21057v1"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

arXiv:2608.21057v1 Announce Type: new Abstract: Agentic large language model (LLM) systems are reshaping scientific workflows in chemistry and drug discovery, but evaluating their open-ended, tool-augmented outputs remains a fundamental bottleneck. Reference-based metrics such as BLEU and ROUGE fail to capture semantic correctness, while expert human evaluation does not scale to the iteration speed these systems demand. The LLM-as-a-Judge paradigm has emerged as a scalable alternative, but existing drug discovery benchmarks deploy LLM judges without validating their alignment with human experts. In this work, we present an LLM-as-a-Judge evaluation framework for ChatInvent, an agentic drug discovery assistant deployed at AstraZeneca, with four contributions. First, we define four output-quality evaluation dimensions---Completeness, Relevancy, Structural Clarity, and Scope Adherence---alongside deterministic Tool Call Correctness checks. Second, we validate the judge through a human alignment study with five expert annotators, comparing Gemini 3.1 Pro, Claude Opus 4.7, GPT-5, and Llama 3.1 70B as candidate judges. Third, we optimize the best-performing judge using few-shot demonstrations of human-annotated examples, improving alignment with the human majority vote from 0.80 to 0.86. Fourth, applying the optimized judge to 70 held-out questions, we surface concrete limitations and find that informal phrasings do not systematically degrade output quality; if anything, it is helpful to have the LLM rewrite the original question before querying the agent. Our framework provides a reusable template for human-aligned evaluation of agentic systems in scientific domains.
