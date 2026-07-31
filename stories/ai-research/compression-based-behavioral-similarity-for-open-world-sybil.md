---
title: "Compression-Based Behavioral Similarity for Open-World Sybil Discovery on Ethereum"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.27370"
authors: ["Micha{\\l} Bartnicki, Jaros{\\l}aw A. Chudziak"]
date: "Fri, 31 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.27370v1"
image: ""
generated: "2026-07-31T19:06:14+05:30"
---

arXiv:2607.27370v1 Announce Type: new Abstract: Sybil attackers are Blockchain actors that adopt the characteristics of regular users to exploit airdrops or influence governance. Current methods of Sybil actor detection include constructing graphs, which requires token transfers between examined wallets. Machine learning algorithms have been employed as well, but they treat the task as a closed-set classification problem, making them vulnerable to frequent changes in attack strategies or evasion tactics. We address the following questions: can compression-based similarity differentiate Sybil bots, organic users, and arbitrage bot wallets without direct financial links? What is the effect of high-signal contracts on the discovery of Sybils, and how robust are behavioral graphs under temporal drift and adversarial perturbations? Our approach synthesizes a symbolic Transaction Grammar from EVM (Ethereum Virtual Machine) traces, capturing separately transaction rhythm, execution structure, and functional intent. The high-signal contracts are filtered with our own protocol, called the Blind-Spot Protocol. Gzip-based NCD is used to construct a behavioral graph for Sybil discovery. We validate this framework against supervised machine learning baselines, a temporal split, and synthetic camouflage stress tests. Ultimately, we contribute a leakage-aware behavioral framework for Sybil candidate discovery. Its core NCD primitive requires no supervised training and can expand suspicious seed wallets without explicit funding links. We position the method as a training-free local discovery primitive for open-world blockchain audits, rather than as a formal open-set recognition system.
