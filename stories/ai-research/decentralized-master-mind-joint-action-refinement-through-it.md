---
title: "Decentralized Master-Mind: Joint Action Refinement through Iterative Intent Denoising in Multi-Agent Pathfinding"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.32019"
authors: ["Valeriy Vyaltsev", "Anton Andreychuk", "Taisia Zlotnikova", "Konstantin Yakovlev", "Aleksandr Panov", "Alexey Skrynnik"]
date: "2026-09-24T20:00:00.000Z"
score: 76
guid: "2609.32019"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.32019.png"
generated: "2026-10-04T19:07:43+05:30"
---

Decentralized multi-agent path finding (MAPF) with communication requires agents to reach individual goals without collisions under partial observability. Learnable policies trained on expert data provide an effective approach to this problem. However, when several coordinated joint actions are valid in the same context, independently sampling from per-agent distributions can recombine locally valid choices into incompatible joint actions. This failure can arise from the final sampling mechanism even when the per-agent action distributions are learned correctly. DMM (Decentralized Master-Mind) addresses this by replacing one-shot action sampling with discrete, iterative refinement of action intents across communication rounds, inspired by denoising in diffusion models. Agents initialize random action intents and refine them through local communication, coupling their choices before commitment. DMM is pretrained with imitation learning on expert MAPF solutions and further optimized with MICPO, a critic-free group-relative reinforcement-learning method designed for multi-agent, multi-round action refinement. DMM generally achieves higher success rates and lower solution costs than the evaluated learnable baselines. On 1,600 MovingAI tasks, DMM fine-tuned with MICPO solves 1,598, the highest coverage among the evaluated methods, while achieving solution costs close to those of the strongest baselines. DMM also scales to over one million simultaneously acting agents in obstacle-rich environments. These results show that round-level intent refinement can improve joint-action coordination while preserving decentralized execution.
