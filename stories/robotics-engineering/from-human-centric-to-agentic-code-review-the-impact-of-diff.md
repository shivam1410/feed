---
title: "From Human-Centric to Agentic Code Review: The Impact of Different Generations of Generative AI Technology on Review Quality"
category: "Robotics & Engineering"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.13196"
authors: ["Suzhen Zhong", "Shayan Noei", "Bram Adams", "Ying Zou"]
date: "2026-07-13T20:00:00.000Z"
score: 65
guid: "2607.13196"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.13196.png"
generated: "2026-07-20T19:05:49+05:30"
---

Code review helps maintain software quality before code integration, but it also imposes a substantial workload on human reviewers. As generative artificial intelligence becomes part of software development, code review is shifting from a primarily human review process toward AI-supported review processes in which large language model (LLM) reviewers and AI agent reviewers participate alongside human reviewers. However, we still lack empirical evidence on how this transition affects review efficiency and review quality. In this paper, we study 1.02 million reviewed pull requests from 207 GitHub projects that transition across three code review eras: human-centric review, LLM-assisted review, and agentic code review. We identify three AI reviewer adoption practices: Gradual AI Adoption, Rapid LLM Adoption, and Rapid AI Agent Adoption. We further model pull request review discussions as reviewer interaction sequences to characterize how human, LLM, and AI agent reviewers collaborate during the review process. Our results show that agent-involved collaboration patterns, especially reviews initiated by AI agents or involving multiple AI agents, are associated with faster review decisions under Gradual AI Adoption and Rapid AI Agent Adoption. However, these efficiency gains do not translate into better review quality. We also find that review activity and pull request type remain important across eras, while human-AI collaboration patterns become the strongest explanatory factor for review efficiency once LLM and AI agent reviewers participate. These findings provide empirical guidance for designing AI-supported code review processes that improve efficiency without weakening review quality.
