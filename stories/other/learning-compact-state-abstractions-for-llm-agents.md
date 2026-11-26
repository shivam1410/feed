---
title: "Learning Compact State Abstractions for LLM Agents"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31800"
authors: ["Yaswanth Chittepu, Raghavendra Addanki, Anup Rao, Branislav Kveton, Scott Niekum"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.31800v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

LLM agents commonly use the full interaction history as a proxy for state, retaining all past observations and actions regardless of whether they remain relevant. We instead ask what information an agent actually needs to carry forward. We define agent state as a compact abstraction of interaction history that preserves the competence of a fixed reference agent, with the minimal such abstraction as the ideal. Because matching the reference agent's behavior is unnecessarily restrictive and difficult for black-box policies, we define sufficiency through task performance rather than behavior matching. We represent state abstractions as deterministic recursive programs and search over them using an LLM-guided genetic algorithm. Across ALFWorld and ScienceWorld, the learned abstractions preserve near-reference task success while reducing mean policy input by up to 71% and 57%, respectively. The resulting programs are directly inspectable, providing an explicit account of what information is retained, updated, and discarded during interaction.
