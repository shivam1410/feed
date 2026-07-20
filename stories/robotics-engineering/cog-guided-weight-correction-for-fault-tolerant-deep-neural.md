---
title: "CoG-Guided Weight Correction for Fault-Tolerant Deep Neural Networks"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15753"
authors: ["Bahram Parchekani, Samira Nazari, Ali Azarpeyvand, Mohammad Hasan Ahmadilivani, Tara Ghasempouri, Jaan Raik"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.15753v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15753v1 Announce Type: new Abstract: Deep Neural Networks (DNNs) used in safety-critical applications are vulnerable to hardware and memory faults that corrupt network weights and degrade reliability. In this paper, we propose a Center of Gravity (CoG) guided weight correction method that restores faulty weights based on their spatial characteristics within each layer. The proposed approach detects and corrects weight faults using distance-aware correction rules, eliminating the need for retraining or architectural modification. The effectiveness of the proposed method in terms of the capability of tolerating hardware faults has been evaluated through performing fault injection at different Bit Error Rates (BERs). Experiments on safety-critical LSTM-based Networks, including StageNet for disease progression tracking and MTFNet for cardiac anomaly detection, demonstrate fault tolerance improvements of up to 230x and 6.41x, respectively, at a BER of 10^{-3}, with negligible accuracy loss. When extended to Convolutional Neural Networks (CNNs), the method achieves up to 49.55x and 20.79x improvements under comparable fault conditions on ResNet-18 and VGG-16, respectively. To the best of our knowledge, this is the first work to apply the CoG concept to neural network weight tensors for enhancing model reliability.
