---
title: "Semiprime Factorization with Discrete Diffusion and Beam Search: Scaling Laws"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10202"
authors: ["Brendan O Donoghue, Nenad Tomasev, Volodymyr Mnih, Timothy Nguyen, Dalin Guo, Arun Nair, Kenneth Yang, Alexandre Frechette, Jasper Xian, Jean Tarbouriech, Pavel Tyletski, Ingrid von Glehn, Johannes Bausch, Demis Hassabis, Raia Hadsell"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10202v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

We demonstrate that transformer architectures trained with discrete denoising diffusion and decoded via guided test-time beam search can learn to recover the prime factors of semiprime integers directly from data. Our approach establishes a new frontier for learning-based semiprime factorization, successfully factoring 68-bit integers-a substantial advance over the prior 56-bit state of the art. While computationally less efficient than classical factoring algorithms, our model requires no domain-specific number-theoretic priors and learns purely from training examples. In practice, the diffusion model acts as a generative prior, identifying promising factor candidates where exact verification or lattice-based post-processing can complete the factorization. Furthermore, we derive empirical scaling laws relating approximation quality to training data volume, model size, and test-time computation. In contrast to language, problem size is the key driver of scaling behavior. Achieving a fixed accuracy on a held-out test set requires compute that scales exponentially with bit length. Consequently, our findings pose no threat to security, as the projected compute cost required to factorize cryptographically relevant integers remains prohibitive.
