---
title: "Bootstrap-Conditioned Action Selection with Tabular Foundation Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.06559"
authors: ["Devansh Gupta, Shiv Tavker, Dmitry Efimov, Suchitra Sathyanarayana, Gitanjali Bhutani, Boris N. Oreshkin"]
date: "Mon, 10 Aug 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2608.06559v1"
image: ""
generated: "2026-08-10T19:05:52+05:30"
---

arXiv:2608.06559v1 Announce Type: new Abstract: Contextual bandits offer a natural framework for sample-efficient personalization, but practical deployment remains difficult under sparse, biased interaction data, unreliable uncertainty estimates, and severe cold starts. We study whether pre-trained tabular foundation models with in-context learning can be turned into randomized policies for online decision making. We propose BC-ICL (Bootstrap-conditioned action selection using ICL), which at each round draws a bootstrap resample of the interaction history, conditions a frozen pre-trained ICL model on that resample, scores all actions, and selects the action with the highest sampled score. We further introduce an arm-context conditioning architecture that promotes shared statistical strength across actions and helps avoid common bootstrap failure modes of isolated-arm bandits. Empirically, this policy delivers strong early-round regret and regret performance on standard contextual bandit suites, outperforming established baselines under a strict online protocol.
