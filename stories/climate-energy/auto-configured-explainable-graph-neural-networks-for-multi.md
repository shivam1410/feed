---
title: "Auto-Configured Explainable Graph Neural Networks for Multi-Site Pollution Prediction"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24978"
authors: ["Abdelkader Dairi, Fouzi Harrou, Ying Sun"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.24978v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24978v1 Announce Type: new Abstract: Accurate particulate matter (PM) prediction is crucial for mitigating air pollution. Graph Neural Networks (GNNs) effectively model spatiotemporal dependencies, but predefined graphs limit adaptability, and some datasets complicate learning. This study introduces a graph construction method based on a confusion matrix from a supervised learning process to dynamically capture inter-class relationships. Additionally, a hybrid loss function that combines energy distance and Huber loss is applied to address the vanishing gradient problem and improve learning stability. The approach is evaluated using air pollution data from the University of Utah AirU Pollution Monitoring Network in Salt Lake City, UT, with five GNN models: Graph Convolutional Networks (GCNs), Simple Graph Convolutional Networks (SGConv), Graph Isomorphism Networks (GINs), Graph Attention Networks (GATs), and GraphSage. The experimental results of single- and multistep predictions confirm that GraphSage achieves the highest accuracy in predicting the concentrations of PM${1}$, PM${10}$, and PM$_{2.5}$ over different time horizons. Furthermore, {\color{black} GNNExplainer (Graph Neural Network Explainer) and PGExplainer (Probabilistic Graph Explainer)} are applied to interpret feature importance and graph structure, ensuring model transparency. Results show improved prediction accuracy, with GNN models outperforming traditional machine learning \textcolor{black}{and deep learning models (i.e., Prophet, Long short-term memory, Gated recurrent units} in air pollution forecasting.
