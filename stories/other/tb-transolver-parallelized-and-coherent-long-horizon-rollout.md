---
title: "TB-Transolver: Parallelized and Coherent Long-Horizon Rollouts via Temporal Bundling for Time-Dependent PDEs"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.04063"
authors: ["Sidharth S. Menon, Ameya D. Jagtap"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.04063v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Transolver has recently gained widespread adoption for solving diverse physical problems on unstructured geometric meshes by leveraging its Physics-Attention mechanism, which seamlessly extends standard softmax attention to handle physical domains at scale. For time-dependent problems, existing literature relies on time-conditioned or autoregressive rollouts to preserve temporal causality while retaining Physics-Attention as the spatial backbone. However, a fundamental limitation of this formulation is its sequential execution model, wherein computational costs scale linearly with the temporal horizon, rendering standard Transolver inefficient for transient problems despite its exceptional spatial efficacy. This bottleneck has historically hindered its broader application in time-dependent physical modeling. To address this limitation, we introduce TB-Transolver (also referred to as Temporally Bundled Transolver), an efficient framework built on temporal bundling that scales Transolver for time-dependent PDEs. Furthermore, we propose \emph{spatiotemporal coherence} (${\rm C(K)}$) as a general metric to systematically quantify snapshot correlation within a temporal bundle, enabling the \emph{a priori} selection of optimal bundle widths using training data alone, thereby avoiding expensive grid searches. We demonstrate the computational efficacy of TB-Transolver across four physically distinct domains, namely, plasticity, fluid dynamics, reaction-diffusion, and global weather forecasting; achieving training speedups of up to $29\times$ over conventional autoregressive and time-conditioned baselines. Finally, these computational gains are further amplified through distributed multi-node and multi-GPU parallelism, yielding aggregated speedups of up to $45.6\times$ at optimal bundle widths for systems exhibiting high spatiotemporal coherence compared to single-GPU implementations.
