---
title: "Coupling-Aware Reinforcement Learning for Co-Evolving Graph Games"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28351"
authors: ["Mina Kim, Guanghui Lan, Benoit Montreuil"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2611.28351v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Building hydrogen station networks, electric vehicle charging grids, or vaccine distribution systems requires coordinating two separately operated graphs, demand-side facilities and the supply-side networks they depend on, where each operator's payoff depends on the other's choices. We formalize this as the Co-Evolving Graph Game (CEGG), a setting that sits between facility location, interdependent-network analysis, and graph-based multi-agent reinforcement learning (MARL) but is not jointly addressed by any of them. We propose Cross-Graph Attention with Policy Mirror Descent (CGA-PMD), pairing cross-graph attention, which lets each agent read only the partner-graph nodes structurally coupled to its own, with a policy mirror descent update for stable training. Across three reward domains and a range of practical network scales, we find that the structure of the coupling selects which method wins: at small scale most methods are competitive, but as scale grows or coupling becomes irregular, CGA-PMD is the one method that stays reliable: it attains the highest success count on each of five real city networks, while own-only, unmasked-attention, and Proximal Policy Optimization (PPO)-based variants degrade in distinct ways. Our theoretical analysis addresses the optimizer side: the Kullback-Leibler (KL)-regularized update admits an iteration-uniform cumulative drift bound, whereas the clip update admits no such bound on the iterations where the clip does not bind. The implementation is available at https://github.com/Mina-Kim-Github/cegg-cga-pmd.
