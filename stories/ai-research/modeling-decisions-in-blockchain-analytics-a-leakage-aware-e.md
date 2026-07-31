---
title: "Modeling Decisions in Blockchain Analytics: A Leakage-Aware Evaluation of Tree-Based vs. Sequential Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.27350"
authors: ["Micha{\\l} Bartnicki, Jaros{\\l}aw A. Chudziak"]
date: "Fri, 31 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.27350v1"
image: ""
generated: "2026-07-31T19:06:14+05:30"
---

arXiv:2607.27350v1 Announce Type: new Abstract: Sybil bots are Ethereum actors that imitate legitimate users to extract airdrop rewards or influence governance. Recent Sybil detection methods increasingly use deep learning and treat blockchain activity as a quasi-linguistic sequence. However, complex sequence models are computationally expensive for real-time monitoring, and their reported performance may be inflated by label leakage from high-signal smart contracts. We ask whether and how organic users, Sybil bots, and MEV bots differ in the structural complexity of their transaction histories; whether sequential models outperform tree-based tabular models once leakage is reduced; whether transaction order or timing provides the stronger behavioral signal; and whether the resulting models are practical for low-latency deployment. Our approach to leakage-aware Sybil bot detection consists of a Blind-Spot protocol and a Transaction Grammar representation of wallet behavior. The former eliminates shortcuts associated with high-signal contracts, whereas the latter models wallets using rhythm, EVM execution structure, and intent. We evaluate this approach on Ethereum actor classification by comparing Transformer and BiLSTM sequence models against XGBoost and SVM baselines. We contribute a framework for leakage-aware Ethereum actor classification and a Transaction Grammar representation of wallet behavior. Our results demonstrate that, under leakage-aware evaluation, XGBoost outperforms Transformer-based sequence models while providing lower latency and estimated energy use.
