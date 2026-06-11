---
title: "SwiftCTS: Fast Cross-Design Prediction and Pareto Optimization of Clock Tree Metrics via Few-Shot Calibration"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11348"
authors: ["Barsat Khadka, Kawsher Roxy, Md Rubel Ahmed"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.11348v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11348v1 Announce Type: new Abstract: Clock Tree Synthesis (CTS) is a computationally expensive stage in the physical design flow, requiring iterative EDA tool invocations to navigate a vast configuration space for optimal power, wirelength, and timing skew. Existing machine learning approaches require computationally expensive retraining or fine-tuning cycles to adapt to unseen macro architectures and are architecturally mismatched to the millions of evaluations demanded by exhaustive combinatorial search. We present SwiftCTS, a physics-informed surrogate framework that addresses both limitations simultaneously. By coupling lightweight, physics-grounded statistical features with gradient-boosted ensembles, SwiftCTS trains in under five seconds on a CPU and delivers sub-millisecond inference without GPU support. To handle out-of-distribution (OOD) designs without retraining or fine-tuning, we introduce a K-shot multiplicative calibration mechanism that anchors predictions to just one or two physical reference runs, reducing power prediction error from 24.5\% to 3.3\% and wirelength error from 56.6\% to under 1\% on unseen macros. Integrating this engine with an evolutionary optimizer, SwiftCTS evaluates 100,000 CTS configurations in under ten seconds, yielding Pareto-optimal frontiers that are physically validated within the OpenROAD flow. Closed-loop validation confirms prediction errors below 0.5\% for power and wirelength, and timing skew predictions within five picoseconds on an OOD benchmark, consistently outperforming default tool heuristics across all target metrics. Code publicly available at: \href{https://anonymous.4open.science/r/SwiftCTS-7E6E}{https://github.com/BarsatKhadka/SwiftCTS}
