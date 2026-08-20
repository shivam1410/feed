---
title: "From Abductive Explanations to Global Logical Rules for Node Classification in SGCs"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.17103"
authors: ["Bryan Lima Cavalcante, Thiago Alves Rocha"]
date: "Thu, 20 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.17103v1"
image: ""
generated: "2026-08-20T19:00:16+05:30"
---

arXiv:2608.17103v1 Announce Type: new Abstract: Graph Neural Networks (GNNs) have achieved remarkable performance in node classification tasks, motivating growing interest in methods capable of explaining their predictions. Recent logic-based approaches, such as LogicXGNN, derive global logical rules for Graph Neural Networks (GNNs) from collections of explanatory subgraphs. While informative, these subgraphs may contain redundant structural information that is specific to individual nodes, potentially limiting the generality of the extracted rules. In this work, we propose a logic-based framework for node classification in Simple Graph Convolution (SGC) networks that uses minimal abductive explanations as an intermediate representation for rule extraction. For each node, we compute a minimal set of node-feature pairs sufficient to preserve the predicted class. These explanations are then used to train decision trees from which global logical rules are extracted. Experiments on benchmark datasets show that the proposed framework produces compact global rules while maintaining high fidelity to the original SGC model.
