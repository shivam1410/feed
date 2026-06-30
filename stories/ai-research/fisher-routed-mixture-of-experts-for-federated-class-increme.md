---
title: "Fisher-Routed Mixture of Experts for Federated Class-Incremental Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28835"
authors: ["Wenhao Yuan, Chenchen Lin, Jian Chen, Jinfeng Xu, Zewei Liu, Edith Cheuk Han Ngai"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 46
guid: "oai:arXiv.org:2606.28835v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28835v1 Announce Type: new Abstract: Federated Learning (FL) emerged as a promising distributed machine learning paradigm. However, extending FL to the class incremental learning scenarios introduces unique challenges: 1) Capacity conflict and catastrophic forgetting from the shared model overloading, 2) Heterogeneity from Non-Independent and Identically Distributed (Non-IID) data, and 3) Synchronized class misalignment. In this paper, we propose \textbf{F}isher-Routed \textbf{M}i\textbf{X}ture of Experts for \textbf{Fed}erated Class-Incremental Learning (\textsc{FedFMX}), a novel framework to address these challenges via adaptive expert specialization across clients. The crucial insight is to route each sample to an expert subset that jointly optimizes knowledge acquisition and retention. Specifically, we introduce a Fisher-Routed Expert Scoring (FRES) module to estimate expert importance via Fisher-based stability cost and gradient-based plasticity gain. Then, we design an Adaptive Expert Selection (AES) module by quantifying marginal contributions for adaptive expert subset determination. Finally, by the routing-aware regularization (RAR), we achieve load balance and efficient FL training. We theoretically prove the $\mathcal{O}(T^{-1})$ convergence rate. Extensive experiments on multiple benchmarks compared with state-of-the-art methods demonstrate the superiority of \textsc{FedFMX}.
