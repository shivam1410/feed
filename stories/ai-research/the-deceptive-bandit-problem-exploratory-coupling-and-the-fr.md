---
title: "The Deceptive Bandit Problem: Exploratory Coupling and the Fragility of Multi-Agent Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09120"
authors: ["Michael Tang, Mahmoud Abdelgalil, Jorge I. Poveda"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2610.09120v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Randomized exploration is central to bandit learning, multi-agent reinforcement learning, and zeroth-order policy search, yet its independence and privacy are usually only treated as technical assumptions. We show that these properties are critical for security purposes and demonstrate how an adversarial agent can exploit privileged information on another agent's exploration. We analyze a deceiver-victim pair in the minimal two-player strongly monotone setting, where a deceptive player obtains leaked signals that are merely correlated with the victim's exploration. We show that, by coupling their own exploratory action with this information, the deceptive player injects an externality that steers the learning dynamics to a new steady state, called the deceptive Nash equilibrium (DNE). We prove that the deceptive bandit learning (DBL) dynamics converge to an arbitrarily small neighborhood of the DNE while retaining optimal convergence rates. Interestingly, our analysis attains these optimal rates while relaxing second-order smoothness conditions from standard bandit optimization literature. We characterize conditions under which deception strictly shifts the steady state and its effect on the deceiver's cost, illustrating the results in a resource-allocation game.
