---
title: "Development and Validation of a Physics-Guided Machine Learning Extrapolation Framework Using a Classical Transient Diffusion Benchmark"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09912"
authors: ["Ashutosh Yadav, Alok Dubey, Prodyut Ranjan Chakraborty, Harshal Akolekar"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.09912v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09912v1 Announce Type: new Abstract: Machine learning models used in engineering are typically trained within limited operating ranges, yet reliable predictions are often required beyond these domains. Consequently, the primary challenge is extrapolation rather than interpolation. Rigorous validation is hindered by the scarcity of data outside the training range. To address this limitation, a novel extrapolation framework is integrated with established machine learning architectures to enable accurate and physically consistent predictions beyond the training domain. The framework is established by systematically evaluating two physics-guided architectures: a Bidirectional Long Short-Term Memory (BiLSTM) network and a Physics-Informed Neural Network (PINN). A classical one-dimensional transient diffusion problem is adopted as a benchmark because its exact analytical solution provides unlimited, reliable data across the spatio-temporal domain, enabling rigorous quantitative validation. The problem is particularly challenging because the solution evolves from an initial singularity through a strongly nonlinear transient regime before approaching a steady-state linear profile. When training data are confined to an intermediate portion of this evolution, backward extrapolation toward the singularity becomes especially demanding. To improve reliability, physics-guided coordinate transformations, boundary-aware learning strategies, and stability-enhancing temporal marching are incorporated. Extrapolation is evaluated using a train-predict-validate-extend strategy, in which validated predictions are recursively added to the training set to progressively extend the prediction horizon. The results demonstrate accurate and physically consistent predictions beyond the training domain, highlighting the framework's potential for engineering applications where data availability is limited.
