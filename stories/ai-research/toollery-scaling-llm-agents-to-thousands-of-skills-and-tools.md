---
title: "Toollery: Scaling LLM Agents to Thousands of Skills and Tools"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22218"
authors: ["Xiangxi Tian, Ran Guan"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2609.22218v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22218v1 Announce Type: new Abstract: As LLM agents are exposed to hundreds to tens of thousands of skills, tools, and API functions, full-library prompting becomes costly, slow, and less reliable: each added candidate increases prompt tokens and latency, while longer candidate lists introduce more distractors for LLM selection. We present \textbf{Toollery}, a training-free candidate-compression framework for scalable LLM skill/tool selection. Following established document-side query expansion, Toollery generates user-intent queries from each skill/tool specification and builds a retrieval index that maps real user requests to compact candidate sets before final LLM decision-making. By treating high-level skills and atomic tools as selectable capabilities, Toollery can be applied to both skill libraries and tool registries. We evaluate Toollery on the roughly 79K-capability SkillRouter benchmark, BFCL-V4 with over 440 atomic tools, and 3,396 proprietary smart-cockpit requests over 220 tools. Across these settings, Toollery keeps online selection bounded to a compact top-$k$ candidate set and improves recall over ordinary specification retrieval. At a fixed top-10 budget, Toollery improves end-to-end selection on the cockpit dataset, and maintains comparable AST Accuracy on BFCL-V4. These results support Toollery as a practical candidate-compression framework for large and evolving agent capability libraries, while showing that quality and cost gains depend on workload coverage and provider caching.
