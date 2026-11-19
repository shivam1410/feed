---
title: "JEPA as a Transferable Optimizer: Learning and Understanding Black-Box Optimization from Reward-Agnostic Pretraining"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23608"
authors: ["Mayukh Debnath, Manan Roy Choudhury"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23608v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Black-box optimization evaluates candidates through simulations, rollouts, or experiments, often without gradients. Learned optimizers are usually judged by whether they outperform existing methods. We ask a complementary question: what information does a learned optimizer use from its search history? We introduce JEPA-PS (JEPA Policy Search), based on a Joint-Embedding Predictive Architecture. It is pretrained on random rollouts using parameter vectors and scalar returns. Its latent-prediction objective predicts the next point in an optimization trajectory rather than its reward or gradient, allowing us to examine what was tried and how well it performed. At test time, JEPA-PS reads a short evaluation history and proposes a candidate in one forward pass, without task descriptions, reward shaping, or test-time gradients. We evaluate it on 15 control environments against 12 optimizers, including evolutionary methods, Bayesian optimization, CMA-ES, and an LLM optimizer. JEPA-PS is competitive with tuned classical baselines and outperforms the LLM optimizer by more than 2x on Swimmer at 71x lower per-step cost. It also transfers zero-shot to environments excluded from pretraining. Null-model comparisons and decoder-training ablations indicate that its latent representation carries information beyond simple history statistics; every trained decoder variant performs worse than the default frozen representation. Our main finding is that the history JEPA-PS uses depends on the task. On smooth landscapes it uses the full trajectory, whereas on rugged landscapes the best-seen point carries nearly all the signal. This memory requirement has a weak positive correlation with fitness-distance correlation (FDC; r=0.112, n=7), while an independent reward-ordering sensitivity probe does not corroborate the relationship (r=-0.024, n=7). Code: https://github.com/mdebnath22/jepa-props.
