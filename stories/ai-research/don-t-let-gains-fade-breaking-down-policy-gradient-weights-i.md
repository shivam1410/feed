---
title: "Don't Let Gains FADE: Breaking Down Policy Gradient Weights in RL"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01490"
authors: ["Juliette Decugis, Sean O'Brien, Francis Bach, Gabriel Synnaeve, Taco Cohen"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.01490v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01490v1 Announce Type: new Abstract: Reinforcement learning post-training dramatically improves LLM reasoning, but suffers from training instability and diversity collapse. Advantage functions offer an appealing fix: they reshape the training objective, reweight which rollouts drive learning, and are trivial to implement. Yet a proliferation of methods makes it unclear which advantage to use and when. We cut through the confusion with a unifying framework that decomposes any advantage into its positive and negative gradient mass along two orthogonal axes. On the sign axis, imbalanced updates collapse either entropy or weight geometry. On the difficulty axis, hard-problem focus sharpens signal but costs sample size. Both trade-offs shift during training: exploration favors balance and hard focus; exploitation favors suppression and medium focus. This motivates FADE (Focal Advantage with Dynamic Entropy), a self-adapting advantage that reads training dynamics to schedule the gradient weight automatically. FADE reaches peak pass@1 20k steps earlier than the best static baseline at the 7B scale and 2k steps earlier at the 32B , while achieving the best accuracy-diversity trade-off across all pass@k on LiveCodeBench and AIME.
