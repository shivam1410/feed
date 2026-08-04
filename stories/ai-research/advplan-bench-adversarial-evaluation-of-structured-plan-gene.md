---
title: "AdvPlan-Bench: Adversarial Evaluation of Structured Plan-Generation Agents"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00832"
authors: ["Alina Kapanova, Arun Kanhai, Natan Vidra, Spurthi Setty"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2608.00832v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00832v1 Announce Type: new Abstract: Structured plan-generation agents are often evaluated as if a plan has quality in isolation, yet many realistic planning tasks require asking how a candidate behaves when another agent can search for responses. We introduce AdvPlan-Bench, an offline benchmark for adversarial evaluation of structured plan-generation agents. The contribution is a general evaluation object: a typed plan, an adversarial response set, selector diagnostics, and traceable candidate-frontier metrics. AdvPlan-Bench represents plans as typed action chains with optional branches, assigns synthetic quality scores, compares opposing plans with BLUE-vs-RED advantage and Nash-gap diagnostics, and evaluates qualitative constraint coherence with a transparent heuristic rubric. In 150 synthetic scenarios spanning five planning templates, a sampled best-response policy that draws eight response candidates reduces BLUE advantage from .518 to .486 and BLUE win rate from .900 to .820 relative to a single-sample response. An offline LLM-policy contract baseline reaches .496 BLUE advantage and .700 BLUE win rate, while a two-stage multi-agent council obtains .509 BLUE advantage and .813 BLUE win rate. A three-rater rubric-sensitivity study over 600 rating records yields .978 inter-rater agreement. AdvPlan-Bench is not an operational planner and provides no evidence about real-world decision quality; it is a reproducible benchmark artifact for studying adversarial plan evaluation, response-budget sensitivity, candidate frontiers, and multi-agent critique-and-revision traces.
