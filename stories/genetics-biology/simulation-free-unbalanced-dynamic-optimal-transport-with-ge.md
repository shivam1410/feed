---
title: "Simulation-free Unbalanced Dynamic Optimal Transport with General Growth Penalty"
category: "Genetics & Biology"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04710"
authors: ["Junda Ying, Yuxuan Wang, Bowen Yang, Peijie Zhou, Lei Zhang"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.04710v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04710v1 Announce Type: new Abstract: Inferring cellular dynamics from unpaired single-cell snapshots requires modeling both state transitions and population growth or death. Unbalanced dynamic optimal transport (UDOT) addresses this by penalizing growth along transport paths, making the choice of growth penalty a key way to encode biological priors on proliferation and apoptosis. However, existing UDOT solvers either rely on computationally expensive NeuralODE simulations or depend on analytical solutions of conditional paths, restricting their efficiency solely to quadratic penalties, i.e. Wasserstein-Fisher-Rao (WFR) geodesics. To enable an efficient UDOT solver for general growth penalties, we first show that concave growth penalties lead to degenerate solutions where growth and transport are separated. We then introduce \textbf{S}imulation-free \textbf{U}nbalanced \textbf{D}ynamic \textbf{O}ptimal transport (SUDO), a simulation-free framework for UDOT with general non-quadratic convex growth penalties. SUDO learns the conditional paths and transport costs, solves the induced semi-coupling problem, and subsequently leverages unbalanced flow matching to achieve a simulation-free solution. On WFR benchmarks, SUDO matches the accuracy of efficient, analytical solution-driven algorithms while outperforming simulation-based methods in computational speed. Beyond WFR, SUDO supports asymmetric penalties that encode proliferation-dominant priors and produce more plausible trajectories and growth estimates on synthetic and single-cell datasets.
