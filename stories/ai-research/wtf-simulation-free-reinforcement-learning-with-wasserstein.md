---
title: "WTF?! Simulation-Free Reinforcement Learning with Wasserstein-Tilted Flow Maps"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.27033"
authors: ["Abbas Mammadov, Jerry Y. Huang, Justin Lin, Partha Kaushik, Sheel Shah, Kartik Nair, Yee Whye Teh, Nicholas M. Boffi"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2609.27033v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.27033v1 Announce Type: new Abstract: Reward fine-tuning aims to update a pre-trained flow-based generative model to improve the downstream reward of its generated samples. Existing methods typically formulate this problem as sampling from a reward-tilted distribution, the solution to a KL-regularized reward-maximization problem. Here, we introduce an optimal transport regularizer built directly from the pre-trained drift. Unlike KL reward tilting, the resulting objective transports individual samples toward higher reward rather than reweighting the base distribution. We show that the resulting problem is equivalent to a deterministic optimal control problem on the flow. Given a pre-trained flow map, this equivalence yields a simulation-free reinforcement learning algorithm for fine-tuning generative flows. We call the resulting framework Wasserstein-Tilted Flow Maps (WTF), the first end-to-end fine-tuning recipe native to flow maps. The output is a fine-tuned flow map that retains strong reward-aligned performance at few-step inference budgets without post-hoc distillation. Experiments on ImageNet-256 and text-to-image show that WTF achieves higher reward with comparable or higher diversity than baselines, while requiring up to $280\times$ less training compute. More broadly, we argue that accelerated samplers such as flow maps are essential infrastructure for efficient post-training, and that the dominant KL-regularized formulation is only one of many choices worth revisiting.
