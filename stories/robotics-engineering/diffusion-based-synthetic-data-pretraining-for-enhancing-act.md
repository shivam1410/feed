---
title: "Diffusion-Based Synthetic Data Pretraining for Enhancing Activity Recognition"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02292"
authors: ["E. Riveros (Institute of Computing, State University of Campinas, Campinas, Brazil), D. Vega-Oliveros (Institute of Science and Technology, Federal University of Sao Paulo, Sao Jose dos Campos, Brazil), A. Soriano-Vargas (Universidad de Ingenieria y Tecnologia, Lima, Peru), A. Rocha (Institute of Computing, State University of Campinas, Campinas, Brazil)"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.02292v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Human activity recognition (HAR) is increasingly important for healthcare, well-being, and daily monitoring ap- plications, for which detecting alimentary activities such as eating and drinking can provide actionable insight into dietary habits and chronic disease management. HAR systems, however, often underperform on subtle and underrepresented classes, limiting their utility in real-world dietary monitoring. This work builds upon CABiGRU, a convolutional architecture with Bidirectional GRU layers, multi-head attention, and residual connections, designed to capture discriminative temporal patterns from smart- watch accelerometer, gyroscope, and magnetometer data. To improve CaBiGRU's generalization and reduce underfitting in the minority class, we leverage synthetic sensor data windows using a diffusion model and adopt a two-stage training strategy: pre-training CABiGRU on synthetic data, followed by fine-tuning on the real-world data. On the DEO (drinking/eating/other) dataset, the proposed pipeline achieves a balanced accuracy of 90.6%, improving over a strong supervised baseline and showing the benefits of diffusion-based synthetic pre-training for recognizing alimentary activities and representing a step forward dealing with unbalanced classes. These results suggest that combining diffusion-generated data with targeted fine-tuning enhances robust recognition of dietary behaviors, supporting more reliable deployment in healthcare and nutrition-monitoring settings.
