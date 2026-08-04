---
title: "Inference-Time Policy Alignment for Fair Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00175"
authors: ["Umer Siddique, Peilang Li, Conor Wallace, Yongcan Cao"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.00175v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00175v1 Announce Type: new Abstract: Deep reinforcement learning (RL) agents achieve strong performance by optimizing scalar reward functions. However, once deployed, the policies of these RL agents are often rigid and costly to adapt to new performance criteria. For instance, an agent trained to maximize expected cumulative reward may not accommodate previously unknown stakeholder preferences. Existing approaches to achieve fairness, a type of preference, in RL typically assume that such preferences are known a priori and require complete retraining of the policy under a fairness-oriented metric. Inspired by inference-time alignment in large language models, we investigate the problem of steering a pretrained RL policy toward welfare-based fairness objectives at inference time without updating the base policy's parameters. We formalize inference-time fairness alignment as a policy shaping problem and propose a multiplicative policy shaping framework that adjusts action probabilities using action-dependent welfare scores, thus requiring no modification to the base policy. Our framework is general and compatible with any deep RL agent. Through extensive experiments across multiple domains, we demonstrate that inference-time policy shaping substantially improves welfare-based fairness objectives while preserving core task performance.
