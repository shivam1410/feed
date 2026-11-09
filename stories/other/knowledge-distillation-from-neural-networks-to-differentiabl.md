---
title: "Knowledge Distillation from Neural Networks to Differentiable Logic Networks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.09024"
authors: ["Hee Yun Suh, Niraj K. Jha"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.09024v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Differentiable logic networks (DLNs) are interpretable, edge-friendly classifiers that learn both their logic operators and their connections through gradient descent, achieving accuracy competitive with multi-layer perceptrons at orders-of-magnitude lower inference cost. Their accuracy, however, is bounded by the problems of vanishing gradients, scalability, and lack of an ecosystem, leaving a gap relative to conventional neural networks on several datasets. We introduce knowledge distillation for DLNs to narrow this gap. We distill from a trained multi-layer perceptron teacher into a DLN student, integrating the distillation objective into a two-phase training loop without altering the architecture or the inference procedure. The teacher is discarded after training. Hence, the distilled model retains the interpretability, sparsity, and inference cost of a conventionally trained DLN. We investigate this approach through four variants: a joint hyperparameter search that optimizes the distillation weight and temperature alongside the architecture, a grid search over these two hyperparameters with the architecture fixed, and two single-phase variants that employ distillation during only the neuron-function or only the connection phase. On 20 public tabular classification tasks, distillation improves balanced-class accuracy at negligible cost to gate-level operation counts and model size, though the benefit varies by dataset. Performance improvements of up to 15% are observed, in some cases surpassing the teacher itself.
