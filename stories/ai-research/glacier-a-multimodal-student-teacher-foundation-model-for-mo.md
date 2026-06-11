---
title: "GLACIER: A Multimodal Student-Teacher Foundation Model for Molecular Property Prediction"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11382"
authors: ["Emily Nguyen, Yongchan Hong, Harsh Toshniwal, Yan Liu, Andreas Luttens"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.11382v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11382v1 Announce Type: new Abstract: Deep learning models facilitate the discovery of molecules with tailored properties among billions of candidate compounds. However, the computational burden to develop and deploy state-of-the-art models continuously increases, limiting their scalability. Most large-scale models are unimodal in nature and overlook the potential to leverage complementary molecular data modalities. To address these shortcomings, this paper introduces the Graph-Language Alignment for Chemical Inference and Exploration using Representations (GLACIER) model, a student-teacher framework that integrates molecular graphs, SMILES strings, and physicochemical descriptors to learn rich molecular embeddings. Our framework consists of three stages: (1) we pretrain three student encoders on 100,000 drug-like molecules: a message-passing neural network for molecular graphs, a transformer-based encoder for SMILES strings, and a multilayer perceptron for physicochemical descriptors, (2) we fuse these student modalities using a novel Finsler geometry-aware module, and (3) distill complementary knowledge from large teacher models, including MiniMol and MolFormer, into a single lightweight model via contrastive learning. We demonstrate that GLACIER is a robust framework that delivers high predictive performance and computational efficiency in complex molecular property prediction tasks. Our code is publicly available at https://github.com/eemokey/glacier.
