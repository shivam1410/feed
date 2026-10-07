---
title: "Reward-Driven Learning under Prompt-Level Differential Privacy"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07212"
authors: ["Jiachen Zhao, Antonia Januszewicz, Taeho Jung"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2610.07212v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Reinforcement learning with verifiable rewards (RLVR) trains a language model on problems that may themselves be confidential, and the trained model can reveal which problems it saw. We study RLVR under prompt-level differential privacy: the released weights must be ({\epsilon},{\delta})-differentially private with respect to the presence of any one training problem. Taking the group of responses to one prompt as the privacy record, our method aggregates their gradients, clips the prompt's contribution once, adds Gaussian noise, and composes the privacy loss across updates, so the budget depends on neither the number of responses per prompt nor the clipping norm; to our knowledge this is the first differential privacy guarantee for RLVR training. We train Qwen2.5-1.5B-Instruct with LoRA at a per-run budget of {\epsilon}=8 and compare, on the same prompts and at the same budget, a control that removes only the reward signal and two private supervised fine-tuning recipes. The reward signal improves accuracy over the control by 2.65 points on MATH and 3.24 on GSM8K, in every seed; the improvement survives a format-robust scorer, at 1.3 points on MATH, and is not explained by response length. At the same budget the private model outperforms both supervised recipes on MATH and GSM8K by 2.3 to 3.8 points, retains 85--90% of the gain of non-private GRPO on these tasks, and on MATH the noise of an eightfold tighter budget costs at most 1.2 points. The reward effect also carries to CommonsenseQA, an exploratory non-mathematical task. Verifier feedback thus remains a usable learning signal under prompt-level privacy.
