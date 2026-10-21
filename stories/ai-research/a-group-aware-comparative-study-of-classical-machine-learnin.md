---
title: "A Group-Aware Comparative Study of Classical Machine Learning and Deep Learning Methods for Sensor-Based Human Activity Recognition"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.23941"
authors: ["Wahyu Pebrianto"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 20
guid: "oai:arXiv.org:2610.23941v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Human Activity Recognition (HAR) using wearable or smartphone inertial sensors is commonly evaluated with both classical machine learning and deep learning methods. However, reported performance can be strongly affected by sensor modality, dataset characteristics, and data-splitting strategy. This study presents a controlled comparative evaluation of four classical machine learning models and four deep learning models on two public HAR datasets, UCI-HAR and KU-HAR. Three sensor modalities were considered: accelerometer (ACC), gyroscope (GYRO), and their combination (ACC+GYRO). Classical machine learning models used handcrafted statistical features, while deep learning models operated directly on raw sensor sequences. The primary evaluation employed five-fold StratifiedGroupKFold cross-validation, with subject- or participant-level grouping to prevent group overlap between training and test folds. Macro-F1 was used as the primary performance metric. The results show that deep learning did not consistently outperform classical machine learning. On UCI-HAR, the evaluated deep learning models achieved slightly higher macro-F1 values, whereas on KU-HAR, LightGBM achieved 0.857 compared with 0.828 for the highest-performing evaluated deep learning model. Regarding sensor modality, the combined ACC+GYRO configuration generally outperformed ACC or GYRO alone on both datasets. The evaluation protocol also had a substantial effect: for CNNBiLSTMAttn with ACC+GYRO, random splitting increased macro-F1 by 0.033 on UCI-HAR and 0.093 on KU-HAR compared with grouped evaluation. These findings highlight the importance of model family, sensor modality, dataset characteristics, and group-aware evaluation when assessing sensor-based HAR systems.
