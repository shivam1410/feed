---
title: "OpenBlock: Constructive and Verified Content Generation for Adaptive Tile-Matching Games"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22177"
authors: ["Jiang Jun"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.22177v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22177v1 Announce Type: new Abstract: Tile-matching puzzle games serve hundreds of millions of players, yet the content-generation algorithms that decide which pieces to present at each turn remain proprietary, and no open platform exists for studying adaptive difficulty in this genre. We present an adaptive tile-matching platform whose central algorithmic contribution is a dual-track content-generation architecture: a deterministic rule-based generator that is always available, and an optional learned generator, both subject to a common verification gate that establishes, by exhaustive sequential-placement search, that every delivered piece set is fully placeable so the learned track can never degrade the constructive-feasibility guarantee of the rule track. A self-play reinforcement-learning placement agent, supervised by auxiliary tasks that expose per-shape placeability to shared representations, is used to diagnose the game's dominant failure mode: at high board fill, long-bar pieces lose the majority of their legal placements. Across 234,000+ self-play episodes the agent reaches a 35.6\% win rate (median score 4,200), and controlled simulation shows that at board fill rates of 70--75\%, 33--56\% of long-bar pieces have no legal placement, while spawn difficulty distributions are statistically indistinguishable between won and lost games---evidence that board-state degeneration, not content difficulty, drives late-game failure. Head-to-head ablations show that per-shape placeability supervision---not aggregate difficulty features---drives the representation gain, and a 14-day online gray rollout (48,000 players; sample-ratio verified, CUPED-adjusted) lifts day-1 retention by 1.8 percentage points and session duration by 7\% over the rule track alone, quantifying the neural track's asymmetric upside in live play.
