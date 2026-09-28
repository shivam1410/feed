---
title: "Jev introduces a new shape of LLM - System One, aka Decision Models"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Sep/21/jev/"
authors: []
date: "2026-09-21T23:09:20+00:00"
score: 100
guid: "https://simonwillison.net/2026/Sep/21/jev/"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Jev accepts text and returns floating-point confidence scores for decisions: yes-no questions (Bernoulli distributions), categorical ratings, and arbitrary scores. At $0.042 per million input tokens with free output, it costs less than GPT-5 Nano. You send a state object and questions, get back typed probabilistic answers.
