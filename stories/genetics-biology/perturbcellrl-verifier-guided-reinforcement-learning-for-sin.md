---
title: "PerturbCellRL: Verifier-Guided Reinforcement Learning for Single-Cell Perturbation Prediction"
category: "Genetics & Biology"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27752"
authors: ["Dongxia Wu, Mingyu Li, Yuhui Zhang, Anurendra Kumar, Emma Lundberg, Serena Yeung-Levy, Emily B. Fox"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.27752v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27752v1 Announce Type: new Abstract: Single-cell perturbation models can reduce costly wet-lab screening by predicting how cells respond transcriptionally to interventions. While recent generative models improve population-level prediction, individual generated cells are not explicitly checked for biological consistency. We introduce PerturbCellRL, a reinforcement learning (RL) framework that post-trains a pretrained single-cell transcriptomic generator using a suite of cell-level verifiers as rewards. These verifiers define four rewards: Pearson top-k similarity, RMSE top-k proximity, DE Spearman, and Pathway activity. The Pathway activity verifier rewards cells whose pathway responses match known perturbation biology. We evaluate PerturbCellRL on multiple genetic and chemical perturbation benchmarks. Across these benchmarks, PerturbCellRL improves over the pretrained flow-matching generator on reward-aligned evaluation metrics and a held-out evaluation metric. Moreover, PerturbCellRL remains competitive with state-of-the-art methods on population-level metrics. Together, these results frame trustworthy single-cell prediction as verifier-guided generative alignment, moving beyond matching expression distributions toward predictions whose single-cell perturbation effects are explicitly checked for biological consistency.
