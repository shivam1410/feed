---
title: "Geometric Signatures of Reasoning: A Spectral Perspective on Task Hardness"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01571"
authors: ["Aria Masoomi, Mahsa Bazzaz, Adel Javanmard, Vahab Mirrokni"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2607.01571v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01571v1 Announce Type: new Abstract: Chain-of-thought (CoT) reasoning enables large language models (LLMs) to solve complex problems by generating intermediate reasoning steps. While much attention has been paid to the length and content of these reasoning chains, far less is known about their internal geometry. We study the \emph{geometry} of CoT trajectories in the hidden state space of transformer models, formalizing each reasoning chain as a discrete curve in $\mathbb{R}^d$ and characterizing it through spectral, positional, and kinematic geometric functionals. We introduce the effective dimension $d_\rho$ as a measure of trajectory complexity and show theoretically that trajectories with flatter eigenvalue spectra correspond to harder tasks, as they explore more of the hidden dimensions. Lastly, we explore how kinematic features of the trajectory, mean position, positional dispersion, initial and current hidden states, mean velocity, mean speed, and speed dispersion, can be used to predict solution correctness before generation is complete, and may inform future early-stopping strategies. Experimentally, on mathematical reasoning problems from the MATH500 dataset, $d_\rho$ achieves $0.93$ AUC in distinguishing easy from hard problems, while kinematic features potentially can predict correctness from only the first $20\%$ of generated tokens. These correctness signatures transfer across questions of varying difficulty, establishing that the shape of a model's internal reasoning trajectory is a principled window into both task hardness and solution quality.
