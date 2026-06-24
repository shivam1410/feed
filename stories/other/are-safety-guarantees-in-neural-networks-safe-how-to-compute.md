---
title: "Are Safety Guarantees in Neural Networks Safe? How to Compute Trustworthy Robustness Certifications"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.23858"
authors: ["Merkouris Papamichail, Konstantinos Varsos, Giorgos Flouris, Jo\\~ao Marques-Silva"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.23858v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.23858v1 Announce Type: new Abstract: A primary challenge in AI safety is the existence of adversarial examples -- slightly distorted inputs that cause a neural network (NN) to misclassify. To mitigate this problem, recent research focuses on the computation of robustness certifications, which, for a given input, determine the largest distortion the input may receive without breaking the network's prediction. Robustness certifications can be interpreted as an axis-aligned hyper-rectangle (multi-dimensional intervals). Most existing approaches focus on maximizing the certification's volume, but recent intractability results prohibit the computation of volume-optimal certifications in reasonable time. We introduce the apothem measure and show how to compute apothem-optimal certifications in a linear number of calls to a NN verifier (oracle) w.r.t. the input domain's diameter. Moreover, we prove that we cannot have a volume-optimal, oracle-based algorithm, even if we discard the oracle costs. Also, we introduce dual certifications -- an interval including all instances of a class -- thus providing apothem-minimum upper bounds to a robustness certification. Further, we present the ParallelepipedoNN system, which we evaluate on the standard MNIST and Fashion MNIST benchmarks. A preliminary comparison with existing work on the same datasets reveals at least two-fold improvement w.r.t. the minimum edge length.
