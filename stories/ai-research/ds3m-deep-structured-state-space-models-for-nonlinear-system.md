---
title: "DS3M: Deep structured state space models for nonlinear system identification on modern hardware"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25274"
authors: ["Marco Roschkowski, Hannes Gernandt"]
date: "Sat, 21 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2611.25274v1"
image: ""
generated: "2026-11-21T19:04:16+05:30"
---

Neural state-space identification learns dynamical models from measured inputs and outputs. SUBNET combines this task with an encoder that estimates initial states from short measurement histories. Its continuous-time version requires many successive neural-network evaluations during numerical integration, resulting in slow training speed which is a major limitation for practical use cases. We propose deep structured state space models (DS3M), which combine compact nonlinear dynamical components in parallel and in series. Custom GPU kernels implemented with Triton reduce the launch and memory overhead of their sequential evaluation. We explain this construction, describe a port-Hamiltonian variant, and present various benchmark comparisons of accuracy and training time.
