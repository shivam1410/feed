---
title: "Model or Harness? An Interaction-Centric Taxonomy for Localizing Agent Failures"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.28802"
authors: ["Harsh Raj", "Vipul Gupta", "Anas Mahmoud", "Razvan-Gabriel Dumitru", "Darvin Yi", "Aakash Sabharwal", "Yunzhong He"]
date: "2026-07-29T20:00:00.000Z"
score: 68
guid: "2607.28802"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.28802.png"
generated: "2026-08-05T20:00:21+05:30"
---

Existing evaluations often reduce agent failures to system-level outcomes, obscuring where the fault originated and which intervention would improve the agent system. This creates a repair-assignment problem: the same visible failure may call for model post-training, harness engineering, environment redesign, or benchmark repair depending on its source. Because agent behavior emerges from interactions among models, harnesses, users, tools, memory, and environments, outcome-level labels are often insufficient for improvement. Most failure taxonomies do little to resolve this problem because they are benchmark-specific and lack a shared structure. We introduce an interaction-centric taxonomy that localizes failures to the interactions in which they originate and identifies the responsible component. It organizes 41 failure modes by assigning each to an edge between two components and a fault side indicating where the repair belongs. This makes the taxonomy actionable: model-side failures identify targets for post-training, harness-side failures point to scaffolding and tool-integration fixes, and environment or grader failures reveal evaluation conditions requiring redesign. The schema applies across agent architectures, from coding assistants to long-horizon personal assistants and multi-agent systems. We ground the taxonomy in worked examples from public benchmarks, model system cards, published reports, and logged agent trajectories, and evaluate its reproducibility using independent reasoning agents as judges. Across four frontier models, the strongest judge reaches Cohen's κ=0.76 against human category labels, suggesting that the categories capture shared structure rather than annotator-specific preferences.
