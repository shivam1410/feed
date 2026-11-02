---
title: "Frozen in Time: How a Physics Foundation Model Forgets Under Sim-to-Real Adaptation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.40857"
authors: ["Haaris Mian, Miles Cranmer, Alessandro Favero, Payel Mukhopadhyay"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 38
guid: "oai:arXiv.org:2610.40857v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Scientific foundation models (SciFMs) have achieved remarkable performance on a wide range of PDEs, including the ability to efficiently adapt to unseen data distributions with additional finetuning. As with all neural architectures, finetuning such models comes with the risk of catastrophic forgetting, whereby adapting to new tasks degrades prior knowledge of the model. We study catastrophic forgetting in Walrus-1.3B, a SciFM for continuum dynamics, over the course of a two-stage sim-to-real adaptation: first finetuning on simulated flow around a cylinder and then adapting to experimental data of the same system. We find that finetuning on the simulations rapidly degrades rollout performance on the original pretraining datasets, with one-step errors increasing up to 35x after just 20 epochs. Subsequent adaptation to real data further erodes performance on the simulated task. We characterize the potential drivers of forgetting, such as dataset dependence and task representation similarity. We then show that replaying as little as 1% simulated data during real-data finetuning recovers most of the lost simulation performance while retaining effective adaptation to the experimental dynamics. Our results identify catastrophic forgetting as a practical obstacle to sim-to-real adaptation of SciFMs and show that lightweight replay strategies significantly improve retention.
