---
title: "Recovered or Memorized? Investigating Dynamical Consistency and Faithfulness in World Model Latents"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18807"
authors: ["Jerome Francisco, Kyle Deng, George Flint, Kevin Zhu"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18807v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

World models develop internal simulators that can learn the structure and dynamics of an environment. It has been demonstrated that their internal representations are both meaningful and causal, but are these representations faithful to the governing dynamics of the environment they are learning? We introduce Anchored Recovery Certification (ARC), a procedure that utilizes a discrete Fr\'echet distance calculation with ground truth to evaluate dynamical consistency on candidate world models up to an affine gauge. We use the procedure on TD-MPC2 (decoder-free world model) that has learned the pendulum swing on an observation lift under varying hyperparameters at k = 5, 10, 25 steps. The model is then steered within a PCA-derived intervention subspace and compared against a ground-truth simulator using relative error to investigate dynamical faithfulness. ARC sufficiency held for TD-MPC2 most consistently at k = 10, with six of seven constraints statistically significant after Holm-Bonferroni correction, while the relative error between the simulator and the causal latent remained substantial. Further research could be conducted with decoder world models such as DreamerV3 (reconstruction loss) to investigate whether the results differ.
