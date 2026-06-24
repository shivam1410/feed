---
title: "Fast and Slow Variational Continual Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24007"
authors: ["Subarnaduti Paul, Yohan Jung, Mohammad Emtiyaz Khan, Siddharth Swaroop, Thomas M\\\"ollenhoff, Martin Mundt"]
date: "Wed, 24 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.24007v1"
image: ""
generated: "2026-06-24T19:00:41+05:30"
---

arXiv:2606.24007v1 Announce Type: new Abstract: Continual learning remains a major challenge for modern deep networks, partly because commonly used optimizers lack inherent mechanisms for continual adaptation. One such natural mechanism is fast and slow adaptation to balance stability and plasticity. This mechanism has deep roots in neuroscience and biology, but there is no consensus on how to best incorporate it in commonly used optimizers. Here, we show that this can be easily done via the VCL framework, where past posteriors are used as priors in the future. Our key idea is to incorporate slow adaptation via merging of past posteriors to slow down the drift in the knowledge as learning progresses. The merged posterior is then used as the prior in the VCL update to implement the fast-weight updates. These steps can be seamlessly implemented in the IVON optimizer, whose form and costs are nearly identical to that of Adam. We call this new optimizer the Continual IVON (CoVON) optimizer and show that it not only consistently improves over existing VCL optimizers, but also performs better than other weight-regularization strategies across domain-incremental learning, continual pre-training, and fine-tuning of large language models.
