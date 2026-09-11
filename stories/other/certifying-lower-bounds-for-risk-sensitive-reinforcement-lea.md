---
title: "Certifying Lower Bounds for Risk-Sensitive Reinforcement Learning under Adversarial State Perturbations"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.10866"
authors: ["Tong Li, Saunak Kumar Panda, Yisha Xiang"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.10866v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.10866v1 Announce Type: new Abstract: Reinforcement learning (RL) agents deployed in real-world environments are often vulnerable to adversarial perturbations in state observations, creating risks in safety-critical applications. Certification methods can improve robustness against adversarial perturbations by providing lower bounds on expected cumulative rewards. Existing certification methods, however, mainly focus on risk-neutral objectives. In this paper, we extend certification methods to risk-sensitive objectives by establishing lower bounds on the exponential utility of cumulative rewards under $l_{p}$-norm-bounded state adversarial perturbations ($1\leq p <\infty$). By introducing a $\phi$-divergence relaxation of the perturbation set, we formulate the risk-sensitive certification problem as a convex optimization and derive its dual to obtain a tractable approximation of the certified lower bound. We further propose an empirical method that improves certified lower bounds by selecting the training risk-aversion parameter $\beta$ independently of the risk level used during evaluation. Experiments on both OpenAI Gym environments and a machine replacement problem show that, compared to risk-neutral training, risk-averse training generally yields policies with higher certified lower bounds, particularly under larger perturbation budgets. Moreover, under both risk-neutral and risk-averse evaluation settings, increasing risk aversion during training leads to non-monotonic certification performance, where certified lower bounds initially improve but eventually decrease due to overly conservative policies.
