---
title: "Solver-Guided Reasoning for Mixed-Equilibrium Strategies"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.06741"
authors: ["Han Wang, Philippe Beardsell, Boning Li, Aaron Sasmita, Shuai Li, Hongyuan Zha, Baoxiang Wang"]
date: "Mon, 10 Aug 2026 00:00:00 -0400"
score: 69
guid: "oai:arXiv.org:2608.06741v1"
image: ""
generated: "2026-08-10T19:05:52+05:30"
---

arXiv:2608.06741v1 Announce Type: new Abstract: Reasoning in large language models (LLMs) is often grounded in human text, human demonstrations, and human-generated rationales. For equilibrium reasoning in complex games, however, relying on human data can be suboptimal. In fact, human play is often guided by intuition and heuristics and can deviate substantially from game equilibrium. This discrepancy is amplified in games with mixed-strategy equilibria, where human data is heavily biased toward pure strategies. Consequently, conditioning LLMs on this data yields weak game strategies. To grant LLMs the reasoning capacity in games, in this work, we study how to elicit equilibrium play using solver output. We propose Mixed-Strategy Decision Tree (MDT), which articulates the silent optimality of the equilibrium into sparse strategic rules that both humans and LLMs could understand. Using solver output rather than human annotation allows us to extend the input to arbitrarily new states and continuations. We instantiate this study on No-Limit Texas Hold'em by querying a solver oracle for over \textbf{250 million mixed-strategy decisions}; MDT together with other techniques \textbf{reduces the $\ell_1$ distance to the equilibrium by $52.6\%$} across $8$ different LLM configurations. A Route-only ablation tests the incremental contribution of the shadow-based contrast, while complete River-endgame and Liar's Dice experiments evaluate strategic fidelity and portability beyond the original NLH communication setting.
