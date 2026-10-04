---
title: "On-Policy or Off-Policy Learning? A Systematic Study of Distillation Dynamics"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.35259"
authors: ["Julianna Piskorz", "Antonin Berthon", "Mihaela van der Schaar"]
date: "2026-09-27T20:00:00.000Z"
score: 68
guid: "2609.35259"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.35259.png"
generated: "2026-10-04T19:07:43+05:30"
---

On-policy learning has been argued to reduce catastrophic forgetting, produce sparser parameter updates, and improve generalisation. However, existing comparisons between supervised fine-tuning and reinforcement learning vary many factors simultaneously, making the contribution of rollout policy difficult to isolate. We study the effect of rollout policy in a controlled strong-to-weak distillation setting, by independently varying rollout policy, token-level KL direction, and learning rate across the Llama3 and Qwen2.5 model families and reasoning tasks spanning scientific, medical, and arithmetic domains. Our analysis reveals a nuanced picture of distillation dynamics in which rollout policy does not necessarily play a central role. Instead, token-level KL direction more clearly shapes task performance and output coverage, while learning rate governs forgetting and update sparsity. Analysis of KL gradients and experiments along a continuous student-teacher rollout-policy spectrum explain this pattern: forward KL is remarkably robust to rollout policy, with its performance stable and strong despite changes to the rollout policy, whereas reverse KL is substantially more sensitive and favours student-generated rollouts. On-policy data nevertheless improves generalisation to harder variants of the Countdown arithmetic task under both KL directions, although this advantage does not reliably persist after subsequent RLVR. Our broader conclusions remain robust to removing gradient clipping, using sampled KL estimators, and training on tasks requiring longer reasoning chains. Overall, our results challenge the view that on-policy rollouts are inherently preferable and show that their value depends critically on the objective, evaluation setting, and optimisation hyperparameters.
