---
title: "EASTAR: Event-Anchored Semantic and Task-Adaptive Region Representation Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.14990"
authors: ["Peng Liang (College of Applied Science, Shenzhen University, Shenzhen, China), Genan Dai (School of Artificial Intelligence, Shenzhen Technology University, Shenzhen, China), Bowen Zhang (School of Artificial Intelligence, Shenzhen Technology University, Shenzhen, China)"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.14990v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Urban region representation learning supports a wide range of urban analytics tasks by encoding regional functions and interactions, with human mobility serving as a central signal because it directly captures inter-region interactions. However, most mobility-based methods learn from aggregated origin-destination matrices, where trips driven by different activity purposes are mixed into purpose-agnostic interaction patterns. Although static urban attributes such as POIs and land use can enrich region-level semantics, they do not explicitly ground mobility interactions in activity-purpose signals. As a result, downstream adaptation is often performed over entangled embeddings, making it difficult to select task-relevant functional semantics. To address these limitations, we propose EASTAR, an event-anchored and task-adaptive framework for urban region representation learning. EASTAR treats offline activity events as sparse semantic anchors and uses them to factorize aggregated mobility representations into multiple purpose-related semantic channels. It further introduces free channels to capture latent mobility patterns not covered by event data and a global channel to preserve overall spatial structure. To adapt the learned channel space to different downstream objectives, EASTAR designs a task-adaptive prompt router that initializes task-channel relevance from LLM-derived priors and refines the routing weights through downstream supervision. Experiments on two real-world urban datasets across four prediction tasks show that EASTAR consistently outperforms representative baselines, achieving up to 39.15% reduction in MAE. Ablation and interpretability analyses further demonstrate the effectiveness of event anchoring, semantic channel construction, and task-adaptive routing.
