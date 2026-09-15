---
title: "ReCAST: Reward Credit Assignment across Timesteps for Online Diffusion Reinforcement"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13425"
authors: ["Yihang Chen, Yuanhao Ban, Kuei-Chun Kao, Cho-Jui Hsieh"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13425v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13425v1 Announce Type: new Abstract: Training diffusion models with multiple rewards requires distinguishing user preference from reward informativeness. User preference determines how much each reward should contribute to the overall objective; reward informativeness determines when its feedback is useful during denoising. Some rewards can meaningfully evaluate a sample as soon as global structure emerges, but others become informative only when the sample is nearly clean. To address both questions jointly, we propose ReCAST (Reward Credit ASsignment across T}imesteps), the first method, to our knowledge, for per-reward, timestep-dependent credit assignment in diffusion reward fine-tuning. ReCAST separates user preferences from temporal allocation through a reward-by-timestep weight matrix $W$, whose row sums match the user-specified reward budgets $\lambda$, while its column sums are equal, assigning the same total weight to each denoising step. Under these marginal constraints, ReCAST allocates weight according to each reward's informativeness, quantified by its R\'enyi discriminability gain at each step. These gains telescope to the total discriminability between the reward-induced positive policy and the current policy, providing a basis for temporal credit assignment. We evaluate ReCAST by training SD3.5-Medium under two distinct four-reward settings, each across five reward budgets $\lambda$. ReCAST improves the training rewards in one setting and matches them in the other, improves every held-out judge in both, and is preferred by an independent LLM-as-a-Judge. Together, these results show that ReCAST yields improvements that generalize beyond the training rewards and support its core principle: assigning each reward greater weight at the denoising timesteps where its feedback is most informative.
