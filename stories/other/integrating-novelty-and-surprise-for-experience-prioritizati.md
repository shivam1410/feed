---
title: "Integrating Novelty and Surprise for Experience Prioritization and Exploration in Image-Based Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.17373"
authors: ["Hoda Yamani, Henry Williams, Bruce A. MacDonald"]
date: "Thu, 20 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.17373v1"
image: ""
generated: "2026-08-20T19:00:16+05:30"
---

arXiv:2608.17373v1 Announce Type: new Abstract: Sample efficiency is a central challenge in reinforcement learning (RL), particularly in image-based domains where agents must learn from high-dimensional visual inputs. Traditional sampling often relies on random or suboptimal experience selection, leading to redundant updates and slow learning. Improving efficiency requires mechanisms that prioritize informative experiences while also encouraging effective exploration. Prioritized Experience Replay (PER) addresses part of this challenge by reusing high-value transitions, while intrinsic rewards promote the exploration of novel or uncertain states. However, their integration has not been extensively studied. This paper introduces Novelty and Surprise Prioritized Experience Replay (NSPER), which uses novelty to capture underrepresented states and surprise to expose gaps in the agent's understanding of the environment. We further extend this with NSPER+R, integrating these signals as intrinsic rewards to jointly improve replay quality and exploration. Experiments on DeepMind Control Suite tasks show that NSPER and NSPER+R improve training efficiency and convergence speed compared to existing methods in image-based RL.
