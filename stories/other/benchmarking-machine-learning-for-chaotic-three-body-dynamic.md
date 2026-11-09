---
title: "Benchmarking Machine Learning for Chaotic Three-Body Dynamics in Astrophysics"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08634"
authors: ["Sheng Wan, Pavan Vynatheya, Duo Xu, Li Kevin Wenliang, Ye Zhu"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08634v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Machine learning (ML) and generative AI have recently made impressive progress in understanding physics. We explore a hierarchy of prediction problems stemming from chaotic three-body systems and benchmark existing ML approaches, including general-purpose prediction algorithms and those that build on top of foundational physics models. We first simulate the trajectories of triple systems near the critical boundary of stable/unstable initial conditions. We then design a hierarchy of learning tasks, focusing mainly on two broad problems: stability prediction and trajectory prediction. The former classifies whether a given triple system has diverged or not up to a specific horizon, while the latter predicts the exact trajectory, both given suitable input features. We benchmark a range of ML approaches, from simple regression methods to state-of-the-art foundational physics models, across these tasks, and compare them against astrophysical methods such as the Mardling-Aarseth stability criterion. Our experiments reveal a clear order of task difficulties in chaotic three-body dynamics: early dynamics enable strong stability prediction, while precise long-horizon trajectory forecasting remains difficult. Code and dataset are publicly available at https://github.com/Simonwan03/ThreeBodyMLBench.
