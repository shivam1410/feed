---
title: "Boundary Representation-Driven Graph Transformer Modeling for Machining Operation Sequencing"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31661"
authors: ["Fatemeh Elhambakhsh, Gaurav Ameta, Aditi Roy, Hyunwoong Ko"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.31661v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Machining process planning is inherently complex due to the interdependence between part geometry, machining operations, and evolving manufacturable states. Traditional approaches rely heavily on expert knowledge and rule-based systems, limiting scalability and automation. While recent machine learning methods have shown promise, most operate on simplified geometric representations, such as voxels or hand-crafted features, which fail to fully exploit the rich geometric and topological information encoded in Boundary Representation (B-Rep) models. In this work, we propose a graph transformer-based framework for geometry-to-sequence learning that directly predicts machining operation sequences from B-Rep design geometry. The proposed method constructs topology-aware graphs from B-Rep entities, where faces and their adjacencies are encoded as node and edge features capturing both geometric and relational information. A graph neural network encoder learns geometry-aware embeddings, which are then used to condition a dual-decoder transformer that autoregressively generates machining operation sequences. This formulation enables the model to capture both operation-type prediction and process-level ordering constraints directly from design geometry, without requiring intermediate feature extraction or machining-state representations. Experiments on a dataset of 2,991 synthetic machined parts demonstrate strong performance, achieving 95% accuracy for main operation prediction, 64% accuracy for sub-operation prediction, and 93% accuracy for sequence length prediction. Further analysis shows that the model effectively captures precedence relationships and geometry-dependent constraints inherent in machining processes. These results highlight the potential of B-Rep-driven graph learning for scalable and automated machining process planning.
