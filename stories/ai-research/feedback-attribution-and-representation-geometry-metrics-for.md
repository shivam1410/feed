---
title: "Feedback Attribution and Representation Geometry: Metrics for Comparing Individual and Shared Rewards in MARL"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16524"
authors: ["Tasha Pais, Richard Higgins"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2607.16524v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16524v1 Announce Type: new Abstract: Cooperative multi-agent RL systems routinely use team-averaged rewards, a feedback-attribution choice that gives each agent the team outcome regardless of its individual contribution. We ask whether this leaves a measurable signature, geometric or behavioral, on learned representations. We propose EffRank/$n$ (effective rank normalized by agent count) and $D_\text{act}$ (mean pairwise KL divergence between agents' action distributions) as low-overhead diagnostics for reward-attribution effects, then test them on competent MAPPO agents in SMACv2 \texttt{protoss\_5\_vs\_5}, where unit type is encoded in the observation. In an observation $\times$ reward-attribution comparison (unit type observed vs.\ masked; individual damage-contribution reward vs.\ shared team reward), geometry follows observation rather than reward. With unit type observed, shared and individual rewards have similar EffRank/$n$ ($0.31{\pm}0.03$ vs.\ $0.29{\pm}0.02$) and probe accuracy ($0.75{\pm}0.05$ vs.\ $0.73{\pm}0.05$, both $\gg 1/3$ chance), while $D_\text{act}$ leans higher under individual rewards ($1.23{\pm}0.06$ vs.\ $1.07{\pm}0.20$). Masking unit type cuts the above-chance probe signal by more than half, to $0.49$ in both reward arms. In short: individually rewarded agents are competent and separable by role, but on SMACv2 the observation explains the geometry and reward attribution shows up mainly in behavior. Thus geometric diagnostics must control for observed role information and test persistent roles that are not directly observed. EffRank/$n$ and $D_\text{act}$ add $<$5\% overhead.
