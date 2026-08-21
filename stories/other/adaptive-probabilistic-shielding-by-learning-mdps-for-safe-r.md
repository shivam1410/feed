---
title: "Adaptive Probabilistic Shielding by Learning MDPs for Safe Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.19836"
authors: ["Astrid Horn Brorholt (Aalborg University, Aalborg, Denmark), Maris F. L. Galesloot (Radboud University, Nijmegen, Netherlands), Nils Jansen (Radboud University, Nijmegen, Netherlands), Kim Guldstrand Larsen (Aalborg University, Aalborg, Denmark), Christian Schilling (Aalborg University, Aalborg, Denmark)"]
date: "Fri, 21 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.19836v1"
image: ""
generated: "2026-08-21T19:00:17+05:30"
---

arXiv:2608.19836v1 Announce Type: new Abstract: Probabilistic shielding is a technique for safe reinforcement learning (RL). Typically, a static observer -- called the shield -- constrains the learning agent's actions to those for which acting safely remains feasible. Traditionally, the shield is computed from the transition probabilities of the underlying Markov decision process (MDP). Thus, this technique is not applicable when the MDP model is not given a priori, which, unfortunately, is the case in typical RL applications. In this paper, we study the problem of computing a shield in the setting where the transition graph of the MDP is known, but the transition probabilities are unknown. Our approach integrates probabilistic shielding with online model learning: as the RL agent explores the environment, we estimate the transition probabilities. From this estimate, we compute a shield. While the shield may be conservative initially, it adapts as the model estimate becomes more precise. Thus, the shield improves in tandem with the RL agent. This paradigm of adaptive probabilistic shielding raises a number of challenges, such as when to recompute the shield and how to balance between exploration and safety during learning. We empirically evaluate multiple variants of this paradigm across several environments.
