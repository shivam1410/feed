---
title: "FedSPC: Shared Parameter Correction for Personalized Federated Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.13748"
authors: ["Kannanthodath Induchoodan Ajay Menon, Christian Prehofer, Yunfei Xu, Toru Hirano"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2606.13748v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.13748v1 Announce Type: new Abstract: Personalized federated learning (PFL) is one of the important approaches in federated learning for addressing statistical heterogeneity while enabling client-specific adaptation. Many PFL methods split the model into shared and personalized parameters, which are jointly trained on each client. However, this creates an optimization issue: shared parameters are updated by clients optimizing different local objectives, which can lead to inconsistent shared updates and weaken the shared representation. To address this problem, we propose Federated Shared Parameter Correction (FedSPC), a modular correction method for PFL. FedSPC applies control-variate correction only to the shared parameters of a given PFL method, while leaving personalized parameters unchanged. It can be integrated into three common PFL settings: shared feature extractors, shared classifiers, and fully shared models with local regularization. Experiments on CIFAR-100 and Tiny-ImageNet with ViT, ResNet-34, and VGG-11 show that FedSPC improves performance across representative PFL methods, including FedPer, FedRep, FedBABU, LG-FedAvg, and Ditto.
