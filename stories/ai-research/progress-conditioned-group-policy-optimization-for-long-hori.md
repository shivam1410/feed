---
title: "Progress-conditioned Group Policy Optimization for Long-Horizon Agentic Tasks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22724"
authors: ["Kaibing Yang, Guangfeng Cai, Shengtian Yang, Shuo He, Yu Li, Mengyi Liu, Pengwei Chen, Jun Xu, Lei Feng"]
date: "Tue, 28 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.22724v1"
image: ""
generated: "2026-07-28T19:07:22+05:30"
---

arXiv:2607.22724v1 Announce Type: new Abstract: Group-based policy optimization has been increasingly used to train large language model (LLM) agents from sparse outcome rewards by comparing trajectories or steps within a group. However, on difficult long-horizon tasks, this comparison can suffer from a sampling imbalance: repeated or low-effect actions dominate the high-probability region of the policy while useful state-changing actions remain under-sampled. This imbalance produces many all-failed rollout groups, where outcome rewards provide no direction for correcting the policy. Together, these effects can form a self-reinforcing credit trap: failure-dominated sampling yields no outcome-based correction, allowing repeated low-effect actions to persist. To break this loop, we propose Progress-conditioned Group Policy Optimization (ProGPO), which uses first-visit observation coverage only when all samples in a group receive zero outcome reward. Specifically, within such groups, ProGPO assigns higher relative advantages to trajectories or steps that visit more new states since reaching new observations is a prerequisite for task success. Experiments on two challenging agentic benchmarks, ALFWorld and WebShop with Qwen2.5-1.5/7B-Instruct, show that ProGPO consistently improves over group-based baselines, with particularly large gains on hard tasks.
