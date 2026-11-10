---
title: "HexIt: Learning Hexahedral Block Decomposition with Expert Iteration on Combinatorial Maps"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10433"
authors: ["Arjun Narayanan, Per-Olof Persson"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10433v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Decomposing a polyhedral solid into a few well-shaped hexahedral blocks is a long-standing open problem in mesh generation. We cast it as a sequential decision problem on a 3-dimensional generalised map: an agent splits edges, faces and volumes with three insert operations until every cell is a hexahedron and the mesh passes a quality threshold, and a policy that convolves over the map's involutions chooses each insert. A successful decomposition takes over a hundred decisions, and a uniformly random policy never finds one. We clone a policy from constructed decompositions and improve it by expert iteration. On held-out chamfered solids that share no boundary topology with the cloning data, the final policy solves an expected $94.4\%$ in $20$ samples, and expert iteration raises the best-of-20 solve rate on large chamfered solids from $0.203$ to $0.355$. At matched compute, PPO, GRPO and VinePPO updates all make the cloned policy worse.
