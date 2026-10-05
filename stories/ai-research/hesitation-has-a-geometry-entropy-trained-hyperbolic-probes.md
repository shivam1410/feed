---
title: "Hesitation Has a Geometry: Entropy-Trained Hyperbolic Probes for Sparse Activation Steering"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02391"
authors: ["Zeyong Zhang, Tung Sum Thomas Kwok, Tengfei Ma, Mengjia Xu"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2610.02391v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

When a large language model solves a mathematical problem, its reasoning is largely hierarchical, and the solution often branches at a few tokens where the next-token entropy is high. Such tree-like structure embeds in hyperbolic space with far lower distortion than in Euclidean space. Activation steering, however, usually edits the hidden states of a pretrained model by adding one fixed Euclidean vector at every token, even though most tokens of a solution are already determined by the context. We propose Hyperbolic Entropy Steering (HEST), which embeds the hidden states in the Poincar\'e ball with a lightweight probe whose only label is the model's own next-token entropy. Where this entropy exceeds a threshold, HEST moves the embedded state along the geodesic of steepest descent of a readout of the probe and maps the change back to the hidden state. For the Busemann readout of a learned ideal point, we prove that a step of fixed length lowers it by the same amount at every state. On three instruction-tuned models from the Qwen2.5-Math and Llama-3.1 families, HEST with the Busemann readout improves greedy accuracy on MATH-500 and GSM8K in five of six settings, by up to 1.8 points, whereas a contrastive steering vector added at every token lowers accuracy. With a Euclidean probe trained in the same way, this gain disappears on Qwen2.5-Math-1.5B-Instruct. The gains are largest on problems where the model hesitates often, and accuracy on the remaining problems is almost unchanged.
