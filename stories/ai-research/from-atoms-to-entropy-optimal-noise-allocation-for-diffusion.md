---
title: "From Atoms to Entropy: Optimal Noise Allocation for Diffusion Training in the Convex Regime"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20540"
authors: ["Luca Ambrogioni, Giulio Franzese, Alberto Foresti, Gabriel Raya, Bac Nguyen, Georgios Batzolis, Yuhta Takida, Naoki Murata, Chieh-Hsin Lai, Yuki Mitsufuji"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2607.20540v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20540v1 Announce Type: new Abstract: How should a diffusion model decide which noise levels to train on, and how much? Despite the importance of this choice, current noise schedules are based largely on heuristics or empirical tuning. Here, we develop a general statistical framework for studying asymptotically optimal noise-level allocation in diffusion training. Our first main result concerns the fully coupled regime, where information can spread between different time points. Under convexity or Polyak-Lojasiewicz-type assumptions, we show that the optimized training schedule admits an atomic minimizer, concentrated on finitely many noise levels. Our second main result specializes this framework to an idealized independent-learner regime, intended to model temporal specialization in neural networks. Under an additional feature-noise decoupling condition, a random-matrix analysis leads to an information-theoretic proxy: the decoupled sampling density is proportional to the square root of the generative entropy rate, the rate at which conditional entropy grows along the forward process. We test these predictions in controlled settings where the coupled objective can be optimized directly, including Dirac mixtures, low-dimensional manifolds, and MNIST. In these settings, the optimized schedules are consistently finite-support, while the smooth entropic proxy closely tracks the atomic optimum in neural-network models and breaks down mainly in the fully coupled parametric case, as the theory suggests. We then evaluate the entropic schedule in larger-scale experiments, where full schedule optimization is currently intractable. The results indicate that square-root entropy scheduling can substantially improve training efficiency on discrete domains and remains competitive with standard EDM-style heuristics on continuous images.
