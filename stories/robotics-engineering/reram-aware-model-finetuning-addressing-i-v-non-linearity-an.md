---
title: "ReRAM-aware Model Finetuning addressing I-V Non-linearity and Retention Errors"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17471"
authors: ["Ching-Yi Lin, Shamik Kundu, Arnab Raha, Sahil Shah"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.17471v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17471v1 Announce Type: new Abstract: Traditional CPU, GPU, and NPU architectures are increasingly limited by the von Neumann bottleneck. While In-Memory Computing (IMC) using ReRAM crossbar arrays offers a high-density, energy-efficient alternative, its practical deployment is constrained through their non-idealities. Existing hardware-aware training frameworks often require training from scratch, which is computationally prohibitive for modern large-scale models. In this work, we propose a finetuning-based hardware-aware training algorithm that enables robust DNN deployment on ReRAM with minimal training overhead. Our approach mitigates I-V non-linearity by applying a range-shrunk sinh transformation and incorporates retention errors directly into a regularization loss during the finetuning process. We evaluate our framework across models and tasks such as image classification and question-answering (QA). Experimental results demonstrate that our method achieves similar accuracy on large-scale models like ResNet18 and DeiT-Tiny as the base model. In-case of ImageNet for MobileNetV3 families the technique has only less than 2% accuracy degradation. Further, applying the technique on the SQuAD v2 dataset results in only 1 point degradation of F-1 score.
