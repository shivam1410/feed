---
title: "Jev introduces a new shape of LLM - System One, aka Decision Models"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Sep/21/jev/"
authors: []
date: "2026-09-21T23:09:20+00:00"
score: 92
guid: "https://simonwillison.net/2026/Sep/21/jev/"
image: ""
generated: "2026-09-27T20:11:44+05:30"
---

Jev is a new model type that takes text input but outputs floating-point scores for categories, yes-no questions, and ratings rather than generated text. It costs $0.042 per million input tokens with free output. You provide a state object describing data, ask questions, and get back calibrated probabilities. This matters because most real-world AI work needs routing or classification, not fluent generation, making a decision-focused model far cheaper.
