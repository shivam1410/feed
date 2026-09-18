---
title: "AURA: Adaptive Uncertainty-Routed Analysis for Email Threat Detection"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19873"
authors: ["Omran Berjawi, Walid fahs, Rida Khatoun"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19873v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19873v1 Announce Type: new Abstract: Email spam and phishing attacks remain a critical security threat. Adversaries increasingly exploit large language models to craft contextually convincing malicious messages, and existing spam detection systems often struggle to keep pace. Generalization across diverse and evolving attack scenarios is limited, which reduces effectiveness once these systems are deployed in practice. This paper introduces Adaptive Uncertainty-Routed Analysis (AURA), a multimodal email threat detection system that analyzes both the content of an email and its embedded URLs. AURA is built around two layers: the first quantifies prediction uncertainty from a URL classifier, and only ambiguous messages are escalated to a fine-tuned transformer encoder for semantic analysis. The system is evaluated on eight heterogeneous training corpora together with two held-out real-world corpora spanning a decade of adversarial campaigns. AURA reaches a macro F1-score of 0.9858 in-distribution, and on NazPhish-Eval and GuenterTrap-Eval it maintains 0.9502 and 0.9436, respectively, which is evidence of robust generalization under genuine distribution shift.
