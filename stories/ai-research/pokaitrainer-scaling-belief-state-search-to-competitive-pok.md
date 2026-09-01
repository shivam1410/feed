---
title: "PokaiTrainer: Scaling Belief-State Search to Competitive Pok\\'emon VGC"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.29197"
authors: ["Max Yu"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.29197v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.29197v1 Announce Type: new Abstract: Decision-time equilibrium search carried poker to superhuman play, but it has so far relied on tractable subgames: a handful of actions per decision, chance confined to card deals, one player moving at a time. Competitive Pok\'emon in its official doubles format (VGC) breaks all three assumptions at once. Both players act simultaneously from joint menus in the hundreds, each joint action resolves to hundreds of stochastic outcomes, and the opponent's reserves and stat allocations are hidden. We set out to build a strong VGC agent and report what that took. PokaiEngine, our Rust battle engine, enumerates a joint action's full weighted outcome distribution in one pass, at ${\sim}99\%$ parity with Pok\'emon Showdown and a fraction of the cost of sampling it. On top of the engine, PokaiTrainer adapts Student of Games to this scale, solving every decision as a Bayesian matrix game over public belief states and growing subgames under an explicit compute budget. On the live Showdown best-of-three ladder, the agent wins 59% of 150 sets against a human field averaging ${\sim}1320$ Elo. It settles into a 1350-1400 Elo band, and at its peak briefly entered the format's top 500.
