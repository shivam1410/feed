---
title: "Decision Transformer with Task-Aware Representations for Offline Meta-Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.04010"
authors: ["Xinbo Zhao, Yuhang Liu, Xin Zhang, Lei Le, Zhaohan Xi, Yingxue Zhang"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.04010v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

To enable effective generalization in offline meta-RL, it is essential to accurately infer the underlying task through latent task representations, which provide a compact and transferable summary of task-specific characteristics for guiding policy generation. In this paper, we propose Contrastive Task-Aware Decision Transformer (CoTA-DT), a DT-based offline meta-RL framework that learns task representations by jointly integrating four complementary components: (i) contrastive learning from offline trajectories, (ii) alignment with natural-language task descriptions, (iii) one-step supervision via a task-conditioned world model, and (iv) long-term supervision via a task-conditioned Q function. The learned task representations are used as conditioning signals for a DT-based policy, enabling task-aware meta-policy learning. To further support generalization in both zero-shot and few-shot settings, we design a language-grounded, self-adaptive strategy that enables effective and reliable adaptation to unseen tasks. Notably, in CoTA-DT, the pretrained LLM serves as a shared backbone for language encoding, world modeling, Q-function estimation, and policy learning. This unified design facilitates parameter sharing, improving both efficiency and generalization. Extensive experiments across diverse offline meta-RL benchmarks demonstrate that CoTA-DT consistently outperforms prior methods, particularly in challenging zero-shot generalization scenarios.
