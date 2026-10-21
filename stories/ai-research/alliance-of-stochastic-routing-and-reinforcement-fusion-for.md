---
title: "Alliance of Stochastic Routing and Reinforcement Fusion for Multi-Model Reasoning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24054"
authors: ["Selim Furkan Tekin, Ling Liu"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.24054v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

This paper studies dynamic model routing under uncertainty in multimodal settings, where a system must select and potentially compose multiple models to answer a query. Standard reinforcement learning approaches for routing often suffer from premature convergence to suboptimal models due to noisy rewards and insufficient exploration. We propose a unified vision-language framework (VL-Scout) for efficient multimodal and multi-step reasoning with turn-based reinforcement fusion. First, VL-Scout combines Bayesian priors, policy gradient optimization, and sequential decision-making to enable structured exploration and adaptive inference. A context-dependent Dirichlet belief model allows for epistemic uncertainty over model quality and is updated online based on observed rewards and context-specific evidence, enabling Thompson-style exploration while serving as a prior for regularization. Second, a routing policy is trained via a KL-regularized REINFORCE objective by maximizing a reward-weighted evidence lower bound, where the policy acts as an amortized posterior, and the Dirichlet belief serves as a prior. Third, we introduce a fusion policy trained with Group Relative Policy Optimization (GRPO) or Reinforcement Learning with Verifiable Rewards (RLVR), which operates over intermediate model rationales and selects between two actions: CONTINUE or ANSWER, terminating with a generated output. We evaluate VL-Scout on four representative multi-modal benchmarks (MMMU, MMMU-Pro, OKVQA, and RealWorldQA), compared against 11 representative routing and policy optimization baselines. Our method provides consistent performance improvements while reducing premature policy collapse. These results highlight the importance of integrating uncertainty-aware priors with both amortized policy learning and sequential fusion for robust and efficient model selection in discrete action spaces
