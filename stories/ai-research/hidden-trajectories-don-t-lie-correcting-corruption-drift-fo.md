---
title: "Hidden Trajectories Don't Lie: Correcting Corruption Drift for Test-Time Adaptation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24220"
authors: ["Amirhossein Sabour, Amir Khasahmadi, Mengliu Zhao"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.24220v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Test-time adaptation (TTA) adapts pretrained models to distribution shifts encountered during deployment. However, most existing methods rely on the weight representations of the final layer or signals derived from the model's output probability distribution. We study hidden trajectories: the ordered sequence of intermediate representations produced across a deep neural network. We observe that clean and corrupted trajectories become more separable as corruption severity increases. We introduce Drift-TTA, which adds zero-initialized low-rank adapters to a frozen backbone and trains them to align corrupted hidden trajectories with those from cleaner inputs. The approach supports two variants: a source-dependent version trained with clean targets, and a source-free setting that learns from corrupted images at different severities. We develop an online TTA approach that freezes the backbone and adapters while updating a scalar gate to control adaptation strength. We further cast trajectory alignment as MAP inference under a Gaussian observation model and derive a KL-based transfer bound characterizing test-time trajectory misalignment in terms of offline residual error, residual dimensionality, and distribution shift between offline and test corruptions. We evaluate Drift-TTA on CIFAR-10-C, CIFAR-100-C, and ImageNet-C using supervised ViTs and CLIP models. On CIFAR-100-C at severity 5, our source-free online approach improves accuracy over no TTA by 13.3 percentage points with ViT-B/16 and 11.6 percentage points with CLIP ViT-B/16, reaching 74.9% and 47.4%, respectively. Under the same setting, prior TTA baselines yield ECEs of 18.00% for ViT and 14.70% for CLIP, while our approach reduces them to 9.53% and 5.77%, respectively. These results demonstrate that hidden trajectory alignment provides an effective signal for both offline correction and lightweight online test-time adaptation.
