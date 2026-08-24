---
title: "TracingFlow: A Simulation-Free Trajectory Inference Framework Based on Second-Order Dynamics"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21070"
authors: ["Yuhao Sun, Zekun Wu, Zixun Huang, Peijie Zhou"]
date: "Mon, 24 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.21070v1"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

arXiv:2608.21070v1 Announce Type: new Abstract: Inferring continuous system evolution from sparse temporal snapshots is a key challenge in generative modeling and single-cell omics. While Optimal Transport (OT) is popular, existing frameworks are largely restricted to first-order dynamics, assuming memoryless velocity fields. This limits expressiveness, as first-order systems fail to account for regulatory momentum and time-delayed responses inherent in processes like cell differentiation. Here, we introduce TracingFlow, a simulation-free Flow Matching framework generalizing to second-order dynamics. By using neural networks to regress the acceleration field, TracingFlow provides an exact, efficient solution to the Dynamical Optimal Acceleration Transport (DOAT) problem. Unlike first-order methods yielding over-smoothed trajectories, our second-order formulation captures high-curvature transitions and nonlinear evolutions by learning the underlying force fields. Evaluated on complex synthetic and large-scale scRNA-seq datasets, TracingFlow achieves superior accuracy in distributional reconstruction and trajectory faithfulness. Moreover, by integrating lineage tracing priors, it recovers dynamical structures that are both mathematically optimal and biologically plausible.
