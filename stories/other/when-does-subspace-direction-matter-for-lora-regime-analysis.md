---
title: "When Does Subspace Direction Matter for LoRA? Regime Analysis of the Magnitude Principle in Few-Shot Adaptation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23428"
authors: ["Nischal Subedi, Cencheng Shen, Peng Zhao"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23428v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

We show that the importance of a LoRA adapter's initial input-subspace direction is regime-dependent, and we characterize this dependence in theory and experiment. This refines the recent view that spectral initializers help through update magnitude alone. Direction matters most when labeled data are scarce relative to the representation dimension and the activation subspace used for initialization captures supervised task structure. In this regime, the adapter's row span remains sensitive to its starting point, making task-aligned initialization especially useful. A spiked-covariance perturbation analysis characterizes the finite-sample stability of the estimated subspace. A first-step analysis of LoRA training explains why the subspace's alignment with the task matters and motivates an alignment coefficient $\rho$ that closely tracks gains across classification tasks. We test this account with PivotLoRA, which initializes adapters from activation PCA at prediction-relevant positions and applies one output-preserving orthogonal pivot early in training. In few-shot BERT-base classification, PivotLoRA achieves the best average rank among 13 methods and improves over vanilla LoRA in 29 of 30 settings, even though it starts from a smaller input-factor initialization norm. Additional classification experiments extend the evaluation to 7B and 8B Llama decoders. Classification gains diminish with more labeled data, consistent with the proposed regime dependence. A targeted extension to completion-only reasoning also shows improvements on GSM8K and StrategyQA. These findings identify conditions under which initialization direction matters, with subspace-task alignment offering a low-cost diagnostic before training for classification.
