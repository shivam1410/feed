---
title: "Learning Faster without Deeper Networks: A*-Inspired Batch Selection for Efficient CNN Training"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15745"
authors: ["Anxhelo Shehu, Enes Stastoli, Arben Cela"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.15745v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15745v1 Announce Type: new Abstract: Common practice when training Convolutional Neural Networks (CNNs) is to use randomly shuffled mini-batches. This creates two limitations: slower convergence, and a diminishing learning signal, since many samples are quickly classified as easy during training. We address these inefficiencies with A*-Inspired Batch Selection (A*-BS), a lightweight, model-agnostic strategy that formulates mini-batch scheduling as a heuristic search problem. Each batch is treated as a node in a search space and ranked using an A*-like score combining a loss-based difficulty measure with a reuse penalty. This encourages informative gradient updates and batch diversity throughout training, without modifying network architectures or optimization algorithms, so it integrates seamlessly into existing pipelines. We evaluate A*-BS on the twelve 2D classification tasks of the MedMNIST-v2 benchmark, using a deliberately simple architecture of approximately 2.25x10^5 parameters, compared against the ResNet-18 and ResNet-50 baselines reported by the benchmark. On half of these tasks, the lightweight model with A*-BS reaches higher accuracy and AUC than both ResNet baselines, with relative gains of up to 15%. An ablation under identical architecture and hyperparameters shows A*-BS outperforms random batch shuffling on all twelve tasks. Wall-clock measurements further show the lightweight CNN with A*-BS trains substantially faster than ResNet-18 and ResNet-50 on identical hardware. These results indicate that intelligent batch ordering can partially compensate for reduced architectural complexity, offering a computationally efficient alternative to deeper models, with reliability reinforced by strong performance even against deeper, more sophisticated architectures.
