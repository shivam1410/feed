---
title: "QSplitFL: Capability Aware Deep Q-Learning for Optimal Split Point Selection in Split Federated Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09869"
authors: ["Nazmus Shakib Shadin, Xinyue Zhang, Jingyi Wang, Miao Pan"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 66
guid: "oai:arXiv.org:2606.09869v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09869v1 Announce Type: new Abstract: Federated Learning (FL) combined with Split Learning (SL) is a privacy preserving paradigm that enables training deep neural networks (DNNs) on resource constrained devices while reducing overall training cost. However, determining the optimal split point, meaning the layer where the model is divided still remains a critical challenge, especially when clients have heterogeneous hardware capabilities. Fixed split points can overload weak devices and increase the communication and server load, which slows convergence and reduces stability. This paper introduces QSplitFL, a novel capability-aware Deep Q-Network (DQN) framework for optimal split point selection in Split learning based Federated Learning (SFL) environments. Unlike existing approaches that rely on high-dimensional model weight representations, QSplitFL employs a lightweight state representation derived directly from client hardware metrics, including CPU utilization, memory, battery level, and network latency. The proposed framework incorporates a decayed loss-drop reward function that prioritizes early convergence, and a committee-based DQN architecture with majority voting to mitigate reward hacking. Extensive experiments on MNIST, Fashion-MNIST, CIFAR-10, and CIFAR-100 datasets using CNN, ResNet50, MobileNetV4, and ConvNeXt architectures demonstrate that our approach achieves better convergence and higher accuracy compared to existing methods, while effectively adapting to heterogeneous device resources. The source code is publicly available at https://github.com/AIPO-Lab/QSplitFL.
