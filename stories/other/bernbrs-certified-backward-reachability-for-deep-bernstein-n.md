---
title: "BernBRS: Certified Backward Reachability for Deep Bernstein Neural Networks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.22083"
authors: ["Ibrahim Albool, Yasser Shoukry"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.22083v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

Ensuring the safety of complex neural network systems requires mathematically rigorous verification. While backward reachability analysis is a critical tool for identifying safe initial states, computing tight, formal bounds remains notoriously difficult to scale. Recent advancements have demonstrated that DeepBern-Nets neural networks utilizing Bernstein polynomial activation functions possess advantageous mathematical properties that enable exceptionally fast and tight forward reachability analysis. Building upon this efficiency, this paper introduces BernBRS, a highly accurate and scalable framework for the backward reachability analysis of DeepBern-Nets. BernBRS simultaneously computes certified inner and outer approximations of the Backward Reachable Set (BRS). Rather than relying on single convex bounding, our method intelligently refines a cover of the input space by analyzing activation patterns, splitting the input domain precisely where an exact decomposition of the relaxation gap predicts the most significant reduction in error. This targeted refinement enables high levels of scalability to highly complex and massive architectures that remain intractable for existing certified methods. We demonstrate the efficacy of our framework on high-dimensional models, including a linearized closed-loop approximation of the Half-Cheetah controller and a distilled Bernstein student of a Transformer block and we empirically study how these model-level guarantees relate to the original Half-Cheetah and TinyBERT classifier, respectively.
