---
title: "The Routing Plateau: Understanding and Breaking the Accuracy Limits of LLM Routers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07587"
authors: ["Yifan Lu, Qiyue Zhang, Shenrun Zhang, Zhibo Yu, Zhuang Wang, Hanjie Chen, Jiarong Xing"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.07587v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07587v1 Announce Type: new Abstract: LLM routing has become a popular approach to improve the cost-quality trade-off of LLM services by dynamically selecting a model for each query. Recent work has explored a broad range of routing methods, including clustering-based routers, learned classifiers, pairwise ranking, and confidence-based approaches. Our extensive study of 21 routing methods across five benchmarks reveals a consistent phenomenon that we call the routing plateau: many methods, including kNN, achieve very similar accuracy and converge to a narrow performance range that remains far below the oracle router. Our investigation shows that the plateau is largely caused by a predictability bottleneck: current routers mainly learn global averaged model-performance trends rather than fine-grained query-specific routing signals. As a result, they solve overlapping easy queries but collectively fail on hard queries that require instance-specific routing decisions. We further study how to move beyond the plateau and find that larger training datasets, stronger encoders, and end-to-end fine-tuning can further improve routing accuracy. These findings characterize the common limits of current routing methods and provide insights and actionable directions for the community to build more effective routing systems.
