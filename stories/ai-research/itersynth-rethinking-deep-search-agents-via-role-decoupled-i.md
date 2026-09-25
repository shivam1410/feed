---
title: "IterSynth: Rethinking Deep Search Agents via Role-Decoupled Iterative Synthesis"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.29444"
authors: ["Xingyu Wu", "Yuchen Yan", "Zhengxi Lu", "Siqi Chen", "Xin ZHANG", "Aiting Liu", "Chao Deng", "Jie Liu", "Jin Ma", "Jian Shao", "Jun Xiao", "Yongliang Shen"]
date: "2026-09-23T20:00:00.000Z"
score: 70
guid: "2609.29444"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.29444.png"
generated: "2026-09-25T19:08:22+05:30"
---

Deep search requires LLM agents to decompose complex queries, search for evidence, and synthesize grounded answers, yet existing ReAct-style agents suffer from two limitations: role coupling, where one policy must handle planning, evidence use, and synthesis; and context accumulation, where growing search histories introduce noise and obscure useful information. To address these issues, we propose IterSynth, a role-decoupled and summary-based paradigm that alternates between a Planner for identifying information needs and a Synthesizer for integrating evidence into an evolving summary state. This design separates planning from synthesis while using the summary as the persistent state of search, reducing both capability coupling and context noise. To train IterSynth effectively, we further introduce Role-Decoupled Policy Optimization (RDPO) for reinforcement learning, which combines terminal outcome rewards with turn-level rubric evaluations and computes role-specific advantages for more precise credit assignment. Experiments on five long-horizon deep-search benchmarks such as BrowseComp and Xbench-DS show that IterSynth-8B achieves an average score of 50.7, surpassing the strongest prior leq8B agent by +4.2\%. Moreover, IterSynth serves as a model-agnostic prompting paradigm, delivering substantial zero-shot gains over ReAct and similar prompting paradigms on frontier proprietary models.
