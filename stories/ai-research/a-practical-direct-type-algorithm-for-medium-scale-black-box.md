---
title: "A practical DIRECT-type algorithm for medium-scale black-box global optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09796"
authors: ["Linas Stripinis, Remigijus Paulavi\\v{c}ius"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.09796v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09796v1 Announce Type: new Abstract: The DIRECT algorithm is a deterministic global optimization method known for its versatility and balanced exploration-exploitation strategy. However, DIRECT-type algorithms are primarily effective for low-dimensional problems and often exhibit slow convergence as dimensionality increases, limiting their applicability to more complex optimization tasks. To address this limitation, this paper introduces X-DTC-GL, a novel DIRECT-type algorithm that incorporates dynamic partitioning and hybridization techniques. The dynamic partitioning approach adaptively refines the search space based on local one-dimensional surrogate models, enabling rapid subdivision of promising hyper-rectangles. The hybridization strategy selectively employs a hill-climbing method to exploit promising regions identified by the surrogate models. Extensive experiments on four diverse benchmark suites demonstrate that X-DTC-GL significantly outperforms existing DIRECT-type baselines, achieving improvements of ~12% in solvability and ~27% in solution quality. Performance-profile analyses indicate the fastest convergence on up to ~40% of instances, the best runtime performance on ~17% of problems, and competitive overall execution times. By improving performance within the partition-based framework, these advances strengthen the algorithm's competitiveness in state-of-the-art black-box optimization.
