---
title: "EHHN: An Event-driven Heterogeneous Hypergraph Network for Object-Centric Next Activity Prediction"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01785"
authors: ["Jiaxing Wang, Kaitao Chen, Zhubin Han, Chenyu Hou, Bin Cao, Jing Fan, Ji Zhang"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.01785v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01785v1 Announce Type: new Abstract: Next activity prediction helps service-oriented processes anticipate upcoming steps before delays, exceptions, or service-level risks occur. Most existing methods assume classical single-case event logs, whereas real service processes often involve events shared by multiple typed business objects. Object-centric event logs (OCELs) capture such interactions, but current predictors remain limited. Flattening-based approaches lose cross-object context, and native OCEL graph-based approaches encode multi-object events through pairwise relations. Existing models also do not jointly capture event-driven object state changes, inter-event timing, and global execution patterns. We propose EHHN, an Event-driven Heterogeneous Hypergraph Network for object-centric next activity prediction. EHHN represents each prediction prefix as a heterogeneous hypergraph, where event--object hyperedges bind retained co-participating objects and a lifecycle hyperedge groups the primary object's observed lifecycle events. Based on this representation, EHHN uses a dual-stream architecture in which a micro-spatial stream models event-driven object-state evolution and a macro-evolution stream captures temporal dynamics using retrieved global prototypes. The two streams are fused to predict the next activity. Experiments on four public OCEL benchmarks against nine baselines show that EHHN achieves the best accuracy and macro F1-score on all datasets, with improvements of up to 8.1 and 12.4 percentage points over the strongest baselines. Compared with the strongest OCEL-native graph baseline, EHHN also reduces peak GPU memory by up to 24 times. Code is available at https://github.com/chenkaitao1112/EHHN.
