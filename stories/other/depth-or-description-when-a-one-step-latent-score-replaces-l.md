---
title: "Depth or Description? When a One-Step Latent Score Replaces Lookahead in Proactive Information Acquisition"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07155"
authors: ["Biswa Sengupta"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07155v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

A proactive agent must decide what to ask before it acts. Exact lookahead values combinations of questions but is expensive and leans on a fitted model; a one-step score is cheap but can miss them. Our main finding: the need for depth often lies in how the hidden cause is described. A one-step score on the label can be blind to an interaction among answers. A score on a suitable latent cause is not, and where that latent encodes the decision it replaces most of depth at a fraction of the search. Described differently, the same problem can defeat the score while exact values do not move, so keep the latent small and check it against exact values. Probabilities learned from one language model's answers do not carry to another unless planning allows for both; those read from tokens are worth only a few labels.
