---
title: "Stable initialization without the CLT"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30633"
authors: ["Simon Kuang, Kyle Chickering, Xinfan Lin"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2609.30633v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Successful training of deep neural networks is highly dependent on the distribution of the initial weights. If the weights are too large, network training blows up; if they are too small, the model fails to learn features. Stable initialization is the optimal moderation between these two extremes. The conventional theory of random networks uses the Central Limit Theorem to control inter-neuron dependencies, which introduces distributional approximation error and coupling between layers. For networks with sine activations, we derive the uniform-phase initialization, which obviates distributional approximation and fully decouples the layers. Ours is the first work to use the sine function's periodic symmetry. Models trained with the uniform-phase initialization outperform the state of the art in neural representation tasks like image and audio fitting. We find that our untuned models are competitive with the best-tuned baselines from previous work and support $\mu$P width scaling.
