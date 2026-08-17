---
title: "Hybrid Quantum-inspired Kolmogorov-Arnold Networks for Privacy-Aware Federated Biosignal Learning"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.13914"
authors: ["Chun-Hua Lin, Samuel Yen-Chi Chen, Yu-Chao Hsu, Kuo-Chung Peng, Jiun-Cheng Jiang, Chi-Sheng Chen, Tai-Yue Li, Nan-Yow Chen, En-Jui Kuo, Hsi-Sheng Goan"]
date: "Mon, 17 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.13914v1"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

arXiv:2608.13914v1 Announce Type: new Abstract: Electrocardiogram (ECG) recordings are sensitive biomedical data, limiting the ability of hospitals and wearable devices to share raw signals for centralized model training. Federated learning addresses this practical privacy constraint by enabling collaborative model training while keeping raw biosignal data at their respective sources. However, federated ECG classification remains challenging due to limited client-side samples, imbalanced arrhythmia labels, and non-independent and identically distributed (non-IID) data across clients. These constraints require classifiers that are both communication-efficient and robust to cross-client distribution shifts. In this work, we evaluate a hybrid quantum-inspired Kolmogorov-Arnold network (HQKAN) against a multilayer perceptron (MLP) for five-class arrhythmia classification on the MIT-BIH dataset and three-class classification on the INCART dataset under federated averaging (FedAvg). Across multiple client configurations, HQKAN improves most aggregate and minority-class metrics while using 37.35% fewer trainable parameters and reducing communication cost by 24.89% on MIT-BIH; on INCART, it achieves corresponding reductions of 44.81% and 36.41%. These results indicate that HQKAN offers a compact, communication-efficient and robust alternative to the MLP baseline for privacy-aware federated learning on biosignal data.
