---
title: "Convergence Theory of Knowledge Distillation in Asynchronous P2P Gossip Learning Network"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.01952"
authors: ["Lucas Qingyang Fang, Tiyao Liu, Jinhao Jing, Zeji Li, Kaijie Chen, Harikrishna Kuttivelil, Katia Obraczka"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.01952v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.01952v1 Announce Type: new Abstract: Decentralized, serverless learning increasingly connects devices running different architectures, where the standard tool, decentralized SGD, is undefined as models with different parameter counts cannot be averaged. Knowledge distillation (KD) exchanges soft predictions rather than weights and sidesteps this obstacle, yet convergence theory for fully decentralized, asynchronous peer-to-peer (P2P) KD is lacking. We provide one, relocating consensus from parameter space to function (output) space: a KD event is a geometric contraction operator in logit space on the peers' predictive distributions, which we analyse in the Hilbert space of predictions on a reference measure. Under standard smoothness/variance assumptions and two realizability assumptions, one bridging parameter SGD to the functional step and one controlling restricted task/KD alignment, the time-averaged functional stationarity and function-space disagreement converge at rate $O(1/(\eta T))$ to an $O(\eta)+O(B_f^2)+O(\zeta_f^2)$ neighbourhood. Here $B_f$ is the distance from the task optimum to the peers' reachable classes and $\zeta_f$ measures persistent local-task heterogeneity. Across homogeneous, width-heterogeneous, and mixed-family networks of the experiments, KD contracts function disagreement by $40-61\times$, while isolated training does not. The sampled stationarity diagnostic has late transient exponents $0.99-1.90$ on the shared-skeleton main runs, and the four-point step-size sweep exhibits the predicted transient: neighbourhood tradeoff.
