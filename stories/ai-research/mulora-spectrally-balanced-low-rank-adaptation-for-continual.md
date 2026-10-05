---
title: "MuLoRA: Spectrally Balanced Low-Rank Adaptation for Continual Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02283"
authors: ["Junkang Liu"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2610.02283v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Low-rank adaptation (LoRA) provides a parameter-efficient approach to continual learning, but its nominal rank can conceal a loss of effective adaptation capacity. We identify \emph{spectral plasticity collapse}: during sequential adaptation, update energy becomes concentrated in a small subset of singular modes, leaving much of the available low-rank space underutilized. This exposes a limitation of interference avoidance alone: protecting historical representations does not ensure that the remaining adaptation capacity is responsive to new tasks or effectively utilized. To address this problem, we propose \texttt{MuLoRA}, which jointly controls capacity allocation and utilization. First, historical whitening identifies input directions with strong current-task response relative to accumulated historical response, yielding a task-adaptive basis that remains fixed during training. Second, approximate polar orthogonalization of momentum updates reduces spectral concentration within theselected space. An orthonormal basis connects these mechanisms by transferring the factor-update spectrum exactly tothe induced weight update. We establish a max--min characterization of exact subspace selection and derive cumulative spectral bounds under controlled cross-step anisotropy. Across five class-incremental benchmarks and eight incremental settings, \texttt{MuLoRA} achieves the highest mean accuracy in 15 of 16 reported metrics.
