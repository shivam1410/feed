---
title: "Graph Domain Adaptation Does Not End with Representation Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25692"
authors: ["Ziqian Liu, Yongxue Xu, Enze Zhang, Jiaqi Zhang, Hao Wang, Maolin Wang"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.25692v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25692v1 Announce Type: new Abstract: Graph domain adaptation (GDA) transfers knowledge from a labeled source graph to an unlabeled target graph under shifts in both node attributes and graph structure. Existing methods primarily adapt graph representations through propagation redesign, distribution alignment, or source-to-target transition modeling, but still rely on a single graph-propagating path for target prediction. This leaves open whether an adapted graph representation exhausts the predictive evidence available in the target domain, since the graph-aware expert and graph-free local expert may exhibit different failure modes under topological shifts. To address this limitation, we propose EviGDA, an Evidence-Augmented Graph Domain Adaptation framework that complements graph representation adaptation with a graph-free local expert. The graph-aware expert performs message passing and entropy-aware marginal alignment, while the graph-free local expert learns solely from source node features and labels without graph propagation or target alignment. The two experts are optimized independently and combined only at inference through a task-level constant probability mixture, preserving complementary evidence without joint training, learned routing, or target pseudo-labels. Extensive experiments on ten datasets and 16 transfer tasks show that EviGDA outperforms state-of-the-art baselines.
