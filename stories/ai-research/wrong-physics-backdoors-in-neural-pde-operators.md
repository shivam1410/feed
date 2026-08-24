---
title: "Wrong-Physics Backdoors in Neural PDE Operators"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.20439"
authors: ["Hanbing Liang, Fujun Liu"]
date: "Mon, 24 Aug 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2608.20439v1"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

arXiv:2608.20439v1 Announce Type: new Abstract: Neural PDE operators are increasingly trained on reusable solver archives, yet validation often relies on clean prediction error and parameter-agnostic plausibility checks. We introduce cross-parameter relinking, a data-poisoning primitive that makes a triggered input select a valid solution from the same PDE family under an incorrect physical parameter. We term this a wrong-physics backdoor: the output remains physically plausible but is wrong for the intended parameter. The attack exploits tensor-to-parameter provenance failures in multi-parameter archives by stamping the surrogate input and relinking its supervision to a cached alternate-parameter solution for the same latent sample. Across 476 attack campaigns, we evaluate Burgers, advection-diffusion, two-dimensional Navier-Stokes, and an elliptic Poisson case. Fourier Neural Operators and DeepONet provide the primary evidence, with Transformer, GRU, and LSTM models as support. FNO reaches a backdoor success rate of 1.0000 on both advection-diffusion and two-dimensional Navier-Stokes while retaining low clean relative L2 error. Clean-label, label-only, and shuffled controls show that high attack success alone is insufficient: successful attacks must move predictions toward the intended alternate-physics target while preserving bounded clean error. These results expose a structural validation gap: smoothness or generic solver-like behavior is insufficient unless the provenance of the intended physical parameter is also verified.
