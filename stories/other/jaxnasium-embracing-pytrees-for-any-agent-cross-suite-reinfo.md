---
title: "Jaxnasium: Embracing PyTrees For Any-Agent, Cross-Suite Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36075"
authors: ["Koen Ponse, Aske Plaat, Thomas M. Moerland"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36075v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Hardware-accelerated reinforcement learning in JAX has gained rapid popularity in recent years and has proven to be a successful method of scaling online reinforcement learning. The resulting ecosystem, however, is fragmented: environment suites define their own interfaces, and algorithm implementations are typically written for a single suite, a single type of space, and either JAX-native or host-based environments. Here we present Jaxnasium, a library for JAX-based reinforcement learning, aiming to make the field more accessible. Jaxnasium represents observation and action spaces as PyTrees, and uses this structure to build networks and support multi-agent processing. Through this, its near-single-file implementations run on discrete, continuous, image, and composite spaces, as well as in multi-agent environments, without any changes to the algorithm code. The same files serve as readable, research-friendly algorithms, as well as importable algorithms for more applied workloads. Through a minimal Gymnasium-style interface and wrappers for 11 suites, over 300 environments are available on which a small PPO implementation with default hyperparameters is able to run. Additionally, through a simple wrapper, we can run Gymnasium and EnvPool environments with the same algorithm and training loop, with no performance loss compared to architectures specifically built for training JAX algorithms on host-based environments. Jaxnasium further provides tools for multi-seed evaluation, hyperparameter sweeps, and project scaffolding. Jaxnasium is open-sourced at https://github.com/ponseko/jaxnasium
