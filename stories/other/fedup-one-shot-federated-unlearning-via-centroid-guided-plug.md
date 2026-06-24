---
title: "FedUP: One-Shot Federated Unlearning via Centroid-Guided Plug-in Filters"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24113"
authors: ["Feihong Nan, Zhengyi Zhong, Pan Wang, Weidong Bao, Xiongtao Zhang, Quan Wen, Ji Wang"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.24113v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.24113v1 Announce Type: new Abstract: Federated unlearning (FU) is critical for complying with legal mandates like the right to be forgotten in decentralized systems, yet current methods face a persistent dilemma between non-target knowledge loss and high request latency. To resolve these issues, we propose FedUP, a one-shot federated unlearning framework utilizing lightweight pluggable filters that act as a "knowledge funnel" to screen out target data while preserving original model performance. By freezing original model parameters and training filters at the server side using differentially private (DP)-protected class centroid samples, FedUP bypasses the need for multi-round client-server communication and complex retraining, reducing unlearning latency from minutes to mere seconds. Additionally, the framework's pluggable architecture ensures inherent reversibility, enabling the seamless restoration of forgotten knowledge by simply removing the filters. Extensive experiments on diverse image and text tasks demonstrate that FedUP effectively reduces non-target knowledge loss and achieves superior unlearning precision and efficiency across various scenarios. Code is available at: https://github.com/suows/FedUP-code.
