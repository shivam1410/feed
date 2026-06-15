---
title: "Non-Parametric Machine Text Detection via Multi-View Gaussian Processes"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14060"
authors: ["Aleem Khan, Nicholas Andrews"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2606.14060v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.14060v1 Announce Type: new Abstract: Adversarial conditions such as paraphrasing and targeted style transfer sharply degrade the accuracy of machine text detectors. A document, however, carries multiple complementary signals (e.g., stylistic features, likelihood and rank-order features, and structural features), and an attack that suppresses one may leave others intact. While a parametric classifier can learn to combine these features given sufficient supervision, classifiers are prone to making confidently incorrect predictions when the distribution shifts (e.g., novel attacks or unseen language models). To address this, we propose a multi-view, non-parametric detection framework that extracts complementary feature views from the same document and aggregates per-view evidence through a Gaussian process ensemble. By aggregating evidence across views, an adversary must simultaneously defeat multiple independent axes of detection, substantially raising the cost of evasion. The Gaussian process formulation additionally provides calibrated probabilities and principled abstention on out-of-distribution inputs, supporting reliable deployment in high-stakes settings. We evaluate on three benchmarks spanning diverse generators and attacks: the DetectRL and RAID benchmarks, and the PAN2025 shared task and demonstrate that our multi-view detector maintains strong performance under the considered attacks, outperforming existing approaches against held out attacks.
