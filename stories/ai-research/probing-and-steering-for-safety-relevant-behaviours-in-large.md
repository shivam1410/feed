---
title: "Probing and Steering for Safety-Relevant Behaviours in Large Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30363"
authors: ["Nimun Bajwa, Massimo Poesio"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2610.30363v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Activation probes are computed directions in a language model's residual stream, used both to detect safety-relevant behaviours and, by adding their direction back into the stream, to steer them. We explore how the main design choices behind such probes interact, within one pipeline, on one model (Llama-3.1-8B-Instruct), and across three behaviours: deception, high-stakes awareness and sycophancy. The pipeline crosses two estimators (difference-of-means and logistic regression) with three token-pooling schemes (last, mean and learned attention), selects appropriate layers to detect or steer a behaviour, and evaluates every direction twice: as a detector of the behaviour, and as a steering vector to push outputs towards the behaviour. Prior work read together suggests a read/write dissociation, in which logistic regression reads (detects) best but difference-of-means directions write (steer) best. We find that it holds for deception and high-stakes but not for sycophancy, where the pattern reverses. The reversal appears to follow partially from the data rather than from the estimators. The best pooling technique and the layer choice depend on the behaviour and data, and the layer that steers best can sit well before the layer that detects best. The right steering metric to use between changing a model's perception and eliciting behaviour depends on the task - and the two can disagree outright. The exported probes and directions power an interactive interface through which a user can score and steer text directly.
