---
title: "Understanding Stability of Outer Nesterov Momentum on Stochastic Pseudo-Gradients"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22623"
authors: ["Nishant Sharma, Laura Gomezjurado Gonzalez, Ganesh Talluri, Sarath Chandar, Hiroki Naganuma"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.22623v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

Large neural networks are commonly trained across many workers, and communication between them is a major cost. Workers therefore take several local optimization steps before sending their net parameter displacements, or pseudo-gradients, to an outer optimizer, which often applies Nesterov momentum. We study how the outer momentum, the number of local steps and the averaging over workers control the training dynamics, and in particular their stability. For random quadratics, we derive an exact mean-square stability criterion in any dimension, which reveals that the inner batch size determines whether increasing the number of local steps eventually stabilizes or destabilizes the outer iteration. Moreover, while averaging the pseudo-gradients of independent workers can make larger outer momentum values admissible, the number of workers required for stability can grow exponentially with the number of local steps. Finally, we show that the mean-square dynamics governing stability can be probed directly at intermediate neural-network checkpoints using shared-minibatch perturbations. We test our theoretical findings across networks, and measure their consequences for training loss.
