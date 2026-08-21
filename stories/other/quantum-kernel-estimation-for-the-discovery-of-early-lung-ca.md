---
title: "Quantum Kernel Estimation for the Discovery of Early Lung Cancer Detection"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.19304"
authors: ["Hamed Javidi, Alex Zajichek, Hakan Doga, Laxmi Parida, Filippo Utro, Peter J. Mazzone"]
date: "Fri, 21 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.19304v1"
image: ""
generated: "2026-08-21T19:00:17+05:30"
---

arXiv:2608.19304v1 Announce Type: new Abstract: Lung cancer screening with low-dose chest computed tomography reduces mortality, but its impact is limited by uptake, adherence, and management challenges. Blood-based cell-free DNA (cfDNA) biomarkers offer a complementary approach, although early detection remains difficult because of lung cancer heterogeneity and high-dimensional, nonlinear molecular signals. We evaluated quantum-classical hybrid machine learning for lung cancer detection using DNA fragmentomics and DNA methylation. After feature selection, models were trained using 20- and 40-feature subsets. Features were encoded into quantum Hilbert space using angle and dense-angle feature maps with multiple entanglement strategies. Fidelity-based quantum kernels were computed with exact statevector simulation and integrated with precomputed-kernel SVM and kernel-PCA logistic regression and compared with an SVM model trained on the original features. This framework enabled systematic evaluation of how encoding and entanglement design affect classification. Across repeated held-out evaluations, quantum-kernel models achieved competitive performance on both datasets. For fragmentomics, several 20-feature configurations improved AUC relative to a classical SVM baseline, suggesting effective capture of nonlinear cfDNA fragmentation structure. For methylation, the classical SVM achieved the highest AUC, although selected quantum models remained competitive and improved specificity in some cases. Increasing features from 20 to 40 did not consistently improve performance and often increased variability. Overall, these results support quantum kernel methods as a promising approach for cfDNA-based lung cancer detection.
