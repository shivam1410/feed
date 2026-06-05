---
title: "Sparse Mixture-of-Experts Reward Models Learn Interpretable and Specialized Experts for Personalized Preference Modeling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04284"
authors: ["Yifan Wang, Jinyi Mu, Mayank Jobanputra, Yu Wang, Ji-Ung Lee, Soyoung Oh, Isabel Valera, Vera Demberg"]
date: "Fri, 05 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.04284v1"
image: ""
generated: "2026-06-06T01:41:01+05:30"
---

arXiv:2606.04284v1 Announce Type: new Abstract: Preference modeling plays a central role in reinforcement learning from human feedback (RLHF), enabling large language models (LLMs) to align with human values. However, most existing approaches assume a universal reward function, neglecting the diversity and heterogeneity of human preferences. To address this limitation without additional annotation costs, recent work has proposed learning multiple preference components from binary data and combining them to model individual preferences. Nevertheless, these components often fail to capture coherent and disentangled patterns, limiting their interpretability and effectiveness for personalization. In this work, we propose a sparse Mixture-of-Experts (MoE) reward model that encourages sparse routing and expert diversity during training on binary preference data. Across controlled and real-world experiments, sparse MoE learns interpretable routing patterns and specialized experts. It also improves test-time personalization, and post-adaptation shifts in expert weights provide a qualitative lens for analyzing how the model adapts to personalized preferences.
