---
title: "A Graph-Based Control Interface for Traffic Signals on Heterogeneous Road Networks"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.21831"
authors: ["Bertil Braun"]
date: "Mon, 27 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.21831v1"
image: ""
generated: "2026-07-27T19:07:27+05:30"
---

arXiv:2607.21831v1 Announce Type: new Abstract: We present a traffic-signal control interface in which a shared graph neural network assigns scores to individual traffic movements. Each junction converts these scores into its own variable-sized set of legal signal phases using a deterministic incidence matrix. Directed corridor nodes provide traffic context, while movement nodes represent controlled input-to-output paths through junctions. Typed mean aggregation produces one scalar per movement; phase definitions and signal timing remain outside the learned network. This makes graph size and junction-specific action count independent of the learned parameter shapes. PPO experiments evaluate the interface on unseen synthetic grid geometries, altered signal coverage, and five heterogeneous city graphs. The policies retained performance across unseen geometries within the synthetic grid family, while changes in signal coverage exposed sensitivity to a signal-coverage distribution shift. A single trained city-policy instance executed across all five city graphs, with heterogeneous outcomes. These results provide feasibility evidence rather than a general estimate of transfer to arbitrary road networks.
