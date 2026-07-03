---
title: "The Rollout Infrastructure Tax in Coding-Agent Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01415"
authors: ["Daniel Thi Graviet, Lovre Pesut, Ivan Dagelic, Vedran Jukic, Ivan Burazin"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.01415v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01415v1 Announce Type: new Abstract: Coding-agent reinforcement learning treats execution infrastructure as a background implementation detail, despite relying on large numbers of interactive software rollouts. This is a missed opportunity: measuring infrastructure overhead can reveal practical efficiency gains for RL post-training, where small per-rollout savings compound at scale. We present a comparative study of four execution substrates: single containers, hosted sandboxes, Kubernetes-orchestrated containers, and cloud virtual machines. We find up to $110\times$ variation in cold-start latency and a $1.8\times$ spread in projected worker-hours for one million 150-step trajectories. Our results suggest that future coding-agent RL systems should optimize execution substrates as part of the training system itself, not merely as deployment plumbing.
