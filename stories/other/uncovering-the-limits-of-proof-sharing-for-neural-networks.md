---
title: "Uncovering the Limits of Proof Sharing for Neural Networks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.19351"
authors: ["Kanak Das, Shubham Ugare, Bor-Yuh Evan Chang, Sasa Misailovic, Gagandeep Singh, Manu Sridharan"]
date: "Fri, 21 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.19351v1"
image: ""
generated: "2026-08-21T19:00:17+05:30"
---

arXiv:2608.19351v1 Announce Type: new Abstract: Robustness verification of neural networks is increasingly important, due to their use in many critical domains. In certain scenarios, proof sharing has been shown to accelerate incomplete verification techniques by reusing intermediate-layer abstract states, or templates, across queries. However, questions remain as to the robustness of template-based acceleration across varying network architectures, properties, datasets, and training methods. In this work, we perform a systematic study of the effectiveness of template-based acceleration and its limits. Our study shows that template subsumption rates can vary widely across scenarios. We present a novel metric of jointly stable neurons to explain this variation, showing that in some cases template-based techniques are very unlikely to provide any speedup. Then, we present FastCert, a novel technique for automatically distributing templates across neural network layers to increase performance impact, eschewing templates entirely if they are unlikely to produce a speedup. Across a large set of covering-design based $L_0$-verification tasks, FastCert achieved an average speedup of 1.13x over an extant template-based reuse technique.
