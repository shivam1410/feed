---
title: "Intrinsic-Noise Consolidation: A Doob-Barrier-Conditioned Diffusion Turns Analog Device Noise into a Continual-Learning Resource"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06924"
authors: ["Gunner Levi Howe"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.06924v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06924v1 Announce Type: new Abstract: On analog neuromorphic hardware, intrinsic device noise is normally an accuracy tax. We ask whether it can instead consolidate memories. We cast per-synapse consolidation as a Doob h-transform: condition each weight's stochastic dynamics on never crossing a memory-critical barrier around its consolidated value. The conditioned diffusion gains an extra drift sigma^2 d/dw log h, a restoring force amplified by the noise variance itself that diverges at the barrier. We are explicit about novelty: the anchored drift -s(w-mu) our rule also contains is not ours (the limit of OUA, MESU, and EWC), and we surrender it. We claim only the conjunction of (a) the Doob barrier-conditioning as a synaptic rule, to our knowledge unclaimed (every h-transform use we found is generative modeling, none synaptic), and (b) a falsifiable prediction: increasing intrinsic noise non-monotonically improves sequential-task retention, an inverted-U that anchored-drift methods cannot produce. We pre-registered this as a go/no-go gate; it passes. On single-head Split-MNIST (8 seeds) the rule lifts retention 10.9 points at an interior optimum (paired Wilcoxon p=0.004), while matched OU/EWC/MESU anchors are monotone. Ablating the conditioning removes the effect; the optimum tracks the barrier; the inverted-U survives a second task stream and the realization where noise enters the forward pass. We then measure the intrinsic noise on real BrainScaleS-2 silicon (additive, trial-to-trial independent, tunable via on-chip averaging) and run the rule on the chip with its noise in the training loop: barrier-conditioning retains a prior task 15.6 points better than the matched control at matched average accuracy, a stability-plasticity shift, not a net-accuracy win (single seed; retention measured, energy modelled). Intrinsic analog noise thus becomes a consolidation dividend a digital accelerator must spend energy to generate.
