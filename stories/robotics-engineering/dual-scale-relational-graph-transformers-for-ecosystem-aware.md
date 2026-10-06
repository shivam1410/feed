---
title: "Dual-Scale Relational Graph Transformers for Ecosystem-Aware Fraud Detection"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04138"
authors: ["Mohsen Nayebi Kerdabadi, Xinrou Li, Yao Xiao, Zijun Yao, Xin Sun"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.04138v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Account takeover (ATO) fraud is a growing threat to digital banking, requiring effective detection while minimizing friction for legitimate customers. Production systems predominantly rely on tabular models that score sessions in isolation, discarding the relational structure of the underlying interaction network. Although graph-based models exploit relationships among sessions and network entities, they primarily reason over local neighborhoods and therefore capture only part of the problem: fraud risk depends jointly on the local relational structure surrounding a session and the evolving global state of the fraud ecosystem. We present HERMES (HEterogeneous Relational Micro--macro graph transformer Encoder for high-risk Sessions), a dual-scale architecture that jointly models these complementary scales of information. Micro-GT captures local heterogeneous graph structure through structured, relation-aware attention over a temporally safe session neighborhood. Complementing this local representation, Macro-GT models ecosystem-level context using non-anticipative climate tokens that summarize fraud dynamics, platform shifts, and infrastructure reuse, together with adaptive class prototypes that track representative fraud and benign session patterns over time. Evaluated on more than 130 million high-risk transaction sessions from a leading U.S. financial institution, HERMES consistently outperforms production and strong graph-based baselines, achieving a 44.44% relative reduction in customer friction and a 24.66% relative improvement in fraud recall over the production system. Ablation and temporal-stability analyses further demonstrate complementary gains from local relational modeling and global ecosystem context across changing fraud regimes.
