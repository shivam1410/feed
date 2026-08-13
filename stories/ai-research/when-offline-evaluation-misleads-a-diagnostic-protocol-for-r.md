---
title: "When Offline Evaluation Misleads: A Diagnostic Protocol for Reward and Policy Selection in Delayed-Feedback Contextual Bandits"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.11560"
authors: ["Sang Su Lee, Vineeth Loganathan, Shishir Dash, Vijay Raghavan"]
date: "Thu, 13 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.11560v1"
image: ""
generated: "2026-08-13T19:06:32+05:30"
---

arXiv:2608.11560v1 Announce Type: new Abstract: Personalizing marketing messages with contextual multi-armed bandits (CMABs) drives real business value, yet the objective that ultimately matters - a downstream conversion - is observed only weeks later, too late to drive online learning. Teams therefore train the bandit on a fast proxy reward, and separately must judge whether a contextual bandit is worth its complexity over sending one best message. Settling both decisions with the usual offline checks - a batch off-policy estimate, a marginal arm-discrimination test, a confidence interval - can mislead systematically under delayed feedback. We give an ordered diagnostic protocol that screens a reward-and-policy candidate on two axes, alignment (does optimizing the reward move the north-star?) and learnability (can the bandit identify the reward-optimal policy?), before trusting any reported lift. We validate it where the truth is known - a public off-policy-evaluation benchmark and a controllable synthetic generator - and illustrate it on a deployed large-marketplace push system (where, with five arms and one split, the evidence is directional rather than powered). Two lessons recur. (N1) A single offline number can mis-rank rewards: a denser reward signal gives the bandit more to learn from, so rewards that look tied in a static estimate pull apart once learning happens online. (N2) If you cannot tell in advance which single message is best, a per-user policy partly just avoids betting on the wrong one - that looks like personalization but is really robustness, so a "personalization premium" is easily overstated. Our contribution is methodological rather than algorithmic: the ordered protocol, the two lessons it surfaces, and the end-to-end experience of applying it to a delayed-feedback CMAB.
