---
title: "Neural Network-Assisted CLEAN for Efficient Multipath Parameter Estimation in MIMO Systems"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13298"
authors: ["Chaofan Deng, Linyu Sun, Jaeho Lee, Zishen Wan, Arijit Raychowdhury"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13298v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

High-resolution multipath estimation in wideband multiple-input multiple-output (MIMO) channels requires repeated searches over angle of arrival, angle of departure, and propagation distance. This paper presents neural network-assisted CLEAN (NN-CLEAN), which replaces the multidimensional search at each extraction step with a multi-head classifier while retaining least-squares (LS) estimation of the complex path gain, parametric reconstruction, and residual cancellation. The same classifier is applied to successive residuals, allowing the extraction depth to vary without changing its output structure. With the number of iterations prescribed by the reference multipath-component (MPC) count, off-grid synthetic tests show that NN-CLEAN slightly exceeds grid-search CLEAN (GS-CLEAN) in path accuracy for one and two MPCs, although its accuracy declines more rapidly at larger path counts. For complete three-MPC extraction at a batch size of eight, NN-CLEAN achieves an approximately $27\times$ speedup and a $52$-fold reduction in peak GPU memory relative to GS-CLEAN. Applied without retraining to two-MPC line-of-sight (LOS) and non-line-of-sight (NLOS) Sionna ray-tracing channels within a coded MIMO link, NN-CLEAN substantially reduces channel-reconstruction mean-squared error (MSE) and bit error rate (BER) relative to interpolated LS channel estimation. GS-CLEAN retains an accuracy advantage on these channels, indicating the estimation cost associated with the computational savings.
