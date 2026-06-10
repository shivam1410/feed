---
title: "Rotate2Think: Geometric Priming via Orthogonal Rotation to Improve Language Model Reasoning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09873"
authors: ["Aditya Sharma, Christopher J. Pal, Amal Zouaq"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2606.09873v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09873v1 Announce Type: new Abstract: Reasoning models achieve strong performance on challenging tasks by generating explicit intermediate reasoning traces before producing a final answer. Yet the internal structure of representation space when reasoning remains poorly understood: how do a model's hidden representations differ during thinking versus the embeddings of the input prompt, and can this structure be exploited to elicit stronger reasoning at inference time? We show that both input embeddings and thinking embeddings (mean-pooled last-layer hidden states over the prompt and reasoning trace, respectively) exhibit extremely high conicity, with all vectors clustering tightly around a single mean direction. Crucially, these mean input and thinking directions are non-collinear, with thinking embeddings occupying a geometrically distinct region of embedding space across many different models and benchmark tasks. This observation motivates casting the input-to-thinking transition as a rotation problem admitting a closed-form solution via orthogonal Procrustes analysis. We propose Rotate2Think, a training-free method that estimates this rotation from a small set of correctly solved examples and injects the resulting synthetic thinking vector between thinking delimiters at inference time, providing a geometric primer at the onset of the reasoning trace. Evaluated across multiple benchmarks and model families, Rotate2Think improves accuracy in 30 of 32 model-benchmark configurations across mathematics, science, and code tasks, and generalizes zero-shot to multimodal reasoning on MATH-Vision.
