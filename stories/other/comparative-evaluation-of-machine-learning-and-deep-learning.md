---
title: "Comparative Evaluation of Machine Learning and Deep Learning Models for Wound-Rotor Synchronous Motor Performance Prediction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.21230"
authors: ["K{\\i}van\\c{c} Do\\u{g}an, Ahmet Orhan"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.21230v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.21230v1 Announce Type: new Abstract: Wound rotor synchronous motors have emerged as a strong alternative that eliminates dependence on REEs. However, WRSM design requires the simultaneous optimization of numerous geometric and electromagnetic parameters, and the high computational cost of conventional finite element analysis severely limits the rapid exploration of the large parameter space. Although there are machine-learning-based surrogate modeling studies in the literature, they generally compare only a limited number of models, exclude deep learning architectures, and do not provide a comprehensive benchmark specific to WRSM. In this study, the performance of a total of eight machine learning and deep learning models from four different algorithmic families was systematically compared for the prediction of WRSM torque and motor efficiency. On a dataset of 3351 samples generated using Latin Hypercube Sampling in the Motor-CAD simulation environment, each model was trained with 10 different random seed values and tuned via Optuna hyperparameter optimization. Different from the existing literature, this study jointly offers a broad model spectrum including recent deep learning architectures such as FT Transformer, a multi-seed reproducibility protocol, and a Pareto analysis of the computational cost-accuracy trade-off. The results revealed that neural-network-based models systematically outperform tree-based models. The FT-Transformer model achieved the highest single-model accuracy with R^2 = 0.9928, producing predictions in 0.33 milliseconds and thus obtaining several orders of magnitude speedup compared to FEA. Model performances were evaluated in a multidimensional manner using R^2, MAE, RMSE, and MAPE metrics.
