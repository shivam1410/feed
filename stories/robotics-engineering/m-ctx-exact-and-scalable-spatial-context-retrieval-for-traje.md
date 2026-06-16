---
title: "M-CTX: Exact and Scalable Spatial Context Retrieval for Trajectory Analytics"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.15244"
authors: ["Kun Ma, Qilong Han, Chengjing Song, Jingzheng Yao, Xiao Han, Yuee Zhou, Changmao Wu"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.15244v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.15244v1 Announce Type: new Abstract: Modern trajectory predictors increasingly condition on external spatial context, such as map geometry, signed distance fields (SDFs), and nearby moving agents. While this context improves prediction quality, constructing it for every training anchor has become a hidden systems bottleneck. In a representative maritime AIS pipeline, spatial context construction requires roughly 17 CPU-days for a 5.48M-anchor corpus, dominating the cost of the downstream predictor. We present M-CTX, an exact and scalable spatial context-retrieval framework for trajectory analytics. M-CTX recasts context construction as an ingest-once, query-many spatial database workload and replaces three brute-force stages -- OSM range retrieval, SDF computation, and moving-vessel neighbour lookup -- with composable, index-backed operators. Its learned range-index backend, BR-LZ, provides recall-complete MBR-overlap range retrieval and reduces candidate amplification by 1.1x--2.7x relative to global-expansion one-curve baselines. Across four maritime regions, eight baseline systems, synthetic workloads with up to 40M spatial features, and 10^7-record AIS streams, M-CTX reproduces the reference context exactly. On the 5.48M-anchor corpus, it reduces context construction from about 17 CPU-days to 1.8 hours, a measured 226x end-to-end speed-up. An optional storage mode further compresses SDF context by 64x with only a 0.04 m ADE change. These results establish exact spatial context retrieval as a first-class database problem in modern trajectory analytics. Code and datasets are publicly available at https://github.com/mark000071/M-CTX-Traj.
