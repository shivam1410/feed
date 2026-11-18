---
title: "Weight-space programming for tractor guidance controller: large language models natively write neural network weights that steer a real tractor"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21958"
authors: ["Timo Oksanen"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21958v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

Weight-space programming is a process where a large language model reads and writes the weights of a neural network directly, guided by a natural language specification, without an optimiser or gradient descent. This study applies it to automatic tractor guidance, where a 253-parameter neural network steers along paths of lines and arcs and must be adapted when the machine changes, such as a slower steering actuator. GPT-6 Astra and Claude Fable 5.1 (also 5.2) edited the network for our research tractor using a small budget of simulated evaluations to repair a network trained for another tractor and write a controller into a network with zero weights. We compared them with an evolution strategy, gradient descent and pure pursuit in simulation and on the real tractor. Both models read the network and analysed the closed loop with control theory correctly, and Fable's repair without simulation succeeded only occasionally. With simulated feedback, both models repaired the trained network in single sessions and wrote a working controller from zero weights, whereas from zero the evolution strategy found none. The controllers written from zero were sparse and in a classical cascaded structure; one model edited the trained network while the other replaced it. Gradient descent reached higher accuracy with far more simulation, and all language model controllers steered the real tractor without intervention, with errors of the same order as pure pursuit. Language models can program the weights of a neural controller directly, much as control engineers design one. We call this Weight-Space Engineering.
