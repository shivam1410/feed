---
title: "Discovering Lattice Reduction Strategies via Self-Play"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.15301"
authors: ["Mohamed Malhou, Kristin Lauter, Ludovic Perret"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2606.15301v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.15301v1 Announce Type: new Abstract: The Lenstra-Lenstra-Lov\'asz (LLL) algorithm is a seminal contribution to computer science used for lattice basis reduction, yet its polynomial-time outputs produce bases that are far from optimal as the dimension grows. We show that deep reinforcement learning can discover strictly superior, generalizable reduction strategies by interacting with the primitive action space of LLL. We formulate lattice reduction as a single-player Markov Decision Process (MDP) and train a deep residual network using an AlphaZero-style self-play pipeline augmented with adaptive-horizon MCTS (Monte Carlo Tree Search), which couples multi-step network predictions with an entropy-gated expansion mechanism. The resulting policy, DeltaStar, is trained exclusively on small $8$-dimensional $q$-ary lattices and requires fewer primitive row operations than LLL. Crucially, it generalizes zero-shot to unseen moduli and higher dimensions up to $n=32$ without retraining.
