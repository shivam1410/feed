---
title: "Machine Learning Modeling for Real-Time Melt Pool Monitoring in Laser Powder Bed Fusion Additive Manufacturing: A Hybrid Approach"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.23851"
authors: ["Inioluwa Emmanuel, Zhuo Yang, Ho Yeung, Xinyao Zhang"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.23851v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.23851v1 Announce Type: new Abstract: This work investigates the implementation of artificial intelligence and machine learning (AI/ML) for real-time monitoring in laser powder bed fusion (LPBF) additive manufacturing. We developed a binary image classification framework for distinguishing normal and abnormal melt pool images using a balanced dataset of 1,200 images collected from Nickel superalloy 625 on the NIST AMMT platform. The study evaluates accuracy and inference time based on control requirements and hardware limitations of open-architecture LPBF machines. We benchmark three transfer learning architectures (ResNet50, EfficientNetB0, and MobileNetV2) against two Random Forest approaches: one trained on EfficientNetB0 feature embeddings (hybrid) and one trained on raw pixel features (baseline). Images are stratified into 80/20 train-test splits, with a further 90/10 validation split on the training set, and undergo standardized resizing, normalization, and label-preserving data augmentation to emulate realistic process variability. Each model is evaluated using accuracy, precision, recall, F1 score, and area under the receiver operating characteristic curve (AUC), along with training time, inference latency, and CPU & GPU usage to capture deployability constraints relevant to factory-floor monitoring. The hybrid EfficientNetB0-plus-Random Forest approach achieves the best performance on the held-out test set, with an F1 score of 0.9451, accuracy of 0.9458, and AUC of 0.9904, while maintaining sub-millisecond per-image inference (1.15 ms). In contrast, purely deep learning models exhibit significantly higher inference times with lower accuracy. These results demonstrate that combining pre-trained convolutional features with classical ensemble methods provides a robust, computationally efficient route to real-time melt pool anomaly detection in data-limited additive manufacturing environments.
